import React, { useRef } from "react";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import "./seven.css"; 

function ContactUs() {
  const [empdata, setempdata] = useState({ id: "", name: "", email: "",subject:"" });
  const [server_msg, setmsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/contact_us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empdata),
      });
    

      if (response.ok) {
        console.log('Data saved successfullyyyyyyyyyy',empdata);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
      <label>Id</label>
      <input
        type="number"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, id: e.target.value })}
      />

      <label>Name</label>
      <input
        type="text"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, name: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, email: e.target.value })}
      />
      <label>Message</label>
      <input
        type="text"
        className="inputField"
        onChange={(e) => setempdata({ ...empdata, subject: e.target.value })}
      />
      <input
        type="button"
        value="Signup"
        className="signupButton"
        onClick={handleSubmit}
      />

      <div>
        <h3>{server_msg}</h3>
      </div>
    </div>
    </div>
    
  );
}


export default ContactUs;

