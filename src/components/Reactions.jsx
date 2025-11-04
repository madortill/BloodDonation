import React from 'react'
import ResponseSus from './ResponseSus'
import ResponsesTypes from './ResponsesTypes'

function Reactions({ numPartReactions, setShowNextBtn, finishedResponseSus, setFinishedResponseSus, numPartResponsesTypes }) {
    const arrText= [ 'זכרו!',"בשל שימוש בדם LTOWB צפי למס' מועט של תגובות", 'בכדי לראות את הטיפול בכל תגובה עברו מעל הכרטיסיות']
  return (
    <div className='reactions'>
        <p className={numPartReactions === 0 ? 'no-margin-top bold' : 'no-margin-top'}>{arrText[numPartReactions]}</p>
        {numPartReactions=== 1  &&
        <ResponseSus setShowNextBtn={setShowNextBtn} finishedResponseSus={finishedResponseSus} setFinishedResponseSus={setFinishedResponseSus}/>
        }
         {(numPartReactions=== 0 || numPartReactions === 2) &&
       <>
       {numPartReactions === 0 &&
       <p className='no-margin-top'>מדובר במוצר דם עם תופעות לוואי! יש לתת באינדיקציה בלבד!</p>       
       }
       <ResponsesTypes numPart={numPartResponsesTypes}/>
       </>
        }
        
      
    </div>
  )
}

export default Reactions
