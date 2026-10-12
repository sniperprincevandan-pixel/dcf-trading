"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Info, Truck, Calendar, Scale } from "lucide-react";

export default function FeedEstimator() {
  const [cowCount, setCowCount] = useState<number>(100);
  const [rationKg, setRationKg] = useState<number>(10);

  // Calculations
  const dailyTotalKg = cowCount * rationKg;
  const dailyMetricTons = (dailyTotalKg / 1000).toFixed(2);
  const weeklyMetricTons = ((dailyTotalKg * 7) / 1000).toFixed(1);
  const monthlyMetricTons = ((dailyTotalKg * 30) / 1000).toFixed(0);

  // Recommended logistics cycle
  const getLogisticsRecommendation = (tonsPerWeek: number) => {
    if (tonsPerWeek < 5) return "Weekly bulk delivery or shared truckload";
    if (tonsPerWeek <= 15) return "2x weekly fresh supply cycle";
    return "3x weekly or dedicated scheduled tank/tipper supply";
  };

  const logisticsRecommendation = getLogisticsRecommendation(
    parseFloat(weeklyMetricTons)
  );

  return (
    <div className="bg-[#1F2522] border border-[#B69A60]/25 rounded-sm p-6 sm:p-8 lg:p-10 shadow-xl card-hover-glow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B69A60] font-semibold mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Dairy Tool</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-semibold text-[#F5F3EC]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Bulk Feed Requirement Estimator
          </h3>
        </div>
        <span className="text-xs text-[#8E9490] max-w-xs">
          Estimate your farm&apos;s weekly and monthly wet spent grain intake based on herd size.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* Cow Count */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="herd-count-slider"
                className="text-sm font-medium text-[#DCE5DB]"
              >
                Dairy Herd Size (Cattle Count)
              </label>
              <span className="text-base font-bold text-[#F5F3EC] bg-[#183F30] px-3 py-1 rounded-sm border border-[#B69A60]/30 font-mono">
                {cowCount} cows
              </span>
            </div>
            <input
              id="herd-count-slider"
              type="range"
              min="20"
              max="1000"
              step="10"
              value={cowCount}
              onChange={(e) => setCowCount(Number(e.target.value))}
              aria-label="Dairy Herd Size Cattle Count"
              className="w-full h-2 bg-[#171B19] rounded-lg appearance-none cursor-pointer accent-[#B69A60]"
            />
            <div className="flex justify-between text-[11px] text-[#8E9490] mt-1">
              <span>20 (Small Farm)</span>
              <span>250</span>
              <span>500</span>
              <span>1,000 (Commercial Dairy)</span>
            </div>
          </div>

          {/* Daily Ration */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="ration-slider"
                className="text-sm font-medium text-[#DCE5DB]"
              >
                Estimated Feeding Rate (kg / head / day)
              </label>
              <span className="text-base font-bold text-[#B69A60] bg-[#171B19] px-3 py-1 rounded-sm border border-white/10 font-mono">
                {rationKg} kg
              </span>
            </div>
            <input
              id="ration-slider"
              type="range"
              min="4"
              max="20"
              step="1"
              value={rationKg}
              onChange={(e) => setRationKg(Number(e.target.value))}
              aria-label="Estimated Feeding Rate in kg per head per day"
              className="w-full h-2 bg-[#171B19] rounded-lg appearance-none cursor-pointer accent-[#B69A60]"
            />
            <div className="flex justify-between text-[11px] text-[#8E9490] mt-1">
              <span>4 kg (Light Supplement)</span>
              <span>10 kg (Standard Formulation)</span>
              <span>20 kg (High Intake)</span>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="p-4 bg-[#171B19]/70 border border-white/5 rounded-sm flex items-start gap-3 text-xs text-[#8E9490]">
            <Info className="w-4 h-4 text-[#B69A60] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nutritional Guidance:</strong> Actual feeding quantities should always be calibrated by your herd nutritionist based on dry-matter intake, forage balance, and milk-yield targets.
            </p>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-6 bg-[#171B19] border border-white/10 rounded-sm p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#8E9490] font-semibold">
              Estimated Volume Projections
            </span>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-3.5 bg-[#1F2522] border border-[#B69A60]/15 rounded-sm">
                <div className="flex items-center gap-1.5 text-xs text-[#8E9490] mb-1">
                  <Scale className="w-3.5 h-3.5 text-[#B69A60]" />
                  <span>Daily Requirement</span>
                </div>
                <div className="text-2xl font-bold text-[#F5F3EC] font-mono">
                  {dailyMetricTons}{" "}
                  <span className="text-xs font-normal text-[#8E9490]">MT / day</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#1F2522] border border-[#B69A60]/15 rounded-sm">
                <div className="flex items-center gap-1.5 text-xs text-[#8E9490] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B69A60]" />
                  <span>Weekly Requirement</span>
                </div>
                <div className="text-2xl font-bold text-[#B69A60] font-mono">
                  {weeklyMetricTons}{" "}
                  <span className="text-xs font-normal text-[#8E9490]">MT / week</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#183F30]/40 border border-[#B69A60]/30 rounded-sm">
              <div className="flex items-center justify-between text-xs text-[#DCE5DB] mb-1">
                <span>Monthly Bulk Requirement:</span>
                <span className="font-bold font-mono text-base text-[#F5F3EC]">
                  ~{monthlyMetricTons} Metric Tons / mo
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8E9490] mt-2 pt-2 border-t border-white/10">
                <Truck className="w-3.5 h-3.5 text-[#B69A60] shrink-0" />
                <span>
                  Logistics recommendation:{" "}
                  <strong className="text-[#DCE5DB]">{logisticsRecommendation}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <Link
              href={`/contact?enquiryType=Spent%20Grain%20Supply&volume=${monthlyMetricTons}%20MT/month&cows=${cowCount}`}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60]/60 rounded-sm hover:bg-[#215440] hover:border-[#B69A60] transition-colors group"
            >
              <span>Enquire for this Volume ({monthlyMetricTons} MT/mo)</span>
              <ArrowRight className="w-4 h-4 text-[#B69A60] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
