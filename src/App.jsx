import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import AllListItems from "./pages/AllListItems";

const App = () => {
  return (
    <>
      <Header />
      <Main />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listitems" element={<AllListItems />} />
        <Route path="" />
        <Route path="" />
      </Routes>
    </>
  );
};

export default App;
