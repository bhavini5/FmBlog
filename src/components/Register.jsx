// import React, { useState } from "react";
// import Header1 from "./Header1";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Register = () => {
  
//   const navigate = useNavigate();


//     const [empdata, setempdata] = useState({ 
//       userid: "", // Assuming userid is auto-incremented
//           name:"",
//           username:"",
//           dob: "",
//           password:"",
//           confirmPassword:"",
//           email:""
//     });
//   const [server_msg, setmsg] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/add/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(empdata),
//       });
    

//       if (response.ok) {
//         console.log('Data saved successfullyyyyyyyyyy',empdata);
//         navigate("/profile");
//       } else {
//         console.error('Error submitting form:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error.message);
//     }
//   };



//   return (
//     <div>
//       <Header1 />
//       <div className='min-h-screen flex flex-col items-center justify-start bg-gray-100'>
//         <button
//           onClick={() => {
//             alert(
//               `Your Data is: \nid: ${id}\nName: ${name}\nUsername: ${username}\nDate of Birth: ${dateOfBirth}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`
//             );
//           }}
//           className='border-black border-2 rounded-lg px-8 py-2 my-10'
//         >
//           Show Data
//         </button>
//         <div className='bg-white p-8 rounded-lg shadow-md w-80'>
//           <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
//           <form>
//           <div className='mb-4'>
//               <label htmlFor='id' className='block font-medium'>
//                 Id
//               </label>
//               <input
//                 type='tenumberxt'
//                 id='id'
//                 className='w-full p-2 border rounded-lg'
//                 placeholder='Enter your id'
//                 onChange={(e) => setempdata({ ...empdata, userid: e.target.value })}
                
//               />
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='name' className='block font-medium'>
//                 Name
//               </label>
//               <input
//                 type='text'
//                 id='name'
//                 className='w-full p-2 border rounded-lg'
//                 placeholder='Enter your name'
//                 onChange={(e) => setempdata({ ...empdata, name: e.target.value })}

//               />
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='username' className='block font-medium'>
//                 Username
//               </label>
//               <input
//                 type='text'
//                 id='username'
//                 className='w-full p-2 border rounded-lg'
//                 placeholder='Enter your username'
//                 onChange={(e) => setempdata({ ...empdata, username: e.target.value })}

//               />
//             </div>
//             <div className='mb-4'>
//               <label
//                 htmlFor='dateOfBirth'
//                 className='block font-medium'
//               >
//                 Date of Birth
//               </label>
//               <input
//                 type='date'
//                 id='dob'
//                 className='w-full p-2 border rounded-lg'
//                 onChange={(e) => setempdata({ ...empdata, dob: e.target.value })}

//               />
//             </div>
//             <div className='mb-4'>
//               <label htmlFor='password' className='block font-medium'>
//                 Password
//               </label>
//               <input
//                 type='password'
//                 id='password'
//                 className='w-full p-2 border rounded-lg'
//                 placeholder='Enter your password'
//                 onChange={(e) => setempdata({ ...empdata, password: e.target.value })}

//               />
//             </div>
//               <div className='mb-4'>
//               <label htmlFor='password' className='block font-medium'>
//                 Email
//               </label>
//               <input
//                 type='email'
//                 id='email'
//                 className='w-full p-2 border rounded-lg'
//                 placeholder='Enter your email'
//                 onChange={(e) => setempdata({ ...empdata, email: e.target.value })}

//               />
            
//             </div>
//             <input
//         type="button"
//         value="Signup"
//         className="signupButton"
//         onClick={handleSubmit}
//       />

      
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import Header1 from "./Header1";
import { useNavigate } from "react-router-dom";

import "./SignUp.css"; // Import the stylesheet

const SignUp = () => {
  const [empdata, setempdata] = useState({
    userid: "",
    name: "",
    username: "",
    dob: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
            const response = await fetch('http://localhost:8080/add/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(empdata),
            });
          
      
            if (response.ok) {
              console.log('Data saved successfullyyyyyyyyyy',empdata);
              navigate("/profile");
            } else {
              console.error('Error submitting form:', response.statusText);
            }
          } catch (error) {
            console.error('Error submitting form:', error.message);
          }
        };
  

  return (
    <div>
      <Header1 />
      <div className='min-h-screen flex flex-col items-center justify-start bg-gray-100'>
        {/* <button
          onClick={() => {
            alert(
              `Your Data is: \nid: ${empdata.userid}\nName: ${empdata.name}\nUsername: ${empdata.username}\nDate of Birth: ${empdata.dob}\nPassword: ${empdata.password}\nEmail: ${empdata.email}`
            );
          }}
          className='border-black border-2 rounded-lg px-8 py-2 my-10'
        >
          Show Data
        </button> */}
        <div className='bg-white z-8 rounded-lg shadow-md w-80'>
          <h2 className='text-2xl font-semibold mb-04'>Sign Up</h2>
          <form>
          
          <div className='mb-4'>
              <label htmlFor='id' className='block font-medium'>
                Id
              </label>
              <input
                type='tenumberxt'
                id='id'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your id'
                onChange={(e) => setempdata({ ...empdata, userid: e.target.value })}
                
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='name' className='block font-medium'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your name'
                onChange={(e) => setempdata({ ...empdata, name: e.target.value })}

              />
            </div>
            <div className='mb-4'>
              <label htmlFor='username' className='block font-medium'>
                Username
              </label>
              <input
                type='text'
                id='username'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your username'
                onChange={(e) => setempdata({ ...empdata, username: e.target.value })}

              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='dateOfBirth'
                className='block font-medium'
              >
                Date of Birth
              </label>
              <input
                type='date'
                id='dob'
                className='w-full p-2 border rounded-lg'
                onChange={(e) => setempdata({ ...empdata, dob: e.target.value })}

              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block font-medium'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your password'
                onChange={(e) => setempdata({ ...empdata, password: e.target.value })}

              />
            </div>
              <div className='mb-4'>
              <label htmlFor='password' className='block font-medium'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your email'
                onChange={(e) => setempdata({ ...empdata, email: e.target.value })}

              />
            
            </div>
            <input
        type="button"
        value="Signup"
        className="signupButton"
        onClick={handleSubmit}
      />
          </form>
          <button
          onClick={() => {
            navigate("/");
          }}
        >
          Already have an account?
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
