import React from "react";
export default function ({ src, width = 300, height = 300 }) {
  return (
    <div
      className="AwesomeImage"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRadius: "8px"
      }}
    ></div>
  );
}
