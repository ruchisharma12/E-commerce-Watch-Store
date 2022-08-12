import React from 'react'


export default function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">

        <div className='popup-inner'>
           
            { props.children }
            <button className="ok-button" onClick={() => props.setTrigger(false)}>OK</button>
        </div>
    </div>
  ):"";
}