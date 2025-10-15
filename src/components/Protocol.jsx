import React from 'react'
import protocol from '../assets/images/protocol.svg';
function Protocol({setShowProtocol, setShowNextBtn, setFinishIndictions}) {
  return (
    <div className='protocol-container-img'>
        <p className='close-btn-protocol' onClick={()=> {setShowProtocol(false); setShowNextBtn(true);  setFinishIndictions(true)}}>X</p>
      <img src={protocol} alt="protocol" className='protocol-img'/>
    </div>
  )
}

export default Protocol
