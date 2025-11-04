import React, { useState, useEffect } from "react";
import "../css/ResponsesTypes.css";
import phoneCard1 from "../assets/images/flipCard/phone/one.png";
import phoneCard2 from "../assets/images/flipCard/phone/two.png";
import phoneCard3 from "../assets/images/flipCard/phone/three.png";
import card1 from "../assets/images/flipCard/one.png";
import card2 from "../assets/images/flipCard/two.png";
import card3 from "../assets/images/flipCard/three.png";

import FlipCard from "./FlipCard";

function ResponsesTypes({ numPart }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      img: card1,
      phoneImg: phoneCard1,
      back: "אדרנלין, במהלך הפינוי סולמדרול. בהמשך הפינוי פתיחת גישה נוספת למחזור הדם ומתן קריסטלואידים",
      color: "#F88C01",
    },
    {
      img: card2,
      phoneImg: phoneCard2,
      back: "במהלך הפינוי סולומדרול",
      color: "#FFAF02",
    },
    {
      img: card3,
      phoneImg: phoneCard3,
      back: 'יש קושי להבדיל בשטח בין תגובה המוליטית (AHTR - מסכן חיים) ותגובת חום לא המוליטית (FNHTR) ולכן הטיפול בשתי התגובות זהה - פתיחת גישה נוספת למחזור הדם והרצת 1-2 ליטר של קריסטלואידים. יש לשלוח את מנת הדם שהופסקה יחד עם הפצוע לביה"ח לבדיקה מעבדתית. במקרה של תגובה אנפילקטית נלווית יש לטפל בהתאם.',
      color: "#FFAF02",
    },
  ];

  return (
    <div>
      {numPart === 0 && (
        <p className="bold header-responses">
          לאחר עצירת מנת הדם ומעבר לטיפול בפלזמה, יש להוסיף טיפול בהתאם לסוג
          התגובה
        </p>
      )}

      <div className="types-container expired">
        {numPart === 1 && (
          <>
            {cards.map((c, i) => (
              <FlipCard
                key={i}
                imgUrl={isMobile ? c.phoneImg : c.img} // ✅ בחירת תמונה לפי רוחב המסך
                backText={c.back}
                color={c.color}
                isBloodBag={false}
              />
            ))}
          </>
        )}

        {numPart === 0 && (
          <>
            {cards.map((c, i) => (
              <img
                key={i}
                src={isMobile ? c.phoneImg : c.img} // ✅ גם כאן לפי גודל המסך
                alt={i}
                className="img-type"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ResponsesTypes;
