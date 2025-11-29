import { useState } from "react";
import "./App.css";
import Footer from "./assets/Components/Footer/Footer";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Navbar from "./assets/Components/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [clickedItems, setClickedItems] = useState([]);
  const handleFavoriteSelect = (item) => {
    setClickedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);

      if (exists) {
        toast.warn("Already added!");
        return prev; // OK
      }
      toast.success("Added!");
      return [...prev, item]; // OK
    });
  };
  const handleDelete = (id) => {
    setClickedItems(clickedItems.filter((item) => item.id !== id));
  };
  const totalPrice = clickedItems.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );
  console.log(clickedItems);

  return (
    <>
      <div style={{ caretColor: "transparent" }} className="bg-slate-200">
        <Navbar></Navbar>
        <Header></Header>
        <Main
          handleDelete={handleDelete}
          totalPrice={totalPrice}
          clickedItems={clickedItems}
          handleFavoriteSelect={handleFavoriteSelect}
        ></Main>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
