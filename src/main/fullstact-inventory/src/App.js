import "./App.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProducts";
import AddRetailer from "./pages/AddRetailer";
import Retailer from "./pages/Retailer";
import Request from "./pages/Request";
import AddRequest from "./pages/AddRequest";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/addlib" element={<AddLib/>} /> */}

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/retailer" element={<Retailer />} />
          <Route exact path="/request" element={<Request />} />

          <Route exact path="/addretailer" element={<AddRetailer />} />
          <Route exact path="/addrequest" element={<AddRequest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
