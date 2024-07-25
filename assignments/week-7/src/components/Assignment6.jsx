import React, { useRef, useState } from "react";

const Assignment6 = () => {
  const [number, setNumber] = useState("");
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [val, setVal] = useState({ num1: "", num2: "", num3: "", num4: "" });
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [loginSuccess, setLoginSuccess] = useState(false);

  const data = [
    { name: "num1", value: val.num1 },
    { name: "num2", value: val.num2 },
    { name: "num3", value: val.num3 },
    { name: "num4", value: val.num4 },
  ];

  function handleClick() {
    if (!isNaN(Number(number)) && number.length === 10) {
      setIsNumberValid(true);
      setNumber("");
    } else {
      setNumber("");
      setIsNumberValid(false);
      alert("Please enter a valid number");
    }
  }

  function handleChange(e, index) {
    let value = e.target.value.split("");
    setVal((prevVal) => ({
      ...prevVal,
      [e.target.name]: value[value.length - 1],
    }));
    // console.log(value)
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }

  function handleLogin() {
    const otp = `${val.num1}${val.num2}${val.num3}${val.num4}`;

    if (otp.length == 4) {
      setLoginSuccess(true);
      setVal({ num1: "", num2: "", num3: "", num4: "" });
      setIsNumberValid(false);
      setLoginSuccess(false);
    } else {
      alert("Please enter a valid OTP!");
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col justify-center items-center border border-white rounded-lg w-[90%] sm:w-[60%] lg:w-[30%] px-12 py-16">
        <h1 className="text-white text-4xl mb-7">Login via OTP</h1>
        {!isNumberValid ? (
          <input
            type="text"
            name="number"
            value={number}
            placeholder="Enter your mobile number"
            className=" rounded-md p-3 border border-white bg-black w-full text-white"
            onChange={(e) => setNumber(e.target.value)}
          />
        ) : (
          <div className="flex gap-4 justify-center items-center w-full">
            {data.map((element, index) => (
              <input
                key={index + 1}
                type="number"
                name={element.name}
                className=" rounded-md p-3 border border-white bg-black text-white text-center w-12 no-spinner"
                value={element.value}
                onChange={(e) => {
                  handleChange(e, index);
                }}
                ref={inputRefs[index]}
                max={9}
                min={0}
              />
            ))}
          </div>
        )}
        <button
          className="px-3 py-2 bg-black rounded-md border border-white text-white mt-10"
          onClick={!isNumberValid ? handleClick : handleLogin}
        >
          {!isNumberValid ? "Send OTP" : "Login"}
        </button>
        {loginSuccess && (
          <div className="text-sm mt-2 text-white">Login Success!</div>
        )}
      </div>
    </div>
  );
};

export default Assignment6;
