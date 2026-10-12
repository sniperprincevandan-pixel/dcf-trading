import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#183F30]">
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-white/30" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#B69A60]/40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#122A20] text-[#B69A60] border border-[#B69A60]/30 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B69A60]" />
          <span>Commercial B2B Collaboration</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F3EC] tracking-tight leading-tight max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          Looking for a Cattle Feed Supply Partner?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#DCE5DB] max-w-2xl mx-auto leading-relaxed">
          Tell us about your feed requirements and let our team discuss the right supply arrangement for your business. We prioritize consistent communication and practical bulk solutions.
        </p>

        {/* Value Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#DCE5DB]/90">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B69A60]" />
            <span>Bulk volume assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B69A60]" />
            <span>Logistics coordination</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B69A60]" />
            <span>Direct B2B communication</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider uppercase bg-[#F5F3EC] text-[#171B19] rounded-sm hover:bg-white hover:shadow-lg transition-all duration-200 group font-sans"
          >
            <span>Send a Business Enquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#183F30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-wider uppercase bg-transparent text-[#F5F3EC] border border-[#B69A60]/60 rounded-sm hover:bg-[#122A20] hover:border-[#B69A60] transition-colors"
          >
            <span>Review Product Information</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
