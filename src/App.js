import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {HashRouter, Route, Routes } from 'react-router-dom'
import Blogs from "./components/pages/blogs";
import BlogPostWithContext from "./components/pages/PostView";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pages/:filename" element={<BlogPostWithContext />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;