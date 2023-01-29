import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import 'animate.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
