import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Blog from "./pages/Blog";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/services" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>

  );
};

export default App;
