import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        {/* <Route path="/tv" element={<Tv />}></Route> */}
        <Route path="/search" element={<Search />}></Route>
        <Route path="movies/:id" element={<Home />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
