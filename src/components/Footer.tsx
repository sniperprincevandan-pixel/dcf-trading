import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#121514] border-t border-[#B69A60]/20 text-[#DCE5DB]">
      {/* Top Banner / Quick Connect */}
      <div className="border-b border-white/5 py-10 bg-[#151917]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B69A60] font-semibold">
                Direct Commercial Enquiries
              </span>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#F5F3EC] mt-1"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Ready to coordinate your bulk feed supply?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60]/50 rounded-sm hover:bg-[#20523f] hover:border-[#B69A60] transition-colors group shadow-sm"
            >
              <span>Connect With Our Team</span>
              <ArrowUpRight className="w-4 h-4 text-[#B69A60] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-sm text-[#8E9490] leading-relaxed max-w-sm mt-4">
              DCF Trading Pvt Ltd is dedicated to connecting bulk brewery and distillery spent grain with the ongoing feed requirements of commercial dairy farms through dependable, professional supply relationships.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#B69A60]">
              <ShieldCheck className="w-4 h-4 text-[#B69A60]" />
              <span>Commercial Bulk Supply &middot; B2B Dairy Feed</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F3EC] border-b border-[#B69A60]/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#B69A60] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B69A60] transition-colors">
                  About DCF Trading
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#B69A60] transition-colors">
                  Brewery Spent Grain
                </Link>
              </li>
              <li>
                <Link href="/supply-logistics" className="hover:text-[#B69A60] transition-colors">
                  Supply & Logistics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B69A60] transition-colors">
                  Business Enquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#B69A60] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Focus */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F3EC] border-b border-[#B69A60]/20 pb-2">
              Sectors Served
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8E9490]">
              <li>Commercial Dairy Farms</li>
              <li>Large Herd Cattle Operations</li>
              <li>Livestock Feed Distributors</li>
              <li>Regional Feed Compounding</li>
              <li>Bulk Agricultural Buyers</li>
            </ul>
          </div>

          {/* Col 5: Contact Placeholders */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F3EC] border-b border-[#B69A60]/20 pb-2">
              Contact & Details
            </h4>
            <ul className="space-y-3 text-xs text-[#8E9490]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#DCE5DB] font-medium">Business Email</span>
                  <span className="font-mono text-[11px] text-[#8E9490]">
                    enquiry@dcftrading.com <span className="text-[#B69A60] text-[10px]">[Placeholder]</span>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#DCE5DB] font-medium">Phone Support</span>
                  <span className="font-mono text-[11px] text-[#8E9490]">
                    +91 (0) XX XXXX XXXX <span className="text-[#B69A60] text-[10px]">[To be updated]</span>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#DCE5DB] font-medium">Corporate Office</span>
                  <span className="text-[11px] text-[#8E9490]">
                    [Registered Address, City, State, India] <span className="text-[#B69A60] text-[10px]">[Editable]</span>
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <svg
                  className="w-4 h-4 text-[#B69A60] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a
                  href="#placeholder"
                  className="hover:text-[#B69A60] transition-colors text-[11px]"
                >
                  LinkedIn Profile <span className="text-[#B69A60] text-[10px]">[Placeholder]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Nutritional & Operational Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[11px] text-[#8E9490]/80 leading-relaxed italic">
            <strong>Professional Notice:</strong> Spent grain is a co-product of brewing and distilling processes. Nutritional values, moisture content, and handling suitability vary by source batch and farm storage practice. Feed inclusion should always be determined by the farm manager or qualified livestock nutritionist based on verified laboratory testing and herd dietary plans. Factual company milestones and operational facilities will be confirmed upon formal engagement.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9490]">
          <div>
            &copy; {currentYear} DCF Trading Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5F3EC] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#F5F3EC] transition-colors">
              Submit Enquiry
            </Link>
            <span className="text-[#8E9490]/60">CIN: [UXXXXXXXXXXPTCXXXXXX — Pending Update]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
