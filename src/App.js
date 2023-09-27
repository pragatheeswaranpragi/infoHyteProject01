import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;
