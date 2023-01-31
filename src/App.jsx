import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import 'animate.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
