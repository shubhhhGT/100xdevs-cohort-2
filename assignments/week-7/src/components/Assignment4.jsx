import React, { useState } from "react";
const words = [
  "Union",
  "Finance",
  "Minister",
  "Nirmala",
  "Sitharaman",
  "began",
  "presenting",
  "the",
  "Union",
  "Budget",
  "in",
  "Parliament",
  "today",
  "July",
  "23",
  "at",
  "11",
  "am",
  "So",
  "far,",
  "announcements",
  "have",
  "been",
  "made",
  "for",
  "politically",
  "significant",
  "states",
];

const Assignment4 = () => {
  const [lengthOfWords, setLengthOfWords] = useState("");
  const [para, setPara] = useState("");

  function handleChange(e) {
    setLengthOfWords(e.target.value);
  }

  function handleClick() {
    setPara("");
    for (let i = 0; i < Number(lengthOfWords); i++) {
      setPara(
        (prevPara) =>
          prevPara + " " + words[Math.floor(Math.random() * words.length)]
      );
    }
  }
  return (
    <div className="bg-white flex flex-col justify-start items-center w-full h-full mt-[10%] gap-3">
      <h1 className="font-bold text-3xl">Para Generator</h1>
      <div className=" w-[100%] flex justify-center items-center gap-4">
        <input
          type="text"
          name="para"
          value={lengthOfWords}
          placeholder="Enter Number of Words"
          onChange={handleChange}
          className="border border-slate-300 px-3 py-3 text-sm w-[50%]"
        />
        <button
          className="rounded-xl bg-black text-white px-3 py-3"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      {para && <div className="px-4 ">{para}</div>}
    </div>
  );
};

export default Assignment4;
