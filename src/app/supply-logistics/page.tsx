import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ClipboardList,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowUpRight,
  HelpCircle,
  FileText,
  Warehouse,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Supply & Logistics | DCF Trading Pvt Ltd",
  description:
    "Understand the commercial bulk supply workflow, transport coordination, and delivery parameters for brewery spent grain supply to dairy farms.",
};

const PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "Buyer Submits Feed Requirements",
    subtitle: "Demand & Farm Location Assessment",
    description:
      "The purchasing farm or distributor submits their estimated weekly volume requirement, preferred supply frequency (e.g. 2x weekly vs. daily), exact delivery location, and available storage facility (concrete bunker, silo pit, or ground pad).",
    checklist: [
      "Herd size & target feed intake",
      "Delivery pin code & road access profile",
      "On-farm storage setup & unloading equipment",
    ],
  },
  {
    stepNumber: "02",
    title: "DCF Evaluates Sourcing & Availability",
    subtitle: "Feasibility & Proximity Matching",
    description:
      "Our commercial desk evaluates availability from nearest distillery and brewery partner facilities. We review haul distance, transit duration, moisture consistency, and dispatch schedule compatibility to ensure feed arrives in prime condition.",
    checklist: [
      "Nearest sourcing hub proximity",
      "Batch production and dispatch rhythm",
      "Transit timeline feasibility for wet co-products",
    ],
  },
  {
    stepNumber: "03",
    title: "Commercial & Logistics Terms Agreed",
    subtitle: "Pricing, Freight & Handling Alignment",
    description:
      "We discuss tonnage pricing, freight mechanics (ex-source loading vs. delivered farm-gate), tipper truck capacity, and demurrage/unloading terms openly. No hidden clauses or ambiguous delivery timelines.",
    checklist: [
      "Transparent unit pricing & freight cost breakdown",
      "Tipper turnaround and unloading expectations",
      "Payment terms and recurring contract structure",
    ],
  },
  {
    stepNumber: "04",
    title: "Parties Confirm Supply Arrangement",
    subtitle: "Structured Dispatch Schedule",
    description:
      "Upon mutual execution of commercial terms, regular dispatches commence according to the agreed calendar. Dispatch notifications, weighbridge slips, and batch documentation accompany each consignment.",
    checklist: [
      "Scheduled dispatch calendar execution",
      "Official weighbridge slips and documentation",
      "Dedicated commercial contact for load tracking",
    ],
  },
];

const FARM_READINESS_ITEMS = [
  {
    title: "Road Access & Heavy Vehicle Clearance",
    description:
      "Bulk spent grain is transported via commercial multi-ton tippers or heavy cargo trucks. Ensure farm access roads, bridges, and gates can accommodate heavy vehicles safely.",
  },
  {
    title: "Dedicated Unloading Area",
    description:
      "A level concrete pad, clean bunker silo, or designated pit must be ready before arrival so unloading can happen promptly without vehicle hold-ups.",
  },
  {
    title: "Immediate Cover & Silage Materials",
    description:
      "Have heavy UV-treated plastic sheets, tires/gravel bags, and coarse agricultural salt on hand if the load will be ensiled for extended farm storage.",
  },
  {
    title: "Farm Receiver Availability",
    description:
      "A designated farm supervisor must be available upon arrival to inspect the consignment, verify the weighbridge record, and direct safe tipping.",
  },
];

export default function SupplyLogisticsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 lg:pt-28">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 bg-[#171B19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-[#183F30] text-[#B69A60] border border-[#B69A60]/30 mb-6">
              <Truck className="w-3.5 h-3.5 text-[#B69A60]" />
              <span>Commercial Bulk Logistics</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F3EC] leading-[1.12]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Supply &amp; Logistics Coordination
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#DCE5DB]/85 leading-relaxed">
              Managing the flow of brewery and distillery spent grain from production facilities to dairy farms requires disciplined logistics, realistic scheduling, and direct communication.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm hover:bg-[#20523f] transition-colors"
              >
                <span>Initiate Logistics Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A60]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE 4-STEP B2B ENQUIRY PROCESS */}
      <section className="py-20 lg:py-28 bg-[#141816] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Commercial Workflow"
            title="The 4-Step Bulk Supply Process"
            description="Our structured engagement model ensures logistical feasibility and clear expectations prior to contract execution."
            align="center"
            className="mb-16"
          />

          <div className="space-y-8 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 sm:p-8 bg-[#1A201D] border border-white/5 rounded-sm card-hover-glow grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <div className="w-14 h-14 rounded-sm bg-[#183F30] border border-[#B69A60]/40 flex items-center justify-center font-mono text-2xl font-bold text-[#B69A60]">
                    {step.stepNumber}
                  </div>
                </div>

                <div className="md:col-span-10 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B69A60] block">
                      {step.subtitle}
                    </span>
                    <h3
                      className="text-2xl font-semibold text-[#F5F3EC] mt-0.5"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#DCE5DB]/80 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-xs font-semibold text-[#F5F3EC] block mb-2">
                      Key Evaluation Points:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {step.checklist.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-[#8E9490]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A60] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Policy Banner */}
          <div className="mt-12 p-5 bg-[#1F2522] border border-[#B69A60]/20 rounded-sm flex items-start gap-3.5 text-xs text-[#8E9490] max-w-4xl mx-auto">
            <HelpCircle className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Logistics Integrity Notice:</strong> DCF Trading Pvt Ltd does not make unverified claims regarding universal route coverage or guaranteed vehicle availability. Sourcing radius, freight availability, and minimum delivery quantities are confirmed individually for each dairy farm location.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FARM RECEIVING READINESS */}
      <section className="py-20 lg:py-24 bg-[#171B19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="On-Site Preparation"
                title="Farm Receiving &amp; Unloading Readiness"
                description="What commercial dairy farms should prepare to ensure smooth vehicle turnaround and protect feed condition."
              />

              <div className="mt-6 relative h-64 sm:h-80 w-full rounded-sm overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/images/bulk_logistics.jpg"
                  alt="Commercial bulk freight logistics and truck transport"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[#171B19]/40" />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FARM_READINESS_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="p-5 bg-[#1F2522] border border-white/5 rounded-sm space-y-2 card-hover-glow"
                >
                  <h4
                    className="text-base font-semibold text-[#F5F3EC]"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8E9490] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
