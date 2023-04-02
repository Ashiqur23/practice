import React from "react";
import Features from "../Featues/Features";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2>
        <span className="text-purple-700 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/mon</span>
      </h2>
      <h5 className="text-2xl font-bold">{price.name}</h5>
      <p className="font-bold text-white underline text-1xl">Features: </p>
      {price.features.map((feature, index) => (
        <Features key={index} feature={feature}></Features>
      ))}
      <button className="mt-auto w-full bg-blue-600 py-2 rounded-md text-white font-bold">
        Buy now
      </button>
    </div>
  );
};

export default PriceCard;
