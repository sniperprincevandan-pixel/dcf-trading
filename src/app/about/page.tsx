import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCheck2,
  Users2,
  Handshake,
  ArrowRight,
  Info,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | DCF Trading Pvt Ltd",
  description:
    "Learn about DCF Trading Pvt Ltd, our approach to commercial cattle feed supply, brewery spent grain sourcing, and dependable B2B relationships.",
};

const PHILOSOPHY_POINTS = [
  {
    title: "Clarity Over Volume Promises",
    text: "We believe in establishing what is practically achievable in terms of load consistency, moisture consistency, and transport turnaround before entering long-term supply commitments.",
  },
  {
    title: "Operational Understanding",
    text: "Livestock feeding operates on stringent schedules. Our team recognizes that a missed delivery or compromised feed directly impacts daily farm management.",
  },
  {
    title: "Responsible Co-Product Management",
    text: "Brewery and distillery spent grains are valuable agricultural co-products. Proper transport coordination ensures feed arrives in sound condition for immediate use or ensiling.",
  },
  {
    title: "Direct Commercial Access",
    text: "Clients communicate directly with supply coordinators who understand load availability, dispatch timelines, and the commercial terms of bulk trade.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-28">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-[#171B19] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#183F30] text-[#B69A60] border border-[#B69A60]/30 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B69A60]" />
              <span>Company Profile</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F3EC] leading-[1.12]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Business Built Around Trust.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#DCE5DB]/85 leading-relaxed">
              DCF Trading Pvt Ltd is a commercial trading entity focused on the supply and distribution of brewery and distillery spent grain for livestock and dairy farm nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE & OUR BUSINESS */}
      <section className="py-20 lg:py-24 bg-[#141816] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Who We Are"
                title="A Focused Commercial Trading Enterprise"
                description="Bridging industrial brewing and distilling streams with modern livestock operations."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#DCE5DB]/80 leading-relaxed">
                <p>
                  DCF Trading Pvt Ltd operates with a distinct industrial-agricultural focus. As the dairy farming sector in India becomes increasingly organized and intensive, the demand for consistent, high-bulk feeding solutions has grown substantially.
                </p>
                <p>
                  Our primary business involves identifying reliable streams of spent grain—often described as cooked barley or brewers mash—and coordinating its transport and distribution directly to commercial dairy operations and feed buyers.
                </p>
                <p>
                  We prioritize commercial transparency: we do not over-promise capacity or make untested assertions about feed output. Instead, we structure practical agreements that allow dairy managers to plan their feeding strategies with confidence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-[420px] rounded-sm overflow-hidden border border-[#B69A60]/20 shadow-xl">
                <Image
                  src="/images/grain_silos.jpg"
                  alt="Modern industrial grain storage silos and agricultural feed logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B19]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#171B19]/90 backdrop-blur-md border border-white/10 rounded-sm">
                  <span className="text-[10px] uppercase tracking-widest text-[#B69A60] font-semibold block">
                    Operational Principle
                  </span>
                  <span className="text-sm font-semibold text-[#F5F3EC]">
                    Reliable Supply Chain Coordination & Bulk Trade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR PRODUCT FOCUS & APPROACH */}
      <section className="py-20 lg:py-24 bg-[#171B19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-80 sm:h-[400px] rounded-sm overflow-hidden border border-[#B69A60]/20 shadow-xl">
                <Image
                  src="/images/dairy_cattle_hero.jpg"
                  alt="Dairy cattle feeding on commercial dairy farm"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#183F30]/20 mix-blend-multiply" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHeader
                eyebrow="Product Focus"
                title="Cooked Barley & Brewery Co-Products"
                description="Understanding the characteristics of bulk spent grain for livestock applications."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#DCE5DB]/80 leading-relaxed">
                <p>
                  Spent grain is created when malted barley and cereal grains undergo mashing in brewing or distilling plants. The remaining solid mash retains fiber, protein, and palatable grain constituents.
                </p>
                <p>
                  Because wet spent grain contains high natural moisture, managing the timeline between grain discharge and farm unloading is critical. Our trade approach centers on understanding these handling requirements so both the supplier and the dairy farm benefit from a seamless supply rhythm.
                </p>
              </div>

              <div className="p-4 bg-[#1F2522] border border-[#B69A60]/20 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A60] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Nutrition Guidance Alignment</span>
                </div>
                <p className="text-xs text-[#8E9490] leading-relaxed">
                  We encourage every purchasing farm to align their feeding inclusion rate with qualified veterinary or nutritional advice, ensuring wet grain complements local dry roughages, green fodder, and mineral supplements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS PHILOSOPHY */}
      <section className="py-20 lg:py-24 bg-[#141816] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Our Business Philosophy"
            description="How we approach relationships with agricultural producers and commercial buyers."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PHILOSOPHY_POINTS.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 sm:p-8 bg-[#1A201D] border border-white/5 rounded-sm card-hover-glow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#F5F3EC]"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#8E9490] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: EDITABLE CORPORATE & REGISTRATION PROFILE */}
      <section className="py-20 bg-[#171B19] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F2522] border border-[#B69A60]/30 rounded-sm p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B69A60]">
                  Corporate Transparency
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-[#F5F3EC] mt-1"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  Corporate Profile &amp; Governance
                </h3>
              </div>
              <span className="text-[11px] text-[#B69A60] bg-[#183F30] px-3 py-1.5 rounded-sm border border-[#B69A60]/30">
                Official Records Placeholder
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8E9490] block">
                  Legal Entity Name
                </span>
                <span className="font-semibold text-[#F5F3EC]">
                  DCF Trading Pvt Ltd
                </span>
                <span className="text-[11px] text-[#8E9490] block">
                  Private Limited Company registered in India
                </span>
              </div>

              <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8E9490] block">
                  Corporate Identification Number (CIN)
                </span>
                <span className="font-mono text-sm text-[#B69A60]">
                  [UXXXXXXXXXXPTCXXXXXX — Pending Update]
                </span>
                <span className="text-[11px] text-[#8E9490] block">
                  To be populated from MCA records upon formal onboarding
                </span>
              </div>

              <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8E9490] block">
                  Registered Corporate Office
                </span>
                <span className="text-[#DCE5DB]">
                  [Corporate Address, City, State, PIN, India]
                </span>
                <span className="text-[11px] text-[#8E9490] block">
                  Editable corporate premises location
                </span>
              </div>

              <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8E9490] block">
                  Commercial Sourcing Zones
                </span>
                <span className="text-[#DCE5DB]">
                  [Regional Supply Hubs — Confirmed per Contract]
                </span>
                <span className="text-[11px] text-[#8E9490] block">
                  Evaluated based on distance to purchasing dairy farm
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-[#8E9490]">
              <Info className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Editorial Note:</strong> In accordance with our corporate compliance guidelines, this profile does not publish unverified metrics, past volume claims, or speculative customer lists. Formal documentation (GSTIN, PAN, Bank Mandates, and Supply Agreements) are provided directly to commercial clients during trade contract execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
