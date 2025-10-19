import React, { useState } from "react";
import "../css/Preparation.css";
import data from "../data.json";
import video from "../assets/images/video.png";
import StepsList from "./StepsList";
import PreparationPopOut from "./PreparationPopOut";

function Preparation({
  setShowNextBtn,
  numPartPreparation,
  showPOPreparation,
  videoEnded,
  setVideoEnded,
  setShowQuestion
}) {
  return (
    <div className="preparation">
      {numPartPreparation === 0 && (
        <img src={video} alt="video" className="video" />
      )}

      {(numPartPreparation === 1 || numPartPreparation === 2) && (
        <>
          <p className="space-bottom-preparation">
            השלבים במתן המנה (לאחר הערכת הפצוע וקבלת אישור):
          </p>
          <StepsList arr={data.stepsArr.second} />
        </>
      )}

      {showPOPreparation && (
        <PreparationPopOut
          videoEnded={videoEnded}
          setVideoEnded={setVideoEnded}
          setShowNextBtn={setShowNextBtn}
          setShowQuestion={setShowQuestion}
        />
      )}
    </div>
  );
}

export default Preparation;
