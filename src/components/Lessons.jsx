import React, { useRef, useState } from "react";
import bag from "../assets/images/flipCard/bag.png";
import FlipCard from "./FlipCard";
import "../css/Lessons.css";


function Lessons({ numPartLesson, setScrolledToBottom }) {
    const scrollRef = useRef(null);
  const cards = [
    {
      img: bag,
      back: 'בדיקה כפולה לפני מנת דם: מט"ב וחובש צריכים לבדוק את תוקף וסוג המנה לפני המתן - תיעוד בטופס 101',
      color: "#F88C01",
    },
    {
      img: bag,
      back: "בדיקת כוננות ותוקף פעמיים ביום",
      color: "#FFAF02",
    },
    {
      img: bag,
      back: "דם פג תוקף - יש להחזיר לבנק הדם",
      color: "#FFAF02",
    },
    {
      img: bag,
      back: "יש לבצע הסמכה חוזרת למתן דם מידי שנה",
      color: "#FFAF02",
    },
  ];
  const lessonsArr = [
    "יש להקפיד על ניסיון מדידת לחץ דם",
    "יש לשאוף להשגת גישה למחזור הדם בכל פצוע עם היתכנות לצורך בטיפול בנפח",
    "באם יש גישה תוך גרמית – לתת את הדם דרכה ולא להתעכב להשגת גישה ורידית",
    "קפאון של הדם – לשמור על טמפ' הדוקה",
    "מנה נוספת? – לתת דם מלא אם יש!",
    "אין להכין את הדם מראש לפני הערכת פצוע",
    "ניתן להשיג גישה למחזור הדם במקביל להכנת המנה על ידי איש צוות נוסף",
    "ככל הניתן, יש לתעדף שימוש במקרר יעודי לדם המלא על פני אמצעי אחסון ושינוע אחרים",
    "לוודא כי קיים ציוד נלווה – QINFLOW, סט Y, ברז תלת ומזרק 20cc",
    "חשיפה לדם –  התנהלות זהירה, מיגון אישי"
  ];
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // check if user reached bottom
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
      setScrolledToBottom(true);
    } 
  };
  return (
    <div className="lessons">
      {numPartLesson === 0 && (
        <>
          <p>מאירוע מתן מנת דם פגת תוקף:</p>
          <div className="types-container fix-the-margin">
            <div>
              <FlipCard
                imgUrl={bag}
                backText={cards[0].back}
                color={cards[0].color}
                isBloodBag={true}
              />
              <FlipCard
                imgUrl={bag}
                backText={cards[1].back}
                color={cards[1].color}
                isBloodBag={true}
              />
            </div>
            <div>
              <FlipCard
                imgUrl={bag}
                backText={cards[2].back}
                color={cards[2].color}
                isBloodBag={true}
              />
              <FlipCard
                imgUrl={bag}
                backText={cards[3].back}
                color={cards[3].color}
                isBloodBag={true}
              />
            </div>
          </div>
        </>
      )}
      {numPartLesson === 1 && (
        
      <div className="intro-container lessons-text" ref={scrollRef} onScroll={handleScroll}>
        <p className="header-intro fix-lessons-margin">מהניסיון במלחמה</p>
        <ol>
            {lessonsArr.map((text, index) => (
         <li key={index}>{text}</li>
        ))}
        </ol>
      </div>
     
        
      )}
    </div>
  );
}

export default Lessons;
