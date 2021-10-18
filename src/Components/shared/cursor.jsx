import React from "react";

const CursorComponent = () => {
    //follow cursor on mousemove
    document.addEventListener( "mousemove", ( e ) => {
      const cursor = document.querySelector(".cursor");
      // var timeout;
      let x = e.pageX;
      let y = e.pageY;

      
      // document.querySelector( ".cursor" ).style.top = y + "px"
      // document.querySelector( ".cursor" ).style.top = x + "px"
      // document.querySelector( ".cursor" ).style.display = "block";
      

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      // function mouseStopped(){
      //   cursor.style.display = "none";
      // }
      // clearTimeout(timeout);
      // timeout = setTimeout(mouseStopped, 1000);
    });
  
  return  <div className="cursor"></div>
}

export default CursorComponent