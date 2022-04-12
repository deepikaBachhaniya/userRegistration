import React from "react";
import image from './components/image/download.jpg'



function Background () {
  return (
      <div className="bg" style={{backgroundImage: `url(${image}` }}></div>
  );
}

export default Background;