import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Building,
  Layers,
  ArrowRight,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import FeedEstimator from "@/components/FeedEstimator";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "DCF Trading Pvt Ltd | Cattle Feed & Brewery Spent Grain Supply",
  description:
    "Supplying brewery and distillery spent grain (cooked barley) for cattle feed. Connecting reliable bulk feed supply with the needs of dairy farms.",
};

const SECTORS = [
  {
    title: "Commercial Dairy Farms",
    subtitle: "High-Volume Herd Operations",
    description:
      "Large-scale and progressive dairy farms seeking steady bulk consignments of fresh spent grain to integrate into total mixed ration (TMR) protocols.",
    icon: Building,
  },
  {
    title: "Commercial Cattle Farms",
    subtitle: "Livestock & Rearing Operations",
    description:
      "Livestock enterprises requiring dependable supplemental nutrition and bulk co-product feed management tailored to herd feeding regimes.",
    icon: Layers,
  },
  {
    title: "Cattle-Feed Distributors",
    subtitle: "Regional Trade & Wholesalers",
    description:
      "Feed merchants and distribution networks supplying clustered dairy pockets with vetted bulk agricultural co-products.",
    icon: Truck,
  },
  {
    title: "Livestock-Feed Businesses",
    subtitle: "Compounding & Blending Units",
    description:
      "Feed mills and processors exploring raw co-product materials and cooked barley streams for silage enrichment or mixed feeds.",
    icon: TrendingUp,
  },
  {
    title: "Bulk Feed Buyers",
    subtitle: "Contract Procurement Entities",
    description:
      "Commercial buyers requiring transparent trade communication, reliable loading coordination, and ongoing supply arrangements.",
    icon: ShieldCheck,
  },
];

