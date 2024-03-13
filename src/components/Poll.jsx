import React, { useState } from "react";
import stars from "../assets/img-content-stars.png";

function Poll() {
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== "") {
      // Handle the submission here (e.g., send data to a server)
      setSubmitted(true);
      // Reset the selected option after submission
      setSelectedOption("");
    }
  };

  return (
    <div className=" lg:w-2/5 my-5"id="rltn">
      <div className="">
        <h2 className="flex items-center text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
          {"    "}
          <b>&nbsp;Poll</b> <b className="text-blue-400 mx-3">Questions</b>
        </h2>
        <div className="ringtone bg-gray-200 p-5  rounded-xl">
          <div className="ringtone-card flex flex-col border-gray-600 border-2 p-4 my-3  bg-slate-50 rounded-lg">
            <h4 style={{ color: "#60A5FA" }}>Whats your favorite gadget?</h4>
          </div>
          <div className="flex items-center justify-start my-8">
            <input
              className="h-[1rem] w-[1rem] border-0 mx-2"
              type="radio"
              name="option"
              id="mobile"
              value="Mobile"
              checked={selectedOption === "Mobile"}
              onChange={() => handleOptionChange("Mobile")}
            />{" "}
            <span>Mobile</span>
          </div>
          <div className="flex items-center justify-start my-8">
            <input
              className="h-[1rem] w-[1rem] border-0 mx-2"
              type="radio"
              name="option"
              id="laptop"
              value="Laptop"
              checked={selectedOption === "Laptop"}
              onChange={() => handleOptionChange("Laptop")}
            />{" "}
            <span>Laptop</span>
          </div>
          <div className="flex items-center justify-start my-8">
            <input
              className="h-[1rem] w-[1rem] border-0 mx-2"
              type="radio"
              name="option"
              id="camera"
              value="Camera"
              checked={selectedOption === "Camera"}
              onChange={() => handleOptionChange("Camera")}
            />{" "}
            <span>Camera</span>
          </div>
          <div className="flex items-center justify-start my-8">
            <input
              className="h-[1rem] w-[1rem] border-0 mx-2"
              type="radio"
              name="option"
              id="mp3player"
              value="MP3 Player"
              checked={selectedOption === "MP3 Player"}
              onChange={() => handleOptionChange("MP3 Player")}
            />{" "}
            <span>MP3 Player</span>
          </div>
          {submitted ? (
            <p>Submitted Successfully!</p>
          ) : (
            <button
              className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
          {/* <a
            style={{ margin: "7px" }}
            href="/previous-poll"
            className="text-blue-400 underline"
          >
            Previous Poll
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Poll;


