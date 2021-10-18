import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="mt-4">
      <span className="font-bold text-gray-400"> {props.name} </span>
         <div className="progress progress-moved">
                <div className={`progress-bar progress-bar-${props.color}-${props.progress}`} >
                </div>                       
          </div> 
     </div> 
  )
}

export default ProgressBar
