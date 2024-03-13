import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FMBlog from "./components/FMBlog";
import { useMediaQuery } from "react-responsive";
import News from "./components/News";
import ad from "./assets/img-ad.png";
import Advertisment from "./components/Advertisment";
import Blog from "./components/Blog";
import Twitter from "./components/Twitter";
import Presenter from "./components/Presenter";
import Ringtone from "./components/Ringtone";
import Poll from "./components/Poll";
import footer from "./assets/img-footer-ad.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='bg-bgmain  px-2 md:px-[14vw] overflow-x-hidden'>
        <Header />
        <Hero />
        <div className='flex flex-wrap'>
          <div className='w-screen lg:w-2/3  flex flex-col pr-0 lg:pr-5'>
            <News />
            <Advertisment />
            <Presenter />
            <div className='w-full p-0 flex flex-wrap justify-around'>
              <Ringtone />
              <Poll />
            </div>
          </div>
          <div className='w-full lg:w-1/3 flex flex-col'>
            <FMBlog />
            <img src={ad} className='w-full my-10' alt='' />
            <Blog />
            <Twitter />
          </div>
        </div>
        <img src={footer} className='w-full' alt='' />
      </div>
      <Footer />
    </>
  );
}

export default App;



// import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import FMBlog from "./components/FMBlog";
// import { useMediaQuery } from "react-responsive";
// import News from "./components/News";
// import ad from "./assets/img-ad.png";
// import Advertisment from "./components/Advertisment";
// import Blog from "./components/Blog";
// import Twitter from "./components/Twitter";
// import Presenter from "./components/Presenter";
// import Ringtone from "./components/Ringtone";
// import Poll from "./components/Poll";
// import footer from "./assets/img-footer-ad.png";
// import Footer from "./components/Footer";
// import ContactUs from "./components/ContactUs";

// import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [btnstatus, setBtnStatus] = useState(true);
//   const [empdata, setEmpData] = useState({
//     id: "",          // Keep this as 'id'
//     name: "",
//     username: "",
//     dob: "",
//     pass: "",
//     email: "",
//   });
//   const [logdata, setLogData] = useState({ uname: "", pass: "" });
//   const [serverMsg, setServerMsg] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if there's a user token in localStorage
//     const userToken = localStorage.getItem("userToken");

//     if (userToken) {
//       // Set the isLoggedIn state to true if a token exists
//       setIsLoggedIn(true);
//     }
//   }, [empdata]);
//   const handleLogin = () => {
//     axios
//       .post("http://localhost:8080/Mlogin", logdata)
      
//       .then((response) => {
//         // Handle successful login
//         console.log(empdata);
//         console.log("Login successful");
//         setBtnStatus(!btnstatus);
//         setIsLoggedIn(true);

//         // Store user information or token in localStorage
//         localStorage.setItem("userToken", response.data.token); // assuming a token is returned
//       })
//       .catch((error) => {
//         // Handle login error
//         console.error("Login error:", error);
//         setServerMsg("Login failed. Please check your credentials.");
//       });
//   };
  
//   const handleLogout = () => {
//     localStorage.removeItem("userToken");
//     setIsLoggedIn(false);

//     window.location.href = "/login";
//   };
//   const Layout = () => {
//     return (
//       <>
//         <Nav />
//         <button onClick={handleLogout}>Logout</button>
//         <Outlet />
//       </>
//     );
//   };

//   const handleSignupClick = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
  
//     try {
//       const response = await fetch("/add/user", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(empdata),
//       });
//       console.log(empdata);
//       if (response.ok) {
//         const data = await response.json();
//         alert(data.msg);
//         console.log("Successfully signed up");
//       } else {
//         const errorData = await response.json();
//         alert(errorData.msg || "Server error");
//         console.error("Signup failed:", errorData);
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       setServerMsg("Signup failed. Please try again.");
//     }
//   };
  
//   useEffect(() => {
//     if (serverMsg) {
//       alert(serverMsg);
//     }
//   }, [serverMsg]);
//   const handleLoginClick = () => {
//     handleLogin();
//   };

// //   const handleSignupClick = () => {
// //     handleSignup();
// //   };

//   return (
//     <>
//       {/* {!isLoggedIn ? ( */}
//         <div className="body">
//           <div className="mainpage">
//             <input
//               type="checkbox"
//               className="input"
//               id="chk"
//               aria-hidden="true"
//             />

//             <div className="signup">
//               <form>
//                 <label
//                   className="label"
//                   htmlFor="chk"
//                   aria-hidden="true"
//                   id="signup"
//                 >
//                   Sign up
//                 </label>
//                 <input id="input" name="id"placeholder="Id" required=""onChange={(e)=>setEmpData({...empdata,id:e.target.value})}></input>
                
//                 <input
//                   id="input"
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   required=""
//                   onChange={(e) =>
//                     setEmpData({ ...empdata, name: e.target.value })
//                   }
//                 />
//                 <input
//                   id="input"
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   required
//                   onChange={(e) =>
//                     setEmpData({ ...empdata, username: e.target.value })
//                   }
//                 />
//                 <input
//                   id="input"
//                   type="date"
//                   name="dob"
//                   placeholder="Date Of Birth"
//                   required=""
//                   onChange={(e) =>
//                     setEmpData({ ...empdata, dob: e.target.value })
//                   }
//                 />
                
//                 <input
//                   id="input"
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   required=""
//                   onChange={(e) =>
//                     setEmpData({ ...empdata, pass: e.target.value })
//                   }
//                 />
//                 <input
//                   id="input"
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   required=""
//                   onChange={(e) =>
//                     setEmpData({ ...empdata, email: e.target.value })
//                   }
//                 />
//                 <button className="btnlog" type="button" onClick={handleSignupClick}>
//                   Sign up
//                 </button>
//               </form>
//             </div>

//             <div className="login">
//               <form>
//                 <label className="label" htmlFor="chk" aria-hidden="true">
//                   Login
//                 </label>
//                 <input
//                   id="input"
//                   type="text"
//                   name="uname"
//                   placeholder="Username"
//                   required=""
//                   onChange={(e) =>
//                     setLogData({ ...logdata, uname: e.target.value })
//                   }
//                 />
//                 <input
//                   id="input"
//                   type="password"
//                   name="pswd"
//                   placeholder="Password"
//                   required=""
//                   onChange={(e) =>
//                     setLogData({ ...logdata, pass: e.target.value })
//                   }
//                 />
//                 <button className="btnlog" type="button" onClick={handleLoginClick}>
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//     {/* //   ) : ( */}
//     //     // <BrowserRouter>
//     //     //   <Routes>
//     //     //     <Route path="/Header" element={<Header />}></Route>
//     //     //       <Route path="/Presenter" element={<Presenter />}></Route>
//     //     //       <Route path="/Ringtone" element={<Ringtone />}></Route>
//     //     //       <Route path="/ContactUs" element={<ContactUs />}></Route>
              
    
//     //     //   </Routes>
//     //     // </BrowserRouter>
//     {/* //   )}
//       ):(console.log("Not logged in"))} */}
//     </>
//   );
// }








