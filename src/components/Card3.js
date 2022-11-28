import React from "react";
import desktopImg from "../images/image-product-desktop.jpg";
import mobileImg from "../images/image-product-mobile.jpg";
import cartIcon from "../images/icon-cart.svg";

export default function Card3() {
  return (
    <div className=" max-w-sm lg:max-w-xl lg:grid lg:grid-cols-2 bg-white rounded-xl my-[4rem] lg:my-0 overflow-hidden shadow-2xl shadow-gray-200">
      <picture>
        <source
          className="object-cover h-full"
          media="(max-width:1024px)"
          srcSet={mobileImg}
        ></source>
        <img
          className=" object-cover h-full"
          src={desktopImg}
          alt="chanel perfume"
        ></img>
      </picture>
      <div className=" p-7 lg:p-9">
        <h1 className=" mb-2 lg:mb-6 font-Montserrat font-normal uppercase text-gray-500 tracking-[.5em]">
          perfume
        </h1>
        <h2 className=" mb-4 lg:mb-6 font-Fraunces text-4xl text-very-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="text-dark-grayish-blue text-[14px] mb-6 lg:mb-8">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-6 mb-5 lg:mb-8">
          <h3 className="font-Fraunces text-dark-cyan text-3xl font-bold">
            $149.99
          </h3>
          <span className="line-through text-dark-grayish-blue text-[14px]">
            $169.99
          </span>
        </div>
        <button className="flex justify-center w-full items-center gap-3 mx-auto py-4 rounded-lg bg-dark-cyan hover:bg-dark-cyan-hover text-white font-semibold">
          <img src={cartIcon} alt="cart icon"></img>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
