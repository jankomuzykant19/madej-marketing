async function getHelloMessage(): Promise<string> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/hello`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch hello message");
  }

  const data = (await response.json()) as { message: string };
  return data.message;
}

export default async function HomePage() {
  const message = await getHelloMessage();

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
      <h1>{message}</h1>
      <p>Frontend + backend w jednej aplikacji Next.js.</p>
    </main>
  );
}
