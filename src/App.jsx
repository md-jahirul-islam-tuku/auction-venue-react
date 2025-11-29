import { useState } from "react";
import "./App.css";
import Footer from "./assets/Components/Footer/Footer";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Navbar from "./assets/Components/Navbar/Navbar";

function App() {
  const [clickedItems, setItems] = useState([]);
  const handleFavoriteSelect = (item) => {
    const newItems = [...clickedItems, item];
    setItems(newItems);
  };
  const totalPrice = clickedItems.reduce((sum, item) => sum + item.currentBidPrice, 0);
  const handleDelete = (id) => {
  setItems(clickedItems.filter(item => item.id !== id));
};
  return (
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
  );
}

export default App;
