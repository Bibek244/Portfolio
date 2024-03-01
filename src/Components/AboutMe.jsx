import { useState } from "react";
import { FaGithub, FaDownload } from "react-icons/fa";

const AboutMe = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateButton = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Adjust the timeout value as needed
  };
  return (
    <div id="aboutMe" className=" h-fit w-full">
      <div className=" h-40 w-full bg-slate-500 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <img
            src="/Bibek.jpg"
            className=" w-32 text-white h-32 ml-5 mt-5 mb-5 text-3xl border-4 rounded-full"
            alt="Photo"
          ></img>
          <div className="p-5 m-5">
            <h1 className=" text-2xl text-white font-bold font-mono">
              Bibek Gosai
            </h1>
            <p className=" text-white text-sm font-sans">@Bibek.gosai</p>
          </div>
        </div>
        <div className="flex mr-5">
          <a
            href="/Resume.pdf"
            className={` flex p-3 mr-2 items-center bg-green-800 text-white rounded text-sm `}
            download="Bibek-Resume.pdf"
          >
            {" "}
            <FaDownload /> {"\u00A0"}Download Resume
          </a>
          <a
            onClick={animateButton}
            href="https://github.com/Bibek244"
            className={`flex items-center p-3 ${
              isAnimating ? "animate-ping" : ""
            } bg-gray-800 text-white rounded text-sm `}
          >
            <FaGithub />
            {"\u00A0"}Follow me on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
