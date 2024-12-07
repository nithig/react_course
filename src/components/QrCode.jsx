export const QrCode = () => {
  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      <img src="images/qrcode.png" alt="" className="qrimg" />
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data For QR Code:
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter Data For QR Code"
        />
        <label htmlFor="sizeInput" className="input-label">
          Image Size (e.g., 150):
        </label>
        <input type="text" id="sizeInput" placeholder="Size For QR Code" />
        <button className="gen-button">Generate QR Code</button>
        <button className="download-button">Download QR Code</button>
      </div>
    </div>
  );
};

// Time:2:10:00 Tutor Joe's
