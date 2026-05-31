"use client";

import { useState } from "react";
import { UploadSimple, FilePdf, FileAudio, FileVideo, CheckCircle, CircleNotch } from "@phosphor-icons/react";
import clsx from "clsx";

interface IngestionDeskProps {
  onComplete: () => void;
}

export default function IngestionDesk({ onComplete }: IngestionDeskProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleSimulateUpload = () => {
    setStatus("processing");
    setIsProcessing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("success");
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12 space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl tracking-tight text-foreground font-medium">
          Digitize Your Business
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-[50ch] mx-auto">
          Upload your menus, catalogs, and assets. We'll automatically build your AI-powered storefront.
        </p>
      </div>

      {/* Main Box */}
      <div className="w-full bg-white border border-gray-200 rounded-[var(--radius)] shadow-sm p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Dropzone */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Data Ingestion
            </h2>
            <button
              onClick={status === "idle" ? handleSimulateUpload : undefined}
              className={clsx(
                "group relative w-full flex flex-col items-center justify-center rounded-[var(--radius)] border-2 border-dashed p-10 transition-colors",
                status === "idle" 
                  ? "border-gray-300 hover:border-accent hover:bg-gray-50 cursor-pointer" 
                  : "border-gray-200 bg-gray-50 cursor-default"
              )}
            >
              <UploadSimple
                size={32}
                weight="light"
                className={clsx(
                  "mb-4 transition-colors", 
                  status === "idle" ? "text-gray-400 group-hover:text-accent" : "text-gray-300"
                )}
              />
              <p className="text-sm font-medium text-gray-700">
                Click to mock file upload
              </p>
              <p className="text-xs text-gray-500 mt-2 text-center">
                .pdf, .mp3, .mp4, and links accepted
              </p>
            </button>

            {/* Manual Links */}
            <div className="space-y-2 mt-2">
              <label className="text-sm font-medium text-gray-700">Social Handles (Optional)</label>
              <input
                type="text"
                placeholder="instagram.com/yourbusiness"
                className="w-full px-4 py-2.5 rounded-[calc(var(--radius)-4px)] border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                disabled={status !== "idle"}
              />
            </div>
          </div>

          {/* Right: Status */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Processing Engine
              </h2>
              
              <div className="space-y-4">
                <StatusRow icon={<FilePdf size={20} />} label="Catalog PDF" status={status} />
                <StatusRow icon={<FileAudio size={20} />} label="Voice Notes" status={status} />
                <StatusRow icon={<FileVideo size={20} />} label="Store Walkthrough" status={status} />
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center">
              <button
                disabled={status !== "success"}
                onClick={onComplete}
                className="w-full py-3.5 px-6 rounded-[calc(var(--radius)-4px)] bg-accent text-accent-fg font-medium shadow-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
              >
                Generate Omni-Storefront
              </button>
              {status === "processing" && (
                <p className="text-xs font-medium text-gray-500 mt-4 flex items-center gap-2">
                  <CircleNotch size={14} className="animate-spin" />
                  Vectorizing assets... {progress}%
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatusRow({ icon, label, status }: { icon: React.ReactNode, label: string, status: string }) {
  let localStatus = "waiting";
  if (status === "processing") {
    localStatus = "loading";
  } else if (status === "success") {
    localStatus = "done";
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-[calc(var(--radius)-4px)] border border-gray-100 bg-gray-50 shadow-sm">
      <div className="flex items-center gap-3 text-gray-700">
        <span className="text-gray-400">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div>
        {localStatus === "waiting" && <span className="text-xs font-medium text-gray-400 px-2 py-1 rounded-[calc(var(--radius)-8px)] bg-gray-100">Pending</span>}
        {localStatus === "loading" && <span className="text-xs font-medium text-amber-600 px-2 py-1 rounded-[calc(var(--radius)-8px)] bg-amber-50 flex items-center gap-1"><CircleNotch size={12} className="animate-spin"/> Extracting</span>}
        {localStatus === "done" && <span className="text-xs font-medium text-emerald-700 px-2 py-1 rounded-[calc(var(--radius)-8px)] bg-emerald-50 flex items-center gap-1"><CheckCircle size={12} weight="fill"/> Vectorized</span>}
      </div>
    </div>
  );
}
