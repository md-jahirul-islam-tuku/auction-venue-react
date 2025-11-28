import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Main = ({ handleFavoriteSelect, clickedItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/auctions.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="lg:w-10/12 mx-auto px-4 mt-32 pb-28">
      <div>
        <h1 className="text-xl font-semibold text-blue-950">Active Auctions</h1>
        <p className="my-3">Discover and bid on extraordinary items</p>
      </div>
      <div className="lg:flex gap-4 mx-auto">
        <table
          className="lg:w-[70%]"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <thead>
            <tr className="text-sm text-gray-600">
              <th
                style={{
                  borderBottom: "2px solid #ddd",
                  padding: "16px 10px",
                  textAlign: "start",
                }}
              >
                Items
              </th>
              <th
                style={{
                  borderBottom: "2px solid #ddd",
                  padding: "16px 10px",
                  textAlign: "center",
                }}
              >
                Current Bid
              </th>
              <th
                style={{
                  borderBottom: "2px solid #ddd",
                  padding: "16px 10px",
                  textAlign: "center",
                }}
              >
                Time Left
              </th>
              <th
                style={{
                  borderBottom: "2px solid #ddd",
                  padding: "16px 10px",
                  textAlign: "center",
                }}
              >
                Bid Now
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr className="border border-slate-200" key={item.id}>
                <td style={{ padding: "10px" }}>
                  <div className="flex">
                    <img
                      className="w-16 h-16 object-cover rounded"
                      src={item.image}
                      alt=""
                    />
                    <h4 className="ml-2 text-blue-950">{item.title}</h4>
                  </div>
                </td>

                <td
                  style={{
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  ${item.currentBidPrice}
                </td>

                <td
                  style={{
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {item.timeLeft} left
                </td>

                <td
                  style={{
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    onClick={() => handleFavoriteSelect(item)}
                    className="cursor-pointer"
                  >
                    <FaRegHeart className=" hover:text-red-500 text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:w-[30%] max-h-fit bg-white rounded-xl mt-4 lg:mt-0">
          <div className="flex justify-center border-b-2 border-[#ddd] w-full">
            <div className="text-xl font-semibold py-3 border-[#ddd] text-blue-950">
              <div className="flex items-center gap-2">
                <FaRegHeart className="" /> Favorite Items
              </div>
            </div>
          </div>
          <div
            className="text-center py-8 border-b-2 border-[#ddd]"
            style={{ display: clickedItems.length === 0 ? "block" : "none" }}
          >
            <h2 className="text-xl font-semibold pb-3">No favorites yet</h2>
            <p className="text-sm px-10">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>
          <table className="text-center w-full">
            <tbody>
              {clickedItems.map((item) => (
                <tr className="border-b-2 border-slate-200" key={item.id}>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <div className="flex">
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src={item.image}
                        alt=""
                      />
                      <div className="text-start ml-2">
                        <h4 className="text-blue-950 text-start text-sm font-semibold">
                          {item.title}
                        </h4>
                        <div className="w-2/3 flex justify-between text-xs">
                          <p>${item.currentBidPrice}</p>
                          <p>Bids: {item.id}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      paddingRight: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <button className="cursor-pointer">
                      <RiDeleteBin6Line className=" hover:text-red-500 text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between py-3 px-3 text-xl">
            <h2>Total bids Amount</h2>
            <h2>$0000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
