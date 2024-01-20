import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateToko } from "./pages/CreateToko";
import EditToko from "./pages/EditToko";
import { ShowToko } from "./pages/ShowToko";
import { DeleteToko } from "./pages/DeleteToko";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toko/create" element={<CreateToko />} />
        <Route path="/toko/edit/:id" element={<EditToko />} />
        <Route path="/toko/details/:id" element={<ShowToko />} />
        <Route path="/toko/delete/:id" element={<DeleteToko />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
