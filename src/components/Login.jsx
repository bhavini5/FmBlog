import React from "react";
import Header1 from "./Header1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   if (username === "" && password === "") {
  //     alert("All fields required!");
  //   } else {
  //     navigate("/");
  //   }
  // };
  const [empdata, setempdata] = useState({ uname: "", pass: ""});
  const [server_msg, setmsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/Mlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empdata),
      });
      if (response.ok) {
        console.log('Data saved successfullyyyyyyyyyy',empdata);
    console.log(response);

        navigate("/profile")
      } else {
        alert('EWrong password:');
        navigate("/");
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
  return (
    <div>
      <Header1 />{" "}
      <div className='h-screen flex flex-col items-center justify-start bg-gray-100'>
        {/* <button
          onClick={() => {
            alert(
              `Your Data is:\nUsername: ${username}\nPassword: ${password}\n`
            );
          }}
          className='border-black border-2 rounded-lg px-8 py-2 my-10'
        >
          Show Data
        </button> */}
        <div className='bg-white p-8 rounded-lg shadow-md w-80'>
          <h2 className='text-2xl font-semibold mb-04'>Login</h2>
          <form>
            <div className='mb-4'>
              <label className='block font-medium'>
                Username
              </label>
              <input 
                   type="text"
                  className="inputField"
                  placeholder="Enter your username"
                  onChange={(e) => setempdata({ ...empdata, uname: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label className='block font-medium'>
                Password
              </label>
              <input
                   type="text"
                  className="inputFiled"
                  placeholder="Enter your Password"

                  onChange={(e) => setempdata({ ...empdata, pass: e.target.value })}
              />
            </div>
            <input
            id="submitB"
                type="button"
                value="Login"
                className="signupButton"
                onClick={handleSubmit}
              />
        
              <div>
                <h3>{server_msg}</h3>
              </div>
          </form>
          <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Create an account
        </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
