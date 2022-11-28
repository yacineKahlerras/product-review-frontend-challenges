import React from "react";
import womanMug from "../images/woman-mug.jpg";
import authorPic from "../images/author-profile.jpg";

export default function Card2() {
  return (
    <div className=" max-w-sm w-full rounded overflow-hidden lg:max-w-3xl lg:flex bg-white">
      {/* image */}
      <div
        className=" w-full h-48 lg:h-auto bg-cover"
        style={{ backgroundImage: `url(${womanMug})` }}
      ></div>

      {/* text side  */}
      <div className=" p-8 border border-gray-300 border-t-0 lg:border-t lg:border-l-0">
        <div className=" flex items-center gap-2 text-gray-500 font-semibold mb-2">
          <svg
            className="fill-current text-gray-500 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
          </svg>
          Members Only
        </div>
        <h1 className=" text-gray-900 text-2xl font-bold mb-3">
          Can coffee make you a better developer?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>

        {/* author */}
        <div className="flex gap-4 items-center">
          <img
            className=" w-14 rounded-full"
            src={authorPic}
            alt="author's profile pic"
          ></img>
          <div>
            <h2 className="text-lg text-gray-900">Jonathan Reinink</h2>
            <span className="text-gray-600">Aug 18</span>
          </div>
        </div>
      </div>
    </div>
  );
}
