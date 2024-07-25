import React from "react";
import Card from "./Card";

const cardData = [
  { to: "assignment1", description: "Profile Component" },
  { to: "assignment2", description: "Background Changer" },
  { to: "assignment3", description: "Custom React" },
  { to: "assignment4", description: "Para Generator" },
  { to: "assignment5", description: "Github Info Card" },
  { to: "assignment6", description: "OTP Login" },
  { to: "assignment7", description: "Birthday Wisher" },
];

const Landing = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#d3dee0] to-[#80a1d8]">
      <h1 className="font-semibold text-lg mb-6">Welcome to week 7</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {cardData.map((data, index) => (
          <Card key={index} link={data.to} description={data.description} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
