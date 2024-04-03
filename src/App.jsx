

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";




function App() {
  

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <>

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
