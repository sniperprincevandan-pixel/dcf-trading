import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto";
  showSubtitle?: boolean;
}

export default function Logo({
  className = "",
  variant = "auto",
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A60] rounded-sm",
        className
      )}
      aria-label="DCF Trading Pvt Ltd - Home"
    >
      {/* Monogram emblem badge */}
      <div className="relative flex items-center justify-center w-10 h-10 border border-[#B69A60]/40 rounded-sm bg-[#183F30]/80 shadow-sm backdrop-blur-sm group-hover:border-[#B69A60] transition-colors duration-300">
        <span
          className="text-base font-bold tracking-tight text-[#F5F3EC]"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          D
        </span>
        <span className="text-xs font-semibold text-[#B69A60] ml-[-1px]">
          CF
        </span>
        {/* Subtle accent corner pip */}
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#B69A60]/80" />
      </div>

      {/* Wordmark text */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "text-xl font-bold tracking-[0.14em] uppercase transition-colors duration-200",
            isLight
              ? "text-[#171B19] group-hover:text-[#183F30]"
              : "text-[#F5F3EC] group-hover:text-white"
          )}
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          DCF
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "text-[9px] tracking-[0.24em] font-medium uppercase -mt-0.5",
              isLight ? "text-[#183F30]/80" : "text-[#B69A60]"
            )}
          >
            Trading Pvt Ltd
          </span>
        )}
      </div>
    </Link>
  );
}
