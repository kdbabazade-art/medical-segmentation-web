export async function runSegmentation(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:8000/segment", {
    method: "POST",
    body: formData,
  });

  return await res.json();
}
