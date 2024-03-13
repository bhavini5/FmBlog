import React from "react";
import twitter from "../assets/img-twitter-logo.png";
import follow from "../assets/follow.png"; 

function Twitter() {
  return (
    <div className='flex flex-col my-10 w-29 bg-blue-400 rounded-lg p-10'id="twitter">
      <img
        src={twitter}
        alt=''
        className='w-1/2 relative top-[-4rem] left-2/4]'
      />
      <div className='bg-white rounded-lg my-3'>
        <p className='p-5'>
          Mobile Boilerplate: a best prafctive baseline for your
          mobile app -<a href="https://bitly.com/" style={{ color: '#0087c2' }}>
            https://dropdo.com/
          </a>{" "}
        </p>
      </div>
      <div className='bg-white rounded-lg'>
        <p className='p-5'>
          Dummy text dropdo: a quick and simple file viewer online-<a href="https://dropdo.com/" style={{ color: '#0087c2' }}>
            https://dropdo.com/
          </a>
        </p>
      </div>
    </div>
  );
}

export default Twitter;
