"use client";

import IngestionDesk from "../components/IngestionDesk";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-[100dvh] flex flex-col w-full bg-background">
      <IngestionDesk onComplete={() => router.push("/dashboard")} />
    </main>
  );
}
