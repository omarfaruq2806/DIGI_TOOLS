// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Carts from "./components/Carts";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Review from "./components/Review";
import Steps from "./components/Steps";
import Transform from "./components/Transform";
import { ToastContainer, toast } from 'react-toastify';

const getProductsData = async () => {
  const res = await fetch("/productsData.json");
  return res.json();
};
const productsData = getProductsData();
function App() {
  const [carts , setCarts] = useState([]);
  return (
    <>
    <ToastContainer/>
      <NavBar carts={carts} />

      <Banner />

      <Review />

      <Products productsData={productsData} carts={carts} setCarts={setCarts} />

      <Steps />
      <Pricing />
      <Transform />
      <Footer />
    </>
  );
}

export default App;
