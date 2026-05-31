"use client";

import CustomerStorefront from "../components/CustomerStorefront";
import { useRouter } from "next/navigation";

export default function StorefrontPage() {
  const router = useRouter();
  
  return (
    <main className="min-h-[100dvh] flex flex-col w-full bg-gray-100">
      <CustomerStorefront onBack={() => router.push("/dashboard")} />
    </main>
  );
}
