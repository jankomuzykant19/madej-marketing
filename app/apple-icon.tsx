import { ImageResponse } from "next/og";
import {
  MARK_DOT_PATH,
  MARK_GRADIENT,
  MARK_INK,
  MARK_M_PATH,
} from "@/components/madej-logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon: full-bleed tile (iOS applies its own corner mask). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="g" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            {MARK_GRADIENT.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#g)" />
        <path d={MARK_M_PATH} fill={MARK_INK} />
        <path d={MARK_DOT_PATH} fill={MARK_INK} />
      </svg>
    ),
    size,
  );
}
