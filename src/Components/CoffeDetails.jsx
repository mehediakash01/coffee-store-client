import { ArrowLeft } from "lucide-react";
import React from "react";

import { useLoaderData, useNavigate } from "react-router";

const CoffeDetails = () => {
  const navigate = useNavigate();
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const {
    _id,
    name,
    barista,
    Supplier,
    taste,
    category,
    details,
    photo,
    price,
  } = coffeeData;

  return (
    <div className=" w-11/12 mx-auto   my-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mt-10 text-[#374151] hover:bg-[#D2B48C] hover:p-2  hover:rounded-2xl w-fit transition-all ease-in-out duration-150"
      >
        {" "}
        <ArrowLeft></ArrowLeft> Back to home
      </button>
      <div className="flex items-center justify-around  bg-[#F5F4F1]  rounded-2xl  p-5 my-2 ">
        <div>
          <img src={photo} className="" alt="" />
        </div>
        <div>
          <h1 className="font-semibold">
            Name: <span className="opacity-50">{name} </span>
          </h1>
          <h1 className="font-semibold">
            Barista: <span className="opacity-50">{barista} </span>
          </h1>
          <h1 className="font-semibold">
            Price: <span className="opacity-50">{price} taka</span>
          </h1>
          <h1 className="font-semibold">
            Taste: <span className="opacity-50">{taste} </span>
          </h1>
          <h1 className="font-semibold">
            category: <span className="opacity-50">{category} </span>
          </h1>
          <h1 className="font-semibold">
            details: <span className="opacity-50">{details} </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
