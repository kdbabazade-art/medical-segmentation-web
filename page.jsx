"use client";
import UploadCard from "@/components/UploadCard";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI Medical Image Segmentation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <UploadCard />
        <ResultCard />
      </div>
    </main>
  );
}
