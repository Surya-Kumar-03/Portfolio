import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "animate.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/contact_me" element={<Contact></Contact>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
