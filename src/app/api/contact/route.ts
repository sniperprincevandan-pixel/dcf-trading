import { NextResponse } from "next/server";

export interface ContactPayload {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  cityState: string;
  enquiryType: string;
  requiredQuantity?: string;
  supplyFrequency?: string;
  additionalRequirements?: string;
  privacyConsent: boolean;
  honeypot?: string; // Bot protection
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    // 1. Honeypot check for bots
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Validate required fields
    if (
      !data.fullName?.trim() ||
      !data.companyName?.trim() ||
      !data.phone?.trim() ||
      !data.email?.trim() ||
      !data.cityState?.trim() ||
      !data.enquiryType?.trim() ||
      !data.privacyConsent
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields and accept the privacy consent.",
        },
        { status: 422 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid business email address." },
        { status: 422 }
      );
    }

    // Generate unique B2B Enquiry Reference Number
    const timestamp = Date.now().toString(36).toUpperCase();
    const referenceId = `DCF-${timestamp.slice(-6)}`;

    // Log enquiry details server-side
    console.log(`[B2B ENQUIRY RECEIVED] Ref: ${referenceId}`);
    console.log(JSON.stringify({ referenceId, timestamp: new Date().toISOString(), ...data }, null, 2));

    // Check if external email provider (e.g. Resend) is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "enquiry@dcftrading.com";

    let emailSent = false;
    let providerNotice = "Enquiry logged to secure corporate enquiry stream.";

    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "DCF Trading Website <enquiries@dcftrading.com>",
            to: [notificationEmail],
            reply_to: data.email,
            subject: `[B2B Lead - ${referenceId}] ${data.enquiryType} from ${data.companyName}`,
            html: `
              <h2>New Commercial Enquiry: ${referenceId}</h2>
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Company/Farm:</strong> ${data.companyName}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Location:</strong> ${data.cityState}</p>
              <p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>
              <p><strong>Quantity Required:</strong> ${data.requiredQuantity || "Not specified"}</p>
              <p><strong>Preferred Frequency:</strong> ${data.supplyFrequency || "Not specified"}</p>
              <p><strong>Message / Notes:</strong><br />${(data.additionalRequirements || "None").replace(/\n/g, "<br>")}</p>
            `,
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          providerNotice = "Notification dispatched to trading desk.";
        } else {
          console.warn("[Resend Notice] Resend delivery failed or unverified domain, fallback to internal log.");
        }
      } catch (err) {
        console.warn("[Email Dispatch Warning]", err);
      }
    } else {
      providerNotice =
        "Development Mode: Enquiry logged successfully. To dispatch live emails, configure RESEND_API_KEY and CONTACT_NOTIFICATION_EMAIL environment variables.";
    }

    return NextResponse.json({
      success: true,
      referenceId,
      emailSent,
      providerNotice,
      receivedAt: new Date().toISOString(),
      message:
        "Your business enquiry has been recorded. Our commercial coordinator will review your requirements and respond within 24 business hours.",
    });
  } catch (error) {
    console.error("[API Contact Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
