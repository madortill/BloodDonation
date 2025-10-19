import React, { useState } from "react";
import "../css/PlasmaPart.css";
import one from "../assets/images/testTubes/one.svg";
import two from "../assets/images/testTubes/two.svg";
import three from "../assets/images/testTubes/three.svg";
import graph from "../assets/images/graph/threePlasma.png";
import arrow from "../assets/images/arrow.png";

function PlasmaPart({ numPartInPlasma, setNumPartInPlasma, setFinishedPlasmaExplain, setShowNextBtn }) {
  const arrInfoPlasma = [
    "פלזמה היא החלק בנוזל הדם המכיל את פקטורי הקרישה ללא יתר רכיבי הדם (תאי דם לבנים, אדומים וטסיות). ",
    "בצבא נעשה שימוש בפלזמה מיובשת (FDP) מסוג LYOPLAS המיוצר מתורם אחד ונוח לשימוש מבחינה לוגיסטית. ",
    "השימוש בפלזמה בפצועי הטראומה שיפר את שרידות הפצועים המצויים בהלם עמוק. ",
    "עם זאת, לעומת הפלזמה, דם מלא מכיל את כלל רכיבי הדם והוכח כעדיף לפצוע המדמם המצוי בהלם עמוק.",
    'ניתן לראות כי השימוש בדם מלא לעומת פלזמה בדרג השטח, משפר באופן משמעותי את שרידות הפצועים המדממים. מבוסס על נתונים ממלחמת "חרבות ברזל".',
  ];
  const handleArrowClick = ({ target }) => {
    if (target.id === "next-btn") {
      setNumPartInPlasma((prev) => prev + 1);
      if(numPartInPlasma === 4) {
        setFinishedPlasmaExplain(true);
        setShowNextBtn(true);
      }
    } else {
      setNumPartInPlasma((prev) => prev - 1);
    }
  };

  function increasePart() {
    setNumPartInPlasma((prev) => prev + 1);
  }
  return (
    <div className={` ${numPartInPlasma !== 0 ? "plasma-container" : ""}`}>
      <div
        className={`btn-test-tube-container ${
          numPartInPlasma === 0 ? "jump-animation" : "second-place-test-tube"
        }`}
        onClick={increasePart}
      >
        <img
          src={
            numPartInPlasma === 0 ||
            numPartInPlasma === 4 ||
            numPartInPlasma === 5
              ? one
              : two
          }
          alt="test-tube"
          className="test-tube"
        />
        {numPartInPlasma === 0 && <p>לחצו</p>}
      </div>
      {numPartInPlasma === 5 && (
        <img src={graph} alt="graph" className="graph-plasma" />
      )}
      <div
        className={`info-plasma-container ${
          numPartInPlasma === 5 ? "final-scale-text" : ""
        }`}
      >
        <p className="plasma-info-text">{arrInfoPlasma[numPartInPlasma - 1]}</p>

        {numPartInPlasma !== 0 && (
          <div className="moving-btns-container">
            <img
              id="back-btn"
              src={arrow}
              alt="arrow"
              className="arrow arrow-in-plasma-part prev-arrow"
              onClick={handleArrowClick}
            />
            <img
              id="next-btn"
              src={arrow}
              alt="arrow"
              className={`arrow arrow-in-plasma-part ${
                numPartInPlasma === 5 ? "hide" : ""
              }`}
              onClick={handleArrowClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PlasmaPart;