const VALUE_PILLARS = [
  {
    title: "Professional Supply Coordination",
    description:
      "We focus on orderly scheduling, transparent loading alignment, and realistic communication between grain sources and farm receiving sites.",
  },
  {
    title: "Focus on Bulk Requirements",
    description:
      "Structured specifically for commercial bulk quantities—from multi-ton truckloads to recurring weekly deliveries that fit dairy farm storage.",
  },
  {
    title: "Direct Business Communication",
    description:
      "Clear, candid commercial interaction. No inflated claims or unverified guarantees—only factual supply dialogue you can plan around.",
  },
  {
    title: "Long-Term Customer Relationships",
    description:
      "We believe livestock feed supply requires consistency and mutual trust. Our goal is developing steady, multi-season commercial partnerships.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Hero Image with Art-Directed Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dairy_cattle_hero.jpg"
            alt="Healthy dairy cattle on a modern commercial dairy farm feeding in a clean barn"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            sizes="100vw"
          />
          {/* Deep Charcoal & Forest Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171B19]/95 via-[#171B19]/80 to-[#171B19]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171B19] via-transparent to-[#171B19]/50" />
          <div className="absolute inset-0 bg-[#183F30]/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] rounded-sm bg-[#183F30]/90 text-[#B69A60] border border-[#B69A60]/40 backdrop-blur-md mb-6 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A60] animate-pulse" />
              <span>Commercial Cattle Feed Supply</span>
            </div>

            {/* Main Hero Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#F5F3EC] leading-[1.08]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Reliable Cattle Feed Supply.{" "}
              <span className="italic font-normal text-[#B69A60]">
                Stronger Dairy Partnerships.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-[#DCE5DB] font-normal leading-relaxed max-w-2xl">
              DCF Trading Pvt Ltd supplies brewery and distillery spent grain for cattle feed, connecting bulk feed supply with the needs of dairy farms through dependable business relationships.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm hover:bg-[#215440] hover:shadow-lg transition-all duration-200 group"
              >
                <span>Discuss Bulk Supply</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A60] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-wider uppercase bg-[#171B19]/70 text-[#F5F3EC] border border-white/20 backdrop-blur-md rounded-sm hover:bg-[#171B19] hover:border-[#B69A60] transition-colors"
              >
                <span>Explore Our Products</span>
              </Link>
            </div>

            {/* Trust Anchors Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#8E9490]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B69A60] shrink-0" />
                <span className="text-[#DCE5DB]">B2B Bulk Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B69A60] shrink-0" />
                <span className="text-[#DCE5DB]">Logistics Alignment</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#B69A60] shrink-0" />
                <span className="text-[#DCE5DB]">Dependable Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT DCF TRADING */}
      <section className="py-20 lg:py-28 bg-[#171B19] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Company Overview"
                title="A Dependable Bridge Between Sourcing and Farm Intake"
                description="DCF Trading Pvt Ltd is a cattle-feed supply business focused on supplying brewery and distillery spent grain to commercial dairy farms."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#DCE5DB]/80 leading-relaxed">
                <p>
                  Modern dairy operations require dependable, predictable feed inputs. We operate with an understanding that livestock feeding is a 365-day commitment that cannot afford unexpected interruptions or communication delays.
                </p>
                <p>
                  Rather than making inflated claims, we focus on what matters most to farm operators: straightforward communication, disciplined supply coordination, and a transparent approach to product handling and logistics.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A60] hover:text-[#C9B078] transition-colors group"
                >
                  <span>Learn more about our approach</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Visual Box / Editorial Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden border border-[#B69A60]/20 bg-[#1F2522] shadow-xl p-2 sm:p-3">
                <div className="relative h-72 sm:h-96 w-full rounded-sm overflow-hidden">
                  <Image
                    src="/images/dairy_farm_panoramic.jpg"
                    alt="Commercial modern dairy farm with clean feeding alley at sunrise"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171B19] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 bg-[#171B19] border-t border-white/5 rounded-b-sm">
                  <div className="flex items-center justify-between text-xs text-[#B69A60] font-mono mb-2">
                    <span>SECTOR INSIGHT</span>
                    <span>COMMERCIAL FEED DYNAMICS</span>
                  </div>
                  <h4
                    className="text-lg font-semibold text-[#F5F3EC]"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    Consistent Co-Product Sourcing
                  </h4>
                  <p className="text-xs text-[#8E9490] mt-1.5 leading-relaxed">
                    Brewery and distillery co-products offer practical value to dairy operations when matched with disciplined receiving logistics and appropriate on-farm pit or bunker storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE PRODUCT (BREWERY & DISTILLERY SPENT GRAIN) */}
      <section className="py-20 lg:py-28 bg-[#1F2522] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Product"
            title="Brewery & Distillery Spent Grain"
            description="Also known as cooked barley or brewers grain, this nutritious cereal by-product provides valuable bulk feed volume when handled responsibly."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* High-res Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-[460px] w-full rounded-sm overflow-hidden border border-[#B69A60]/30 shadow-2xl">
                <Image
                  src="/images/brewery_spent_grain.jpg"
                  alt="Fresh brewery and distillery spent grain cooked barley mash for cattle feed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B19]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#171B19]/90 backdrop-blur-md border border-[#B69A60]/20 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B69A60] font-semibold block">
                        Product Visual
                      </span>
                      <span className="text-sm font-semibold text-[#F5F3EC]">
                        Fresh Cooked Barley / Spent Grain Mash
                      </span>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 bg-[#183F30] text-[#DCE5DB] border border-[#B69A60]/30 rounded-sm">
                      Bulk Commodity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details & Explanations */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-[#DCE5DB]/85 leading-relaxed">
                <p>
                  Spent grain is a co-product of brewing and distilling processes. During the mashing phase, starches are extracted for fermentation, leaving behind residual fiber, protein, and cereal grain hull—often described as cooked barley.
                </p>
                <p>
                  When managed fresh and handled with sound farm protocols, it serves as an economical and palatable component within balanced cattle diets, particularly for lactating cows and growing livestock.
                </p>
              </div>

              {/* Verified Product Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm">
                  <span className="text-xs font-semibold text-[#B69A60] uppercase tracking-wider block mb-1">
                    Product Form
                  </span>
                  <span className="text-sm font-medium text-[#F5F3EC]">
                    Wet Spent Grain (Brewers Mash)
                  </span>
                  <p className="text-xs text-[#8E9490] mt-1">
                    Moisture content and physical texture to be confirmed per batch.
                  </p>
                </div>

                <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm">
                  <span className="text-xs font-semibold text-[#B69A60] uppercase tracking-wider block mb-1">
                    Handling Recommendation
                  </span>
                  <span className="text-sm font-medium text-[#F5F3EC]">
                    Rapid Intake or Bunker Ensiling
                  </span>
                  <p className="text-xs text-[#8E9490] mt-1">
                    Fresh wet grain requires prompt consumption or anaerobic storage.
                  </p>
                </div>

                <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm">
                  <span className="text-xs font-semibold text-[#B69A60] uppercase tracking-wider block mb-1">
                    Supply Scale
                  </span>
                  <span className="text-sm font-medium text-[#F5F3EC]">
                    Bulk Consignments (Truckload)
                  </span>
                  <p className="text-xs text-[#8E9490] mt-1">
                    Coordinated via commercial multi-ton tipper or covered transport.
                  </p>
                </div>

                <div className="p-4 bg-[#171B19] border border-white/5 rounded-sm">
                  <span className="text-xs font-semibold text-[#B69A60] uppercase tracking-wider block mb-1">
                    Nutrition Verification
                  </span>
                  <span className="text-sm font-medium text-[#F5F3EC]">
                    Batch Lab Test on Request
                  </span>
                  <p className="text-xs text-[#8E9490] mt-1">
                    Dry matter and crude protein values provided upon commercial discussion.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact?enquiryType=Spent%20Grain%20Supply"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm hover:bg-[#20523f] transition-colors"
                >
                  <span>Enquire About Bulk Supply</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B69A60]" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#171B19] text-[#DCE5DB] border border-white/10 rounded-sm hover:border-[#B69A60] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#B69A60]" />
                  <span>View Product Details & Handling</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE DAIRY TOOL (FEED ESTIMATOR) */}
      <section className="py-20 lg:py-28 bg-[#171B19] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Planning Calculator"
            title="Calculate Your Bulk Feed Requirements"
            description="Use our interactive volume estimator to calculate projected weekly tonnage and recommended delivery frequencies for your dairy cattle herd."
            align="center"
            className="mb-12"
          />

          <FeedEstimator />
        </div>
      </section>

      {/* SECTION 4: WHO WE SERVE */}
      <section className="py-20 lg:py-28 bg-[#141816] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeader
              eyebrow="Market Sectors"
              title="Who We Serve"
              description="DCF Trading coordinates commercial supply for commercial agricultural buyers, dairy producers, and regional feed distribution entities."
            />
            <span className="text-xs text-[#8E9490] max-w-xs block">
              *Displayed as target customer segments and intended commercial markets.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="p-7 bg-[#1A201D] border border-white/5 rounded-sm card-hover-glow flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] mb-5 group-hover:border-[#B69A60] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B69A60] font-semibold block mb-1">
                      {sector.subtitle}
                    </span>
                    <h3
                      className="text-xl font-semibold text-[#F5F3EC]"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      {sector.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#8E9490] leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href={`/contact?enquiryType=${encodeURIComponent(sector.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#DCE5DB] hover:text-[#B69A60] transition-colors"
                    >
                      <span>Discuss supply arrangement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Custom Consultation Tile */}
            <div className="p-7 bg-gradient-to-br from-[#183F30] to-[#122A20] border border-[#B69A60]/40 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#171B19] border border-[#B69A60] flex items-center justify-center text-[#B69A60] mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#B69A60] font-semibold block mb-1">
                  Custom Arrangements
                </span>
                <h3
                  className="text-xl font-semibold text-[#F5F3EC]"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  Have Specific Logistics Requirements?
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#DCE5DB] leading-relaxed">
                  Whether you have dedicated truck turnaround constraints, specialized unloading augers, or tailored delivery windows, we discuss requirements openly.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F3EC] hover:text-[#B69A60] transition-colors"
                >
                  <span>Speak with our desk</span>
                  <ArrowRight className="w-4 h-4 text-[#B69A60]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY WORK WITH DCF TRADING */}
      <section className="py-20 lg:py-28 bg-[#171B19] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Commercial Values"
            title="Why Work With DCF Trading?"
            description="Our approach is built around clarity, dependable commercial agreements, and respect for the agricultural cycle."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 bg-[#1F2522] border border-white/5 rounded-sm relative group card-hover-glow flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-mono text-[#B69A60]/40 group-hover:text-[#B69A60] transition-colors font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h4
                    className="text-lg font-semibold text-[#F5F3EC]"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {pillar.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-[#8E9490] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#B69A60]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard practice</span>
                </div>
              </div>
            ))}
          </div>

          {/* Factual Disclaimer Card */}
          <div className="mt-12 p-5 bg-[#141816] border border-white/5 rounded-sm flex items-start gap-3.5 text-xs text-[#8E9490] max-w-4xl mx-auto">
            <HelpCircle className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Transparent Policy:</strong> DCF Trading Pvt Ltd does not claim universal geographic coverage or guaranteed inventory reserve until logistics feasibility and farm unloading conditions are formally evaluated for your specific location.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <CTASection />
    </div>
  );
}
