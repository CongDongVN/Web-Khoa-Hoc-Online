async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file to upload");
        return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://localhost:7279/api/Documents/Uploadfile', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const result = await response.text(); // Sử dụng .text() nếu API trả về plain text
        alert('File uploaded successfully: ' + result);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}