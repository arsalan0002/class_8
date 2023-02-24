import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import Home from "../screens/home";
import post from "../screens/post";
import singlepost from "../screens/Singlepost";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/about">Post</Link>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<post />} />
          <Route path="singlepost/:id" element={<singlepost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
