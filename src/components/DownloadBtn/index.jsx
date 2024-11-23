import React from "react";
import { saveAs } from "file-saver";
const DownloadButton = ({ pathPdf, namePdf }) => {
  const handleDownload = () => {
    if (pathPdf) {
      saveAs(pathPdf, namePdf);
    }
  };

  return (
    <div className="btns">
      <button
        className="btn"
        onClick={handleDownload}
        disabled={!pathPdf} // Disable button if pathPdf is not provided
        style={{
          backgroundColor: !pathPdf ? "#ccc" : "",
          cursor: !pathPdf ? "not-allowed" : "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadButton;
