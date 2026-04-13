import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="loader">
        <div className="loader-ring"></div>
        <span className="loader-text">JU.</span>
      </div>
    </div>
  );
}

export default Pre;
