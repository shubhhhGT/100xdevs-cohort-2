import React, { useState } from "react";
import BirthdayWisher from "./BirthdayWisher";

const Assignment7 = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  const [isCardGenerated, setIsCardGenerated] = useState(false);

  function changeHandler(e) {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      {!isCardGenerated ? (
        <div className="flex w-full justify-center items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetically-Pleasing-Backgrounds-High-Quality.jpg')",
              opacity: 0.8,
            }}
          />
          <div className="relative z-10 shadow-2xl rounded-xl flex flex-col justify-center items-center px-5 py-3 bg-blue-800 bg-opacity-60 w-[40%] gap-5">
            <h1 className="text-white text-2xl mb-5">Birthday Wisher</h1>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter name"
              onChange={changeHandler}
              className="w-full px-2 py-3 rounded-md"
            />
            <input
              type="text"
              name="age"
              value={user.age}
              placeholder="Enter age"
              onChange={changeHandler}
              className="w-full px-2 py-3 rounded-md"
            />
            <button
              className=" bg-blue-500 text-white px-3 py-2 rounded-md"
              onClick={() => setIsCardGenerated(true)}
            >
              Generate Cards
            </button>
          </div>
        </div>
      ) : (
        <BirthdayWisher name={user.name} age={user.age} />
      )}
    </div>
  );
};

export default Assignment7;
