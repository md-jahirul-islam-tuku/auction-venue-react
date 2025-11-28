import React from "react";

const Footer = () => {
  return (
    <footer style={{rowGap:'1px'}} className="footer footer-horizontal footer-center bg-white p-14">
      <div className="navbar-center">
        <a className="btn btn-ghost text-2xl mx-0 px-0 text-blue-950">
          <h1>
            Auction<span className="text-amber-400 font-bold">Venue</span>
          </h1>
        </a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          <li>
            <a>Bid.</a>
          </li>
          <li>
            <a>Win.</a>
          </li>
          <li>
            <a>Own.</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Auctions</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>How to works</a>
          </li>
        </ul>
      </div>
      <p>©2025 AuctionHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
