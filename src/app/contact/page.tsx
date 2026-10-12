import { Suspense } from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Commercial Enquiries | DCF Trading Pvt Ltd",
  description:
    "Submit your bulk cattle feed or brewery spent grain requirement to DCF Trading Pvt Ltd. Direct B2B commercial coordination for dairy farms and distributors.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-28 bg-[#171B19]">
      {/* HERO SECTION */}
      <section className="relative py-16 lg:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#183F30] text-[#B69A60] border border-[#B69A60]/30 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B69A60]" />
              <span>Commercial Desk</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F3EC] leading-[1.12]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Start a Business Conversation.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#DCE5DB]/85 leading-relaxed">
              Whether you operate a commercial dairy farm, represent a feed distribution network, or wish to explore ongoing spent grain supply arrangements, our team is ready to evaluate your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & CONTACT DETAILS SECTION */}
      <section className="py-16 lg:py-24 bg-[#141816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Col: Contact Information & Corporate Placeholders */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B69A60] block mb-2">
                  Direct Channels
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-[#F5F3EC]"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  Commercial Trade Desk
                </h2>
                <p className="mt-3 text-sm text-[#8E9490] leading-relaxed">
                  We review bulk enquiries during standard business hours and coordinate directly with farm owners and procurement heads.
                </p>
              </div>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                <div className="p-5 bg-[#1A201D] border border-white/5 rounded-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E9490] block">
                      Commercial Email
                    </span>
                    <span className="font-mono text-sm text-[#F5F3EC] block mt-0.5">
                      enquiry@dcftrading.com
                    </span>
                    <span className="text-[11px] text-[#B69A60] block mt-0.5">
                      [Official Business Inquiries Placeholder]
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-[#1A201D] border border-white/5 rounded-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E9490] block">
                      Phone / Trade Inquiries
                    </span>
                    <span className="font-mono text-sm text-[#F5F3EC] block mt-0.5">
                      +91 (0) XX XXXX XXXX
                    </span>
                    <span className="text-[11px] text-[#B69A60] block mt-0.5">
                      [Corporate contact line to be updated]
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-[#1A201D] border border-white/5 rounded-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E9490] block">
                      Registered Corporate Office
                    </span>
                    <span className="text-sm text-[#F5F3EC] block mt-0.5">
                      DCF Trading Pvt Ltd
                    </span>
                    <span className="text-xs text-[#8E9490] block mt-0.5">
                      [Registered Corporate Address, City, State, India]
                    </span>
                    <span className="text-[11px] text-[#B69A60] block mt-0.5">
                      [Editable placeholder]
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-[#1A201D] border border-white/5 rounded-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E9490] block">
                      Business &amp; Dispatch Hours
                    </span>
                    <span className="text-sm text-[#F5F3EC] block mt-0.5">
                      Monday &ndash; Saturday: 08:30 &ndash; 18:30 IST
                    </span>
                    <span className="text-xs text-[#8E9490] block mt-0.5">
                      Dispatch schedules coordinated 24/7 per contract
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrity Notice */}
              <div className="p-5 bg-[#171B19] border border-[#B69A60]/20 rounded-sm flex items-start gap-3.5 text-xs text-[#8E9490]">
                <HelpCircle className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Response Standard:</strong> Every submitted enquiry is evaluated for source proximity and transport feasibility. Our team typically provides an initial response within 24 business hours.
                </p>
              </div>
            </div>

            {/* Right Col: Functional Validated B2B Form wrapped in Suspense */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-sm text-[#8E9490]">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
