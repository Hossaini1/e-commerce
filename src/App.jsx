import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";





const App = () => {
  return (
    <>
      <Header />
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" />
          <Route path="" />
          <Route path="" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
