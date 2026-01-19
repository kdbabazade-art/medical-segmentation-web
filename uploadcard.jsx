"use client";
import { useState } from "react";

export default function UploadCard() {
  const [file, setFile] = useState(null);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Upload DICOM Scan</h2>

      <input
        type="file"
        accept=".dcm"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        className="w-full bg-black text-white py-2 rounded-xl"
        disabled={!file}
      >
        Run AI Segmentation
      </button>
    </div>
  );
}
