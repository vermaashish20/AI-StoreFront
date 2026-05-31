"use client";

import OwnerDashboard from "../components/OwnerDashboard";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-[100dvh] flex flex-col w-full bg-gray-50">
      <OwnerDashboard onNavigateToStorefront={() => router.push("/storefront")} />
    </main>
  );
}
