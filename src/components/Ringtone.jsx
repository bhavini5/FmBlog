import React, { useState } from "react";
import stars from "../assets/img-content-stars.png";

function Ringtone() {
  const [downloaded, setDownloaded] = useState([false, false, false]);
  const [showAll, setShowAll] = useState(false);

  const handleDownload = (index) => {
    // Replace this with the actual download logic
    // For demonstration purposes, we will simulate a successful download
    // You should replace this with your actual download code

    // Simulate a successful download and display the message
    const updatedDownloaded = [...downloaded];
    updatedDownloaded[index] = true;
    setDownloaded(updatedDownloaded);

    // Reset the message after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      updatedDownloaded[index] = false;
      setDownloaded(updatedDownloaded);
    }, 3000); // Hide after 3 seconds
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className=" lg:w-2/5 my-5"id="dwnld">
      <div className=" ">
        <h2 className="flex items-center text-2xl font-bold ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
          {"    "}
          <b className="text-blue-400 mx-3">{"   "} Get </b> ringtones
        </h2>
        <div className="ringtone bg-gray-200 p-5  rounded-xl">
          {Array.from({ length: showAll ? 5 : 3 }, (_, index) => (
            <div
              key={index}
              className="ringtone-card flex flex-col border-gray-600 p-4 my-3  bg-slate-50 rounded-lg border-2"
            >
              <h4>Ringtone name in HipHop</h4>
              <img src={stars} alt="" className="w-[6rem]" />
              <div className="ringtone-footer flex flex-row justify-between">
                <p style={{ fontSize: "smaller" }}>16,472 downloads</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  {downloaded[index] ? (
                    <p>Downloaded Successfully!</p>
                  ) : (
                    <button
                      onClick={() => handleDownload(index)}
                      className="ringtone-button bg-blue-400 px-2 rounded-lg"
                    >
                      Download
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {showAll ? (
            <button
              onClick={toggleShowAll}
              className="ringtone-button bg-blue-400 px-2 rounded-lg mt-4"
            >
              View Less
            </button>
          ) : (
            <button
              onClick={toggleShowAll}
              className="ringtone-button bg-blue-400 px-2 rounded-lg mt-4"
            >
              View All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ringtone;






