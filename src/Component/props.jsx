import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";

const ImageCard = (props) => {
  const { userImg, userName, timeline, imageUrl, description } = props;

  return (
    <div className="image-card">
      <div className="image-card-text">
        <div className="user">
          <img
            id="userImg"
            src={userImg}
            alt={userName}
            className="user-image"
          />
          <p id="username">{userName}</p>
        </div>
        <p id="description">{description}</p>
        <div className="user-info">
          <div className="user-details">
            <p className="timeline">
              {timeline}{" "}
              <FontAwesomeIcon id="icon" icon={faBookmark} className="fa-bookmark" />
            </p>
          </div>
        </div>
      </div>
      <img id="images" src={imageUrl} />
    </div>
  );
};

export default ImageCard;
