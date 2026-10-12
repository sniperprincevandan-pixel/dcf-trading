import Link from "next/link";
import { ArrowLeft, Home, PackageCheck, PhoneCall } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#171B19] text-[#F5F3EC] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <div className="w-16 h-16 rounded-full bg-[#183F30] border border-[#B69A60]/40 flex items-center justify-center text-[#B69A60] font-mono font-bold text-xl mx-auto">
          404
        </div>

        <h1
          className="text-3xl sm:text-4xl font-semibold text-[#F5F3EC]"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          Page Not Found
        </h1>

        <p className="text-sm text-[#8E9490] leading-relaxed">
          The requested page could not be located. It may have been moved or the link entered might be incorrect.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm hover:bg-[#20523f] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1F2522] text-[#DCE5DB] border border-white/10 rounded-sm hover:border-[#B69A60] transition-colors"
          >
            <PackageCheck className="w-3.5 h-3.5 text-[#B69A60]" />
            <span>View Products</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1F2522] text-[#DCE5DB] border border-white/10 rounded-sm hover:border-[#B69A60] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B69A60]" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
