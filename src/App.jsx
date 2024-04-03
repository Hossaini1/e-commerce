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
