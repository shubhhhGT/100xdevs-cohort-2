import React from "react";

const data = {
  name: "Shubham Goswami",
  age: "99",
  palce: "Mumbai",
  followers: "1001",
  likes: "5000",
  photos: "1400",
  image: "https://avatars.githubusercontent.com/u/140509975?v=4",
};

const Assignment1 = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="relative flex flex-col justify-center items-center h-[60%] md:w-[30%] sm:w-[50%] w-[60%] bg-white shadow hover:shadow-lg hover:cursor-pointer rounded transition-all duration-200">
        <div className="bg-gradient-to-r from-[#d3dee0] to-[#80a1d8] h-[40%] w-full">
          {/* Top Part */}
        </div>
        <div className="flex justify-center items-center rounded-full absolute top-0 h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] translate-y-24">
          {/* Image */}
          <img
            className="h-[90%] w-[90%] rounded-full object-cover"
            src={data.image}
          />
        </div>
        <div className="bg-white h-[60%] w-full flex flex-col justify-center items-center">
          {/* Bottom part */}
          <div className="mt-16">
            <span className="font-semibold text-lg">{data.name}</span>
            <span className="font-medium text-slate-400 ml-2">{data.age}</span>
          </div>
          <div className="font-medium text-slate-400 mt-2 mb-12">
            {data.palce}
          </div>
          <div className="h-[1px] w-full bg-slate-300 mb-2"></div>
          <div className="flex justify-between items-center w-full p-3">
            <div className="flex flex-col">
              <div className="font-bold text-lg text-center">
                {Number(data.followers) >= 1000
                  ? (Number(data.followers) / 1000).toFixed(1) + "K"
                  : Number(data.followers)}
              </div>
              <div className="text-slate-400">Followers</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg text-center">
                {Number(data.likes) >= 1000
                  ? (Number(data.likes) / 1000).toFixed(1) + "K"
                  : Number(data.likes)}
              </div>
              <div className="text-slate-400">Likes</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg text-center">
                {Number(data.photos) >= 1000
                  ? (Number(data.photos) / 1000).toFixed(1) + "K"
                  : Number(data.photos)}
              </div>
              <div className="text-slate-400">Photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment1;
