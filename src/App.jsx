

import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/"  />
            <Route path="/"  />
            <Route path="/"  />
            <Route path="/"  />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App