import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Ashiqur23/practice/main/public/prices.json"
    )
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="md:mx-12">
      <h2
        className="text-5xl text-center text-purple-950
       bg-purple-300 font-bold p-4"
      >
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 m-auto gap-3 text-center">
        {prices?.map((price) => (
          <PriceCard price={price} key={price.id}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
