import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import HomePage from "./assets/pages/HomePage";
import ContactPage from "./assets/pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
