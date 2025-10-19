import React, { useState } from "react";
import "../css/Preparation.css";
import data from "../data.json";
import video from "../assets/images/video.png";
import StepsList from "./StepsList";
import PreparationPopOut from "./PreparationPopOut";

function Preparation({ setShowNextBtn, numPartPreparation, setShowQuestion,videoEnded, setVideoEnded }) {

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

      {numPartPreparation === 2  && (
        <PreparationPopOut setShowQuestion={setShowQuestion} videoEnded={videoEnded} setVideoEnded={setVideoEnded} setShowNextBtn={setShowNextBtn}/>
      )}
    </div>
  );
}

export default Preparation;
