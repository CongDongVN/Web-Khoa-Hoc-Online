async function downloadFile() {
    const filenameInput = document.getElementById('filename');
    const filename = filenameInput.value;
    if (!filename) {
        alert("Please enter a filename to download");
        return;
    }

    try {
        const response = await fetch('https://localhost:7279/api/Documents/DownloadFile?filename=' + filename);

        if (!response.ok) {
            throw new Error('Download failed');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}