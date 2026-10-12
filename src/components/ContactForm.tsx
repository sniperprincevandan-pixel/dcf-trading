"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  Scale,
  CalendarClock,
  MessageSquare,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

interface FormState {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  cityState: string;
  enquiryType: string;
  requiredQuantity: string;
  supplyFrequency: string;
  additionalRequirements: string;
  privacyConsent: boolean;
  honeypot: string;
}

const INITIAL_FORM: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  cityState: "",
  enquiryType: "Spent Grain Supply",
  requiredQuantity: "",
  supplyFrequency: "Weekly bulk delivery",
  additionalRequirements: "",
  privacyConsent: false,
  honeypot: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    providerNotice?: string;
  } | null>(null);

  // Check URL params for pre-fills (from Feed Estimator or Product links)
  useEffect(() => {
    const enquiryTypeParam = searchParams.get("enquiryType");
    const volumeParam = searchParams.get("volume");
    const cowsParam = searchParams.get("cows");

    if (enquiryTypeParam || volumeParam || cowsParam) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: enquiryTypeParam || prev.enquiryType,
        requiredQuantity: volumeParam || prev.requiredQuantity,
        additionalRequirements: cowsParam
          ? `Estimated for ${cowsParam} head of cattle based on the online feed estimator.`
          : prev.additionalRequirements,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side quick validation
    if (!formData.privacyConsent) {
      setErrorMessage("Please accept the privacy policy consent to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessData({
          referenceId: result.referenceId,
          message: result.message,
          providerNotice: result.providerNotice,
        });
        setFormData(INITIAL_FORM);
      } else {
        setErrorMessage(
          result.error || "Unable to submit enquiry. Please try again."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection failed. Please check your connection or contact our team directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setErrorMessage(null);
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="bg-[#171B19] border border-[#B69A60]/30 rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl relative">
      {/* Success State */}
      {successData ? (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#183F30] border border-[#B69A60] mx-auto flex items-center justify-center text-[#B69A60]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A60]">
              Enquiry Formally Recorded
            </span>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Thank You for Contacting DCF Trading
            </h3>
            <p className="text-sm text-[#DCE5DB] max-w-lg mx-auto leading-relaxed">
              {successData.message}
            </p>
          </div>

          {/* Reference Badge */}
          <div className="bg-[#1F2522] border border-[#B69A60]/30 rounded-sm p-4 max-w-md mx-auto">
            <div className="text-xs text-[#8E9490]">Your Enquiry Reference:</div>
            <div className="text-xl font-bold font-mono text-[#B69A60] mt-1">
              {successData.referenceId}
            </div>
            <p className="text-[11px] text-[#8E9490] mt-1">
              Please quote this reference in subsequent phone or email communications.
            </p>
          </div>

          {/* Backend Configuration Notice */}
          {successData.providerNotice && (
            <div className="p-3 bg-black/40 border border-white/5 rounded-sm max-w-md mx-auto text-left text-[11px] text-[#8E9490]">
              <span className="text-[#DCE5DB] font-semibold block mb-0.5">
                System Status Note:
              </span>
              {successData.providerNotice}
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60]/40 rounded-sm hover:bg-[#20523f] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Submit Another Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot for spam bots */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="border-b border-white/10 pb-4">
            <h3
              className="text-2xl font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Submit Commercial Feed Enquiry
            </h3>
            <p className="text-xs text-[#8E9490] mt-1">
              Please provide your operational details so our commercial team can evaluate availability and logistical feasibility.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 bg-red-950/40 border border-red-700/50 rounded-sm flex items-start gap-3 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Full Name <span className="text-[#B69A60]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Company or Dairy Farm Name <span className="text-[#B69A60]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  placeholder="e.g. Anand Commercial Dairy Farm"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Phone Number <span className="text-[#B69A60]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Business Email <span className="text-[#B69A60]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="procurement@dairycorp.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Row 3: City/State & Enquiry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="cityState"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                City & State (Delivery Location) <span className="text-[#B69A60]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  required
                  placeholder="e.g. Mehsana, Gujarat"
                  value={formData.cityState}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="enquiryType"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Type of Enquiry <span className="text-[#B69A60]">*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] focus:outline-none focus:border-[#B69A60] transition-colors"
              >
                <option value="Spent Grain Supply">Brewery Spent Grain Supply</option>
                <option value="Bulk Cattle Feed">Bulk Cattle Feed Supply</option>
                <option value="Dairy Farm Supply">Commercial Dairy Farm Supply</option>
                <option value="Distribution Partnership">Distribution Partnership</option>
                <option value="Product Information">Product & Handling Information</option>
                <option value="Other">Other Commercial Enquiry</option>
              </select>
            </div>
          </div>

          {/* Row 4: Required Quantity & Supply Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="requiredQuantity"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Estimated Required Quantity
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <Scale className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="requiredQuantity"
                  name="requiredQuantity"
                  placeholder="e.g. 10 Metric Tons / week"
                  value={formData.requiredQuantity}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="supplyFrequency"
                className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
              >
                Preferred Supply Frequency
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E9490]">
                  <CalendarClock className="w-4 h-4" />
                </div>
                <select
                  id="supplyFrequency"
                  name="supplyFrequency"
                  value={formData.supplyFrequency}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] focus:outline-none focus:border-[#B69A60] transition-colors"
                >
                  <option value="One-time trial batch">One-time trial batch</option>
                  <option value="Daily supply">Daily supply</option>
                  <option value="2-3 times per week">2-3 times per week</option>
                  <option value="Weekly bulk delivery">Weekly bulk delivery</option>
                  <option value="Bi-weekly delivery">Bi-weekly delivery</option>
                  <option value="Monthly recurring contract">Monthly recurring contract</option>
                  <option value="To be discussed">To be discussed with DCF</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 5: Additional Requirements */}
          <div>
            <label
              htmlFor="additionalRequirements"
              className="block text-xs font-medium uppercase tracking-wider text-[#DCE5DB] mb-1.5"
            >
              Additional Requirements or Notes
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none text-[#8E9490]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <textarea
                id="additionalRequirements"
                name="additionalRequirements"
                rows={4}
                placeholder="Mention storage setup on farm (silage pit, bunker, concrete pad), unloading arrangements, or specific quality questions..."
                value={formData.additionalRequirements}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-[#1F2522] border border-white/10 rounded-sm text-sm text-[#F5F3EC] placeholder-[#8E9490]/60 focus:outline-none focus:border-[#B69A60] transition-colors resize-y"
              />
            </div>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-white/20 bg-[#1F2522] text-[#183F30] focus:ring-[#B69A60] accent-[#B69A60]"
              />
              <span className="text-xs text-[#8E9490] leading-relaxed">
                I agree that the details submitted will be used by DCF Trading Pvt Ltd to review our feed requirement and initiate commercial contact. See our{" "}
                <Link
                  href="/privacy"
                  className="text-[#DCE5DB] underline hover:text-[#B69A60]"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#8E9490]">
              <ShieldCheck className="w-4 h-4 text-[#B69A60]" />
              <span>Direct Commercial Review &middot; Typical response within 24h</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60]/60 rounded-sm hover:bg-[#20523f] hover:border-[#B69A60] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#B69A60]" />
                  <span>Processing Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Business Enquiry</span>
                  <Send className="w-3.5 h-3.5 text-[#B69A60] group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
