import { useRef, useState } from "react";
import "./App.css";
import Footer from "./assets/Components/Footer/Footer";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";
import Navbar from "./assets/Components/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [clickedItems, setClickedItems] = useState([]);
  const toastExists = useRef(false);
  const toastAdded = useRef(false);
  const toastDeleted = useRef(false);

  const handleFavoriteSelect = (item) => {
    setClickedItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        if (!toastExists.current) {
          toast.error("Item already added!");
          toastExists.current = true;
          setTimeout(() => (toastExists.current = false), 1000); // reset after toast
        }
        return prev;
      }
      if (!toastAdded.current) {
        toast.success("Item added!");
        toastAdded.current = true;
        setTimeout(() => (toastAdded.current = false), 1000);
      }
      return [...prev, item];
    });
  };

  const handleDelete = (id) => {
    setClickedItems((prev) => prev.filter((item) => item.id !== id));
    if (!toastDeleted.current) {
      toast.success("Deleted!");
      toastDeleted.current = true;
      setTimeout(() => (toastDeleted.current = false), 1000);
    }
  };
  const totalPrice = clickedItems.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );
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
        <ToastContainer
          position="top-right"
          richColors
          autoClose={1000}
          pauseOnHover={false}
        />
      </div>
    </>
  );
}

export default App;