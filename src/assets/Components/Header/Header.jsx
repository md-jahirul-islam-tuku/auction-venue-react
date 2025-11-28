import React from "react";
import bg from "../images/Banner-min.jpg";

const Header = () => {
  return (
    <div
      className="hero place-items-start items-center h-[50vh] lg:h-[70vh]"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="hero-content text-neutral-content text-start sm:w-11/12 lg:w-10/12 mx-auto justify-start">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl text-white font-semibold">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-5">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="btn rounded-full btn-sm shadow-none">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
