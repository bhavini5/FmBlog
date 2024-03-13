// import React from "react";
// import axios from "axios";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Advertisment() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const unsplashAccessKey = "dgcDMEyLedJQUUcWx8BfdSNj8Cq0fmhGuQYiWDVhcAM";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=2&client_id=${unsplashAccessKey}`
        );

        const fetchedImageUrls = response.data.map((image) => image.urls.regular);
        setImageUrls(fetchedImageUrls);
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 4000);
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching data from Unsplash:", error);
      }
    };

    fetchData();
  }, [unsplashAccessKey]);

  return (
    <div className='flex my-5 justify-evenly lg:justify-between'>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className='bg-zinc-300 w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] text-white flex flex-col justify-evenly items-center'
        >
          <img src={imageUrl} alt={`Advertisement ${index + 1}`} className=' h-3/4 object-cover' />
          <h2 className='text-lg lg:text-4xl font-bold'>
            <p>Advertisement</p>
          </h2>
          {/* <h1 className='text-2xl lg:text-6xl font-bold'>Space</h1>
          <h2 className='text-3xl lg:text-7xl font-bold'>250*250</h2> */}
        </div>
      ))}
    </div>
  );
}

export default Advertisment;