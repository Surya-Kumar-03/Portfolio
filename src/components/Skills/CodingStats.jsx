import React, { useState, useEffect } from "react";

const CodingStats = () => {
  const totalSolved = 430; //Hardcoded Question Count Here
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (displayedValue < totalSolved) {
      intervalId = setInterval(() => {
        setDisplayedValue((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [displayedValue, totalSolved]);

  return (
    <div
      className="flex flex-col w-full text-4xl font-light items-center justify-center
    bg-gray-100 p-2 rounded-xl lg:bg-none -mt-4 sm:mt-9 animateFont-after"
    >
      <div className="flex flex-col lg:flex-row lg:gap-3 w-full justify-center items-center">
        <h1 className="flex flex-row w-24 h-[70%] items-center justify-center font-medium pt-1 text-pink-600">
          {displayedValue}+
        </h1>
        <span className="cardsSubtitleFont text-5xl text-pink-600 italic m-3 mb-1 mt-2">
          problems
        </span>{" "}
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        solved on{" "}
        <a
          href="https://leetcode.com/bsuryakumar03/"
          target="_blank"
          className="text-yellow-500 hover:text-gray-400  duration-200 ml-2"
          rel="noreferrer"
        >
          Leetcode
        </a>
        <p className="ml-2 mr-2">and</p>
        <a
          href="https://auth.geeksforgeeks.org/user/bsuryakumar03/practice/"
          target="_blank"
          className="text-green-500 hover:text-gray-400  duration-200 ml-2"
          rel="noreferrer"
        >
          Geeks for Geeks
        </a>
      </div>
    </div>
  );
};

export default CodingStats;
