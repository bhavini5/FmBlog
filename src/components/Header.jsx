import React from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  return (
    <header
      className={`header bg-gray-300 mx-auto flex flex-row justify-between p-2 rounded-xl font-bold`}
    >
      <div className='ad flex md:flex-row gap-5'>
        <img
          src='https://cdn.discordapp.com/attachments/906046057757171732/1147908972859375637/logo.png'
          alt='Logo'
          className='w-20 h-20 md:w-auto md:h-auto'
        />
        
        <div className='xs:flex sm:flex md:flex lg:hidden xl:hidden'>
          <button className='menu-button' onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={`items cursor-pointer lg:flex text-sm xl:text-md flex-col md:flex-row gap-2 xl:gap-5 items-center justify-center text-center bg-gray-300 p-0 lg:p-1 ${
          menuOpen ? "flex" : "hidden"
        } ${menuOpen ? "menu-open" : ""}`}
      >
        <p
          className='item-highlighted bg-blue-500 p-2 md:p-4 rounded-lg text-white'
          onClick={() => {
            navigate("/profile");
          }}
        >
          Home
        </p>
        <div>
    </div>
  
        <a href="#presenter" style={{textDecoration:'none',color:'black'}}>Presenters</a>  
        <a href="#dwnld" style={{textDecoration:'none',color:'black'}}>Ringtone</a>
        <a href="#news" style={{textDecoration:'none',color:'black'}}>Blogs</a>
        <a href="#rltn" style={{textDecoration:'none',color:'black'}}>Question Of The Day</a>
        {/* <a href="#news" style={{textDecoration:'none',color:'black'}}>Events</a> */}
        {/* <a href="#twitter" style={{textDecoration:'none',color:'black'}}>Contests</a> */}
        {/* <a href="#news" style={{textDecoration:'none',color:'black'}}>Schedule</a> */}
        {/* <a href="#dwnld" style={{textDecoration:'none',color:'black'}}>Downloads</a> */}
        {/* <a href="#presenter" style={{textDecoration:'none',color:'black'}}>Photos</a> */}

        <p
          onClick={() => {
            navigate("/contactus");
          }}
        >
          Contact Us
        </p>
        
      </div>
    </header>
  );
};

export default Header;


// import React, { useState } from "react";
// import { Menu } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import "./Header.css"; // Import the stylesheet

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   const navigate = useNavigate();

//   return (
//     <header className={`header`}>
//       <div className='ad flex md:flex-row gap-5'>
//       <img
//           src='https://cdn.discordapp.com/attachments/906046057757171732/1147908972859375637/logo.png'
//           alt='Logo'
//           className='w-20 h-20 md:w-auto md:h-auto'
//         />
//         {/* <div className='w-full h-fit flex items-center justify-center bg-gray-300 shadow-inner-md text-white'>
//           <h1>Advertisement Space</h1>
//         </div> */}
//         <div className='xs:flex sm:flex md:flex lg:hidden xl:hidden'>
//           <button className='menu-button' onClick={toggleMenu}>
//             <Menu />
//           </button>
//         </div>
//       </div>
//       <div
//         className={`items cursor-pointer lg:flex text-sm xl:text-md flex-col md:flex-row gap-2 xl:gap-5 items-center justify-center text-center ${
//           menuOpen ? "flex" : "hidden"
//         } ${menuOpen ? "menu-open" : ""}`}
//       >
//        <p
//           className='item-highlighted bg-blue-500 p-2 md:p-4 rounded-lg text-white'
//           onClick={() => {
//             navigate("/profile");
//           }}
//         >
//           Home
//         </p>
//         <div>
//     </div>
  
//         <a href="#presenter" style={{textDecoration:'none',color:'black'}}>Presenters</a>  
//         <a href="#dwnld" style={{textDecoration:'none',color:'black'}}>Ringtone</a>
//         <a href="#news" style={{textDecoration:'none',color:'black'}}>Blogs</a>
//         <a href="#rltn" style={{textDecoration:'none',color:'black'}}>Question Of The Day</a>
//         {/* <a href="#news" style={{textDecoration:'none',color:'black'}}>Events</a> */}
//         {/* <a href="#twitter" style={{textDecoration:'none',color:'black'}}>Contests</a> */}
//         {/* <a href="#news" style={{textDecoration:'none',color:'black'}}>Schedule</a> */}
//         {/* <a href="#dwnld" style={{textDecoration:'none',color:'black'}}>Downloads</a> */}
//         {/* <a href="#presenter" style={{textDecoration:'none',color:'black'}}>Photos</a> */}

//         <p
//           onClick={() => {
//             navigate("/contactus");
//           }}
//         >
//           Contact Us
//         </p>
        
//       </div>
//     </header>
//   );
// };


// export default Header;
