export function download(
	result: File | string,
	text: string,
	fileType: "csv" | "txt" | "xlsx" | "pdf"
): void {
	const link = document.createElement("a");
	link.href = window.URL.createObjectURL(
		new Blob([result], {
			type:
				fileType === "xlsx"
					? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
					: fileType === "pdf"
					? "application/pdf"
					: `text/${fileType === "csv" ? fileType : "plain"}`,
		})
	);
	link.download = `${text}.${fileType}`;
	link.click();
}
