import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/Book.css";

import cover from "../assets/images/book/1.svg";
import page1 from "../assets/images/book/2.svg";
import page2 from "../assets/images/book/3.svg";
import page3 from "../assets/images/book/4.svg";
import page4 from "../assets/images/book/5.svg";
import page5 from "../assets/images/book/6.svg";

// שכבת הקליק השקופה
function HotPathOverlay() {
  return (
    <svg
      viewBox="-550 0 1200 900"  // תעדכני לפי ה-viewBox של 5.svg
      className="hotpath-overlay"
    >
      <a href="src/assets/images/הנחיות הנדסה רפואית.pdf" target="_blank">
        <path
          d="M 24.019531 7.605469 L 24.019531 370.375 L 621.5 370.375 L 621.5 7.605469 Z"
          fill="transparent"
          stroke="transparent"
          style={{ cursor: "pointer", pointerEvents: "all" }}
          onMouseEnter={(e) => (e.target.style.fill = "rgba(255,255,255,0.1)")}
          onMouseLeave={(e) => (e.target.style.fill = "transparent")}
        />
      </a>
    </svg>
  );
}



function Book({ setShowNextBtn, setDoneReading }) {
  const pages = [page5, page4, page3, page2, page1, cover];
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions] = useState({ width: 350, height: 500 });
  const bookRef = useRef(null);

  useEffect(() => setIsMounted(true), []);

  const onPageFlip = (e) => {
    const currentPage = e.data;
    if (currentPage === 0) {
      setDoneReading(true);
      setShowNextBtn(true);
    } else {
      setDoneReading(false);
    }
  };

  return (
    <div className="book">
      {isMounted && (
        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          maxShadowOpacity={0.5}
          showCover={true}
          size="fixed"
          direction="ltr"
          startPage={5}
          onFlip={onPageFlip}
        >
          {pages.map((pageImg, index) => (
            <div className="page" key={index}>
              {index === 1 ? (
                <div className="page page-with-overlay">
                  <img
                    src={pageImg}
                    alt={`page ${index + 1}`}
                    className="page-img"
                  />
                  <HotPathOverlay />
                </div>
              ) : (
                <img
                  src={pageImg}
                  alt={`page ${index + 1}`}
                  className="page-img"
                />
              )}
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}

export default Book;
