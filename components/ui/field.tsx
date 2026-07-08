"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const baseField =
  "w-full rounded-xl border border-line bg-panel/60 px-4 py-3 text-[0.95rem] text-cream " +
  "placeholder:text-cream-faint outline-none transition-all duration-200 " +
  "focus:border-gold/60 focus:bg-panel focus:shadow-[0_0_0_3px_rgba(201,162,39,0.12)]";

interface FieldWrapProps {
  label: string;
  hint?: string;
  htmlFor?: string;
  children: React.ReactNode;
}

export function FieldWrap({ label, hint, htmlFor, children }: FieldWrapProps) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="flex items-baseline justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-cream-dim">
          {label}
        </span>
        {hint && <span className="text-[0.7rem] text-cream-faint">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

export const TextInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(baseField, className)} {...props} />
));
TextInput.displayName = "TextInput";

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(baseField, "min-h-[110px] resize-none", className)}
    {...props}
  />
));
TextArea.displayName = "TextArea";
