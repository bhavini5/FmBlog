import { useNavigate } from "react-router-dom";
import React from "react";

const Footer = () => {
  
  const navigate = useNavigate();

  return (
    <div className='w-screen bg-[#006896] flex flex-row justify-evenly p-4 flex-wrap lg:px-[18rem]'>
        <a  className='text-white text-xl'  href="#presenter" >Presenters</a>  
        <a  className='text-white text-xl' href="#dwnld"     >Ringtone</a>
        <a  className='text-white text-xl' href="#news"      >Blogs</a>


        {/* <a  className='text-white text-xl' href="#rltn"      >Question Of The Day</a> */}
{/*         
      <button  onClick={()=>{navigate("/")}}>Home</button>
      <button  onClick={()=>{navigate("/presenter")}}>Presenters</button>
      <button  onClick={()=>{navigate("/hero")}}>Artists</button>
      <button  onClick={()=>{navigate("/blog")}}>Blogs</button>
      <button className='text-white text-xl' onClick={()=>{navigate("/poll")}}>Relationships</button>
      <button className='text-white text-xl' onClick={()=>{navigate("/news")}}>Events</button>
      <button className='text-white text-xl' onClick={()=>{navigate("/fmblog")}}>Contests</button>
      <button className='text-white text-xl' onClick={()=>{navigate("/nowplaying")}}>Show Listing</button> */}
    </div>
  );
}

export default Footer;
