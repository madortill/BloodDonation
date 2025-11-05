import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/Book.css";

// import cover from "../assets/images/book/1.svg";
// import page1 from "../assets/images/book/2.svg";
// import page2 from "../assets/images/book/3.svg";
// import page3 from "../assets/images/book/4.svg";
import page4 from "../assets/images/book/5.svg";
// import page5 from "../assets/images/book/6.svg";

import cover from "../assets/images/book/png/1.png";
import page1 from "../assets/images/book/png/2.png";
import page2 from "../assets/images/book/png/3.png";
import page3 from "../assets/images/book/png/4.png";
import page5 from "../assets/images/book/png/6.png";

import medicalPdf from "../assets/images/הנחיות הנדסה רפואית.pdf";

function HotPathOverlay() {
  return (
    <svg viewBox="-550 0 1200 900" className="hotpath-overlay">
      <a href={medicalPdf} target="_blank" rel="noopener noreferrer">
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
  const [dimensions, setDimensions] = useState({ width: 350, height: 500 });
  const [bookReady, setBookReady] = useState(false);
  const bookRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 530) {
        setDimensions({ width: 210, height: 300 });
      } else if (window.innerWidth <= 600) {
        setDimensions({ width: 250, height: 360 });
      } else {
        setDimensions({ width: 350, height: 500 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = [page5, page4, page3, page2, page1, cover];

  const onPageFlip = (e) => {
    const currentPage = e.data;
    if (currentPage === 0) {
      setDoneReading(true);
      setShowNextBtn(true);
    } else {
      setDoneReading(false);
    }
  };

  const handleInit = () => {
    // מופעל רק כשהספר באמת מוכן
    setBookReady(true);
    if (bookRef.current) {
      const api = bookRef.current.pageFlip();
      api.turnToPage(5);
    }
  };

  return (
    <div className={`book ${bookReady ? "visible" : "hidden"}`}>
      <HTMLFlipBook
   ref={bookRef}
   width={dimensions.width}
   height={dimensions.height}
   minWidth={dimensions.width}
   minHeight={dimensions.height}
   maxWidth={dimensions.width}
   maxHeight={dimensions.height}
   size="fixed"
   drawShadow={false}
   showCover={window.innerWidth > 600}  // ✅ רק במחשב תהיה כריכה אמיתית
   usePortrait={window.innerWidth <= 600}
   mobileScrollSupport={true}
   onFlip={onPageFlip}
   onInit={handleInit}
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
    </div>
  );
}

export default Book;
