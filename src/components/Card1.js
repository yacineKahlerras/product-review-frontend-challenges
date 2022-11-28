import { React } from "react";
import paysage from "../images/card-top.jpg";

export default function Card1() {
  return (
    <div className=" pb-5 max-w-sm shadow-xl rounded overflow-hidden bg-white text-gray-800">
      <img
        className=" w-full mb-3"
        src={paysage}
        alt="mountains on sunset"
      ></img>
      <div className=" px-6 py-2">
        <h1 className=" font-bold text-2xl mb-2">The Coldest Sunset</h1>
        <p className=" text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className=" px-6 py-5">
        <span className=" px-3 py-2 mr-3 bg-gray-200 rounded-full font-semibold cursor-pointer">
          #photography
        </span>
        <span className=" px-3 py-2 mr-3 bg-gray-200 rounded-full font-semibold cursor-pointer">
          #travel
        </span>
        <span className=" px-3 py-2 mr-3 bg-gray-200 rounded-full font-semibold cursor-pointer">
          #winter
        </span>
      </div>
    </div>
  );
}
