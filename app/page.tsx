"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("Ładowanie...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch hello message");
        }

        const data = (await response.json()) as { message: string };
        setMessage(data.message);
      })
      .catch(() => {
        setError("Nie udało się pobrać wiadomości z API.");
      });
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        gap: "0.5rem",
      }}
    >
      <h1>{error ?? message}</h1>
      <p>Frontend + backend w jednej aplikacji Next.js.</p>
    </main>
  );
}
