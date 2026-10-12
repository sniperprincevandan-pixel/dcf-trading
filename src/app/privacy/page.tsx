import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | DCF Trading Pvt Ltd",
  description:
    "Privacy Policy and data protection terms for DCF Trading Pvt Ltd commercial enquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-28 bg-[#171B19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A60] hover:text-[#C9B078] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#183F30] text-[#B69A60] border border-[#B69A60]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B69A60]" />
            <span>Legal Documentation</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-semibold text-[#F5F3EC]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Privacy Policy &amp; Data Handling
          </h1>
          <p className="text-xs text-[#8E9490] mt-2">
            Effective Date: October 2026 &middot; DCF Trading Pvt Ltd
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#DCE5DB]/85 leading-relaxed bg-[#1F2522] border border-white/5 rounded-sm p-6 sm:p-10 shadow-xl">
          <section className="space-y-3">
            <h2
              className="text-xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              1. Overview
            </h2>
            <p>
              DCF Trading Pvt Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;company&rdquo;) respects the confidentiality of all business information provided by commercial farm managers, distributors, and trading partners. This policy outlines how information submitted through our website (dcftrading.com) is processed and secured.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to process B2B cattle feed enquiries, evaluate supply logistics, and formulate commercial proposals:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#8E9490]">
              <li>Contact details: Full Name, Business Email, Telephone/Mobile Number.</li>
              <li>Operational details: Dairy Farm / Company Name, Delivery City and State.</li>
              <li>Feed parameters: Estimated Tonnage, Herd Size, Supply Frequency, and Unloading Specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2
              className="text-xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              3. Purpose of Processing
            </h2>
            <p>
              The information you provide is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#8E9490]">
              <li>Evaluating sourcing proximity and transport feasibility for your dairy farm location.</li>
              <li>Preparing accurate commercial quotations and supply schedules.</li>
              <li>Direct telephone or email communication regarding your enquiry.</li>
            </ul>
            <p>
              We do not sell, rent, or monetize your contact or farm information to third-party marketing networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              4. Data Retention &amp; Security
            </h2>
            <p>
              Commercial enquiry data is maintained within secure corporate communications systems. Reasonable industry-standard administrative and physical safeguards are maintained to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2
              className="text-xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              5. Contact Regarding Privacy
            </h2>
            <p>
              If you wish to update or remove your business enquiry details from our records, please contact our commercial desk at{" "}
              <span className="text-[#B69A60] font-mono">
                enquiry@dcftrading.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
