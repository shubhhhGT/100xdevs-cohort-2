import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ link, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${link}`)}
      className="flex flex-col justify-center items-center bg-white px-4 py-5 rounded shadow hover:shadow-lg hover:cursor-pointer transition-all duration-200"
    >
      <h3 className="uppercase font-medium">{link}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default Card;
