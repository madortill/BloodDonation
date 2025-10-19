import React, { useState } from "react";
import "../css/BloodProducts.css"; 
import PopOutBloodProducts from "./PopOutBloodProducts";


function BloodProducts({setShowNextBtn, inPopOutBloodProducts, setinPopOutBloodProducts, counterDoneBtns, setCounterDoneBtns}) {

  const btns = [
    {
      text: 'שימוש במוצרי דם בצה"ל',
      color: "#D81F2B",
    },
    {
      text: "גישה וסקולרית",
      color: "#E3404B",
    },
    {
      text: "החזר נפח במלחמה",
      color: "#F05C66",
    },
  ];
  const [numPopOut, setNumPopOut] = useState(0);

  return (
<div>
{!inPopOutBloodProducts &&
<>
<p>-לחצו על הנושא הרלוונטי-</p>
<div className="circles-btn-container">
    {btns.map((btn, index) => (
          <div key={index} style={{ "--color-btn": btn.color }}  className={`circle-btn ${index >counterDoneBtns ? "btn-disable" : ""}`} onClick={()=> {setinPopOutBloodProducts(true); setNumPopOut(index)}}>{btn.text}</div>
        ))}
</div>
</>
}

{inPopOutBloodProducts &&
<PopOutBloodProducts setShowNextBtn={setShowNextBtn} indexBtn={numPopOut} setinPopOutBloodProducts={setinPopOutBloodProducts} setCounterDoneBtns={setCounterDoneBtns} counterDoneBtns={counterDoneBtns}/>
}
</div>

  ); 
}

export default BloodProducts;
