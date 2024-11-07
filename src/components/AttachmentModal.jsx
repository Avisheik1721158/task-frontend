import React, { useState } from "react";
import "../components/AttachmentModal.css";

function AttachmentModal({ onClose, onUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  // Upload files and pass them to App.js
  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles); // Pass selected files back to App.js
      setSelectedFiles([]); // Clear selected files after upload
    }
    onClose(); // Close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upload Attachments</h2>
        <input type="file" multiple onChange={handleFileChange} />

        {/* Display selected files */}
        {selectedFiles.length > 0 && (
          <div className="file-list">
            <h4>Selected Files:</h4>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({file.type})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="button-container">
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttachmentModal;
