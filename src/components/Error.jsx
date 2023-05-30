import React from "react";

const Error = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex flex-row items-center justify-center p-5 z-10">
      <div className="bg-white w-full md:w-2/3 lg:w-1/3 rounded-xl p-4 text-center">
        <h1 className="text-2xl uppercase mb-10">Alert</h1>
        <p>
          To fetch the songs data from deezerAPI please open link and click
          "Request temporary access to the demo server" and then refresh:
        </p>
        <a
          className="text-blue-500"
          href="https://cors-anywhere.herokuapp.com/https://api.deezer.com"
          target="_blank"
        >
          Fetch Songs
        </a>
        <div className="mb-5"></div>
        <p>For more information about this you can read here:</p>
        <a
          className="text-blue-500"
          href="https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers"
        >
          Stack Overflow
        </a>
      </div>
    </div>
  );
};

export default Error;
