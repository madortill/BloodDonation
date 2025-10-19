import React, { useState } from "react";
import explainVideo from "../assets/images/explainVideo.mp4";
import arrow from "../assets/images/arrow.png";
import "../css/PreparationPopOut.css";

function PreparationPopOut({
  videoEnded,
  setVideoEnded,
  setShowNextBtn,
  setShowQuestion
}) {
  const [partNum, setPartNum] = useState(0);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setShowNextBtn(true);
  };
  const handleArrowClick = () => {
    if (partNum === 0) {
      setPartNum(1);
    } else if (partNum === 1) {
      setPartNum(0);
    }
  };
  return (
    <div
      className={`preparation-pop-out ${
        partNum === 1 ? "scale-for-video-container" : ""
      }`}
    >
      {/* close button */}
      {videoEnded && (
        <p
          className="close-pop-out-btn to-right-arrow"
          onClick={() => {
            setShowQuestion(true);
          }}
        >
          X
        </p>
      )}
      {partNum === 0 && (
        <>
          <p className="bold red">במידה וה- QINFLOW לא עובד</p>
          <p>לתת את המנה למרות הטמפ’ הנמוכה!</p>
        </>
      )}
      {partNum === 1 && (
        <>
          <p className="bold-video-title">
            דגשים לטכניקת השימוש בברז תלת ומזרק 20cc:
          </p>
          <p className="instruct-video">- נא לראות את כל הסרטון -</p>
          <video
            className="explain-video"
            controls
            onEnded={handleVideoEnd} // 👈 Trigger when video ends
          >
            <source src={explainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
      <img
        src={arrow}
        alt="arrow"
        className={`arrow ${partNum === 1 ? "prev-arrow" : ""}`}
        onClick={handleArrowClick}
      />
    </div>
  );
}

export default PreparationPopOut;
