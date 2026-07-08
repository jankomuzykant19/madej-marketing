"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { VERSIONS, type VersionKey } from "@/lib/theme";

export function VersionSwitcher({
  value,
  onChange,
}: {
  value: VersionKey;
  onChange: (v: VersionKey) => void;
}) {
  return (
    <div className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-line bg-ink/70 p-1 backdrop-blur-md">
        {VERSIONS.map((v) => {
          const active = v.key === value;
          return (
            <button
              key={v.key}
              type="button"
              onClick={() => onChange(v.key)}
              title={v.hint}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active ? "text-ink" : "text-cream-dim hover:text-cream"
              )}
            >
              {active && (
                <motion.span
                  layoutId="version-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-bright"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{v.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
