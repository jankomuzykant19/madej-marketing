import { NextResponse } from "next/server";
import { parseLeadPayload, type LeadPayload } from "@/lib/lead";

export async function POST(request: Request) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { ok: false, error: "Formularz nie jest jeszcze skonfigurowany." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const lead = parseLeadPayload(body);
  if (!lead) {
    return NextResponse.json(
      { ok: false, error: "Uzupełnij wymagane pola formularza." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: webhookSecret,
        ...lead,
      }),
      cache: "no-store",
    });

    let result: { ok?: boolean; error?: string } = {};
    try {
      result = (await response.json()) as { ok?: boolean; error?: string };
    } catch {
      result = {};
    }

    if (!response.ok || !result.ok) {
      return NextResponse.json(
        { ok: false, error: "Nie udało się zapisać zgłoszenia. Spróbuj ponownie." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie." },
      { status: 502 }
    );
  }
}

export type { LeadPayload };
