import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "../components/Footer";
import Home from "../pages/Home"
import Navbar from "../components/Navbar";
import "../App.css"
import "../index.css"

function App() {
  return (
    <>
      <div className="bg-white dark:bg-[rgb(9,8,12)] text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;