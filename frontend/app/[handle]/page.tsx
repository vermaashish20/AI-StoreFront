"use client";

import BusinessAnchor from "../components/BusinessAnchor";
import { usePlatform } from "../context/PlatformContext";

export default function HandlePage() {
  const { businessName } = usePlatform();
  
  return (
    <main className="min-h-[100dvh] flex flex-col w-full bg-gray-100">
      <BusinessAnchor />
    </main>
  );
}
