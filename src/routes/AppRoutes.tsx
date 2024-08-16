import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Tips from "../pages/Tips";
import Create from "../pages/crud/Create";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
