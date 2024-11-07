import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faCommentDots,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Card.css";
import AttachmentModal from "./AttachmentModal";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const handleAttachmentClick = () => {
    setShowModal(true);
  };

  const handleUpload = (files) => {
    setAttachments([...attachments, ...files]);
  };

  return (
    <div className="card">
      <h3>Client Name</h3>
      <p>Lorem ipsum dolor sit amet...</p>
      <div className="card-footer">
        <div className="card-icons">
          <span>
            <FontAwesomeIcon /> 12+
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentDots} /> 15
          </span>
          <span onClick={handleAttachmentClick}>
            <FontAwesomeIcon icon={faPaperclip} /> {attachments.length}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} /> 30-12-2022
          </span>
        </div>
      </div>
      {showModal && (
        <AttachmentModal
          onClose={() => setShowModal(false)}
          onUpload={handleUpload}
        />
      )}
      {/* <div className="attachment-list">
        {attachments.map((file, index) => (
          <div key={index} className="attachment-item">
            {file.name} ({file.type.split("/").pop()})
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Card;
