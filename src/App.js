import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import TaskBoard from "./components/TaskBoard";
import AttachmentModal from "./components/AttachmentModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  // Handler for uploaded attachments
  const handleUpload = (newAttachments) => {
    setAttachments([...attachments, ...newAttachments]);
  };

  // Open modal when attachment icon is clicked
  const handleAttachmentClick = () => {
    setShowModal(true);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Task Management & Attachment Manager</h1>

      {/* Taskboard Component */}
      <TaskBoard />

      {/* Attachment Section */}
      <div style={{ marginTop: "20px" }}>
        <span
          onClick={handleAttachmentClick}
          style={{ cursor: "pointer", fontSize: "18px" }}
        >
          <FontAwesomeIcon icon={faPaperclip} /> {attachments.length}
        </span>
      </div>

      {/* Modal for Attachment Upload */}
      {showModal && (
        <AttachmentModal
          onClose={() => setShowModal(false)}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
}

export default App;
