import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import AllListItems from "./pages/AllListItems";

const App = () => {

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listitems" element={<AllListItems />} />
        <Route path="" />
        <Route path="" />
      </Routes> 
      <Header />

      <Main />
    </>
  );
};

export default App;
