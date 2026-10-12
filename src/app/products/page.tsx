import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Truck,
  Layers,
  ArrowUpRight,
  ShieldAlert,
  Info,
  Warehouse,
  Flame,
  Droplets,
  PackageCheck,
  Scale,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Brewery & Distillery Spent Grain | Products | DCF Trading Pvt Ltd",
  description:
    "Comprehensive product overview, storage guidelines, and bulk purchasing parameters for brewery and distillery spent grain (cooked barley) for cattle feed.",
};

const EDITABLE_SPECS = [
  {
    parameter: "Product Name / Designation",
    status: "Standard Commercial Stream",
    value: "Brewery / Distillery Spent Grain (Cooked Barley Mash)",
    note: "Primary cereal by-product derived from mashing malted barley & grains.",
  },
  {
    parameter: "Product Physical Form",
    status: "Verified Batch-by-Batch",
    value: "Wet Spent Grain (Brewers Mash) — Coarse Moist Cereal Texture",
    note: "Distinct from Dried Distillers Grains (DDGS); retains natural co-product moisture.",
  },
  {
    parameter: "Moisture Content (%)",
    status: "To Be Confirmed Per Batch",
    value: "[Typical Wet Co-Product Range: Subject to Brewery Dewatering Press]",
    note: "Actual moisture percentage confirmed via lot sampling and dispatch certificate.",
  },
  {
    parameter: "Crude Protein & Dry Matter Analysis",
    status: "Batch Lab Certificate",
    value: "[Nutritional Profile Shared Upon Formal Commercial Request]",
    note: "Laboratory proximate analysis provided per sourcing distillery/brewery lot.",
  },
  {
    parameter: "Available Supply Quantity",
    status: "Discussed Per Contract",
    value: "[Bulk Tipper / Truckload Consignments — Metric Tons per Delivery]",
    note: "Scheduled daily, weekly, or bi-weekly depending on farm herd intake capacity.",
  },
  {
    parameter: "Packaging & Bulk Transport",
    status: "Bulk Logistics Mode",
    value: "Bulk Loose Tippers / Covered Tarpaulin Trucks / Farm Collection",
    note: "Direct point-to-point transport from production facility to receiving farm.",
  },
  {
    parameter: "Collection vs. Delivered Options",
    status: "Flexible Arrangement",
    value: "Ex-Source Loading OR Delivered to Farm Gate (Location Dependent)",
    note: "Logistics feasibility, road accessibility, and unloading conditions evaluated mutually.",
  },
];

