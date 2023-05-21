export function openPDF(result: File | string): void {
  const file = new Blob([result], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  console.log("file", file);
  // window.open(objectUrl)
  window.open(fileURL, "");
}