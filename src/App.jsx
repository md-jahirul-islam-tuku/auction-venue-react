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
  return (
    <div style={{ caretColor: "transparent" }} className="bg-slate-200">
      <Navbar></Navbar>
      <Header></Header>
      <Main
        clickedItems={clickedItems}
        handleFavoriteSelect={handleFavoriteSelect}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
