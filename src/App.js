import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BlogExpand from "./components/BlogExpand";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/BlogExpand" element={<BlogExpand />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;