const HANDLING_PRACTICES = [
  {
    title: "Timely Farm Unloading",
    description:
      "Because wet spent grain retains natural moisture and heat from the mashing process, loads should be unloaded immediately upon arrival onto clean concrete pads, bunkers, or dedicated silage pits.",
    icon: Truck,
  },
  {
    title: "Air Exclusion (Ensiling)",
    description:
      "For longer storage, wet spent grain must be compacted firmly to expel air and sealed promptly under heavy agricultural polyethylene sheeting. Anaerobic conditions prevent aerobic spoilage and surface yeast growth.",
    icon: Warehouse,
  },
  {
    title: "Salt Capping Method",
    description:
      "Many progressive dairy farms apply a uniform layer of agricultural salt (coarse salt) over the surface before sealing to inhibit mold and create a protective barrier along open feeding faces.",
    icon: Droplets,
  },
  {
    title: "Rapid Feed-Out Discipline",
    description:
      "If stored without airtight sealing, wet grain should typically be fed out rapidly within a few days depending on ambient temperature, humidity, and farm hygiene to maintain freshness.",
    icon: Flame,
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-28">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 bg-[#171B19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#183F30] text-[#B69A60] border border-[#B69A60]/30 mb-6">
              <PackageCheck className="w-3.5 h-3.5 text-[#B69A60]" />
              <span>Bulk Agricultural Co-Product</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F3EC] leading-[1.12]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Brewery &amp; Distillery Spent Grain
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#DCE5DB]/85 leading-relaxed">
              Also described as cooked barley or brewers wet grain. An economical and palatable bulk feed ingredient connecting industrial brewing streams with modern dairy herd nutrition.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?enquiryType=Spent%20Grain%20Supply"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm hover:bg-[#20523f] transition-colors"
              >
                <span>Request Bulk Supply Discussion</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A60]" />
              </Link>
              <a
                href="#specifications"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#1F2522] text-[#DCE5DB] border border-white/10 rounded-sm hover:border-[#B69A60] transition-colors"
              >
                <span>Jump to Specifications</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: PRODUCT OVERVIEW & SOURCE CONTEXT */}
      <section className="py-20 lg:py-24 bg-[#141816] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-[440px] w-full rounded-sm overflow-hidden border border-[#B69A60]/30 shadow-2xl">
                <Image
                  src="/images/brewery_spent_grain.jpg"
                  alt="Brewery spent grain cooked barley mash feed sample"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B19]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#171B19]/90 backdrop-blur-md border border-white/10 rounded-sm">
                  <span className="text-[10px] uppercase tracking-widest text-[#B69A60] font-semibold block">
                    Source Material
                  </span>
                  <span className="text-sm font-semibold text-[#F5F3EC]">
                    Barley &amp; Cereal Grain Co-Product
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Origin & Process"
                title="Understanding Spent Grain as Livestock Feed"
                description="How brewing and distillation processes produce high-bulk feeding materials."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#DCE5DB]/80 leading-relaxed">
                <p>
                  During the commercial mashing process at breweries and distilleries, ground malted barley (and occasionally secondary grains such as maize, rice, or wheat) is steeped in warm water. Enzymes convert the grain starches into fermentable sugars, which are drained away as liquid wort.
                </p>
                <p>
                  What remains in the mash tun is the solid cereal co-product, commonly referred to as <strong>spent grain</strong> or <strong>cooked barley</strong>. Because the readily fermentable starch has been extracted, the remaining grain mass is concentrated in insoluble and digestible fiber, plant protein, and cereal minerals.
                </p>
                <p>
                  In dairy cattle nutrition, spent grain is widely appreciated for its high palatability and its ability to stimulate dry matter intake when blended into total mixed rations (TMR).
                </p>
              </div>

              {/* Distinction Box */}
              <div className="p-4 bg-[#1F2522] border border-[#B69A60]/30 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A60] mb-1">
                  <AlertTriangle className="w-4 h-4 text-[#B69A60]" />
                  <span>Important Technical Distinction: Wet vs. Dried Spent Grain</span>
                </div>
                <p className="text-xs text-[#8E9490] leading-relaxed">
                  <strong>Wet Spent Grain (Brewers Wet Grains):</strong> High moisture, directly discharged from brewing mashing vessels. Requires scheduled transport and quick feeding or ensiling.
                  <br />
                  <strong>Dried Distillers / Brewers Grains (DDGS):</strong> Artificially dried co-product in meal or pellet form with low moisture and longer shelf life.
                  <br />
                  <span className="text-[#DCE5DB] font-medium mt-1 block">
                    *DCF Trading supplies wet spent grain streams. Dried product availability is evaluated only on special commercial request.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIFICATIONS & EDITABLE PARAMETERS */}
      <section
        id="specifications"
        className="py-20 lg:py-24 bg-[#171B19] border-b border-white/5 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Commercial Parameters"
            title="Product Specifications &amp; Supply Parameters"
            description="Factual parameters for commercial bulk procurement. All lot-specific nutritional and moisture parameters are verified per dispatch."
            align="center"
            className="mb-14"
          />

          <div className="bg-[#1F2522] border border-[#B69A60]/30 rounded-sm overflow-hidden shadow-xl">
            <div className="px-6 py-4 bg-[#141816] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A60]">
                Commercial Specification Matrix
              </span>
              <span className="text-[11px] text-[#8E9490]">
                Values updated and confirmed during formal contract quotation
              </span>
            </div>

            <div className="divide-y divide-white/5 text-sm">
              {EDITABLE_SPECS.map((spec) => (
                <div
                  key={spec.parameter}
                  className="p-5 sm:p-6 hover:bg-white/[0.02] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                >
                  <div className="md:col-span-4">
                    <span className="font-medium text-[#F5F3EC] block">
                      {spec.parameter}
                    </span>
                    <span className="text-[11px] text-[#B69A60] uppercase tracking-wider block mt-0.5">
                      {spec.status}
                    </span>
                  </div>

                  <div className="md:col-span-8 space-y-1">
                    <span className="text-[#DCE5DB] font-mono text-sm block">
                      {spec.value}
                    </span>
                    <span className="text-xs text-[#8E9490] leading-relaxed block">
                      {spec.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nutritional & Laboratory Notice */}
            <div className="p-6 bg-[#141816] border-t border-white/10 flex items-start gap-3.5 text-xs text-[#8E9490]">
              <Info className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Certified Laboratory Analysis:</strong> Proximate nutritional values (including Dry Matter %, Crude Protein on DM basis, Acid Detergent Fiber, Neutral Detergent Fiber, and Total Digestible Nutrients) differ between barley brewing lots and grain distillery runs. DCF Trading provides formal batch test certificates upon finalizing supply commitments. We do not publish speculative nutritional numbers.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact?enquiryType=Product%20Information"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A60] hover:text-[#C9B078] transition-colors"
            >
              <span>Request specification sheet and sample parameter discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: STORAGE & HANDLING GUIDANCE */}
      <section className="py-20 lg:py-24 bg-[#141816] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="On-Farm Management"
            title="Storage &amp; Handling Best Practices"
            description="Maintaining feed freshness and nutrient value on the dairy farm requires disciplined receiving and pit management."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HANDLING_PRACTICES.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.title}
                  className="p-6 bg-[#1A201D] border border-white/5 rounded-sm flex flex-col justify-between card-hover-glow"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-[#183F30] border border-[#B69A60]/30 flex items-center justify-center text-[#B69A60] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-base font-semibold text-[#F5F3EC]"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      {practice.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-[#8E9490] leading-relaxed">
                      {practice.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 text-[11px] text-[#B69A60] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Recommended Farm Practice</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Safety Disclaimer Banner */}
          <div className="mt-12 p-5 bg-[#1F2522] border border-[#B69A60]/20 rounded-sm flex items-start gap-3.5 text-xs text-[#8E9490] max-w-4xl mx-auto">
            <ShieldAlert className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Livestock Nutrition Disclaimer:</strong> Suitability of spent grain depends on total dietary formulation, local climate, storage conditions, and animal health status. Feeding rates must be established by a qualified livestock nutritionist or dairy veterinarian. Never feed spoiled, moldy, or foul-smelling co-products to livestock.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
