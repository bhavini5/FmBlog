import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Success from "./components/Success.jsx";
import Presenter from "./components/Presenter.jsx";
import Ringtone from "./components/Ringtone.jsx";
import Blog from "./components/Blog.jsx";
import Hero from "./components/Hero.jsx";
import Poll from "./components/Poll.jsx";
import FMBlog from "./components/FMBlog.jsx";
import News from "./components/News.jsx";
import NowPlaying from "./components/NowPlaying.jsx";
import Twitter from "./components/Twitter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/profile' index element={<App />} />
        {/* <Route path='/presenter' element={<Presenter />} />
        <Route path='/ringtone' element={<Ringtone />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/poll' element={<Poll />} />
        <Route path='/news' element={<News />} />
        <Route path='/fmblog' element={<FMBlog />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/nowplaying' element={<NowPlaying />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        {/* <Route path='/success' element={<Success />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
