import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Article from "./Pages/Article";
import DetailArticle from "./Pages/DetailArticle";
import Community from "./Pages/Community";
import DetailCommunity from "./Pages/DetailCommunity";
import Discussion from "./Pages/DisqusApp";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/detailArticle/:id" element={<DetailArticle />} />
        <Route path="/detailCommunity" element={<DetailCommunity />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/community" element={<Community />} />

    </Routes>
  );
}

export default App;
