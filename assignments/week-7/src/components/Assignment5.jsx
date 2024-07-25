import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoOrganization } from "react-icons/go";

const Assignment5 = () => {
  const [bgColor, setBgColor] = useState("dark");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  function formatDate(isoString) {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
  }
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center w-screen h-screen ${
        bgColor === "dark" ? "bg-white" : "bg-[#141D2F]"
      }`}
    >
      <div className="flex justify-between items-center w-[40%]">
        {/* Top Dive */}
        <h1
          className={`${
            bgColor === "dark" ? "text-[#4b6a9b]" : "text-white"
          } text-3xl`}
        >
          DevDetective
        </h1>
        <button
          className={`${
            bgColor === "dark" ? "text-[#4b6a9b]" : "text-white"
          } capitalize`}
          onClick={() => {
            setBgColor(() => (bgColor === "dark" ? "light" : "dark"));
          }}
        >
          {bgColor}
        </button>
      </div>

      <div className="flex items-center gap-3 shadow-lg rounded-lg w-[40%] px-2 py-2">
        {/* Middle div */}
        <CiSearch className=" text-[#0079ff] w-[20px] h-[20px]" />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter a GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
          className="bg-transparent w-[85%] focus:outline-none"
        />
        <button
          className="px-2 py-3 rounded text-white font-semibold bg-[#0079ff]"
          onClick={async () => {
            const response = await fetch(
              `https://api.github.com/users/${username}`
            );
            if (response.status !== 200) {
              alert("Username Not Valid!");
            }
            const res = await response.json();
            setUser(res);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col items-center gap-3 shadow-lg rounded-lg w-[40%] px-4 py-4">
        {/* lower div */}
        <div className="flex items-center justify-between w-full">
          {/* header */}
          <div className="flex items-center">
            <img
              className="w-[90px] h-[90px] rounded-full"
              src={user.avatar_url}
            />
            <div className="flex flex-col items-center ml-5">
              <p className="text-lg font-medium">{user.login}</p>
              <a href={`https://github.com/${user.login}`}>
                <span className="underline text-blue-600">@{user.login}</span>
              </a>
            </div>
          </div>
          <div>{formatDate(user.created_at)}</div>
        </div>

        <div className="w-full text-slate-500 tracking-widest">
          {/* BIO */}
          {user.bio}
        </div>

        <div className="rounded-xl bg-[#f6f8ff] px-6 py-7 flex justify-between items-center w-full">
          {/* followers */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-slate-600 text-sm tracking-wider">Repos</p>
            <p className="font-bold text-xl">{user.public_repos}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-slate-600 text-sm tracking-wider">Followers</p>
            <p className="font-bold text-xl">{user.followers}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-slate-600 text-sm tracking-wider">Following</p>
            <p className="font-bold text-xl">{user.following}</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full px-10">
          {/* bottom */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center text-slate-500">
              <FaLocationDot />
              <p>{user.location}</p>
            </div>
            <div className="flex gap-2 items-center text-slate-500">
              <FaTwitter />
              <p>{user.twitter_username}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center text-slate-500">
              <MdOutlineAlternateEmail />
              <p>{user.email === null ? "Not Available" : user.email}</p>
            </div>
            <div className="flex gap-2 items-center text-slate-500">
              <GoOrganization />
              <p>{user.company === null ? "Not Available" : user.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment5;
