import React from "react";

const PDFViewer = () => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 h-96 overflow-hidden">
      <iframe
        className="w-full h-full"
        src="Darlehensvertrag.pdf"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
