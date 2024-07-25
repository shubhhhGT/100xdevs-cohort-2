import React, { useState } from "react";
const colors = ["Red", "Yellow", "Black", "Purple", "Green", "Blue", "Default"];

const Assignment2 = () => {
  const [color, setColor] = useState("");
  const preferedColor = window.matchMedia('(prefers-color-scheme: "Dark" )')
    ? "black"
    : "white";

  return (
    <div
      className="w-full h-screen bg-white flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="shadow-lg p-2 w-fit flex flex-wrap gap-4 rounded-lg mb-5 bg-white">
        {colors.map((color, i) => (
          <button
            key={i}
            className={`px-3 py-1 ${
              color === "Black" ? "text-white" : "text-black"
            } rounded-lg`}
            style={
              color === "Default"
                ? { backgroundColor: "orange" }
                : { backgroundColor: color }
            }
            onClick={() =>
              color === "Default" ? setColor(preferedColor) : setColor(color)
            }
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Assignment2;
