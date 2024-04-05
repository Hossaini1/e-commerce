import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <>
   <Header />
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
