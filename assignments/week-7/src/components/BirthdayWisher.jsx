// BirthdayWisher.js
import React from "react";

const BirthdayWisher = ({ name, age }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 p-5 space-y-8 overflow-auto">
      {/* Card 1: Festive and Fun */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-1/2 lg:w-1/3 text-center relative mt-[20%]">
        <div className="absolute inset-0 w-full h-full bg-confetti bg-no-repeat bg-cover opacity-20"></div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          🎂 Happy Birthday!
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Cheers to {age} years, {name}!
        </p>
        <p className="text-gray-700">
          May your day be filled with love, laughter, and lots of cake!
        </p>
        <div className="flex justify-center mt-4">
          <span className="text-pink-500 font-bold text-2xl">🎉🎁🎈</span>
        </div>
      </div>

      {/* Card 2: Elegant and Classy */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl rounded-xl p-8 w-full sm:w-1/2 lg:w-1/3 text-center">
        <div className="border-4 border-white rounded-full p-4 inline-block mb-4">
          <h2 className="text-4xl font-bold">🌟 {name} 🌟</h2>
        </div>
        <p className="text-2xl mb-4">Celebrating {age} Magnificent Years!</p>
        <p className="text-lg">
          Wishing you a day that's as special as you are.
        </p>
        <div className="flex justify-center mt-4">
          <span className="text-2xl font-semibold">🎂 🍰 🥂</span>
        </div>
      </div>

      {/* Card 3: Retro Vibes */}
      <div className="bg-black text-white shadow-lg rounded-lg p-8 w-full sm:w-1/2 lg:w-1/3 text-center relative">
        <div className="absolute inset-0 w-full h-full bg-stars bg-no-repeat bg-cover opacity-10"></div>
        <h2 className="text-5xl font-bold text-yellow-400 mb-2">
          Happy Birthday, {name}!
        </h2>
        <p className="text-lg text-gray-200 mb-4">
          Turning {age} never looked so good!
        </p>
        <p className="text-base text-gray-400">
          Wishing you all the best on your special day and always.
        </p>
        <div className="flex justify-center mt-4">
          <span className="text-4xl">🌟✨💫</span>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWisher;
