import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faCommentDots,
  faCalendarAlt,
  faLayerGroup,
  faTabletScreenButton,
  faTable,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Card.css";
import AttachmentModal from "./AttachmentModal";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons/faUserCheck";

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
      <div className="user-icon">
        <span>
          {" "}
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Client name
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sadik Istiak
        </span>
      </div>

      <p className="user-icon">
        {" "}
        <span>
          <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>{" "}
          <small>Lorem ipsum dolor sit.. </small>
        </span>{" "}
        <span>
          <FontAwesomeIcon icon={faTable}></FontAwesomeIcon> 1/2
        </span>
      </p>

      <div className="card-footer">
        <div className="card-icons">
          <span>
            {" "}
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>
          </span>
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
    </div>
  );
};

export default Card;
