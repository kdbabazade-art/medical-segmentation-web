export default function ResultCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Segmentation Result</h2>

      <div className="h-40 bg-slate-200 rounded-xl flex items-center justify-center mb-4">
        Mask Preview
      </div>

      <p><b>Tumor volume:</b> 12.4 cm³</p>
      <p><b>Confidence:</b> 92%</p>
    </div>
  );
}
