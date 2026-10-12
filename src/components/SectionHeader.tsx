import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm mb-3",
            light
              ? "bg-[#183F30]/10 text-[#183F30] border border-[#183F30]/20"
              : "bg-[#183F30]/60 text-[#B69A60] border border-[#B69A60]/30"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A60]" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight",
          light ? "text-[#171B19]" : "text-[#F5F3EC]"
        )}
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-[#4A544F]" : "text-[#DCE5DB]/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
