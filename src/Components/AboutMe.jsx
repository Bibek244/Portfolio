import { useState } from "react";

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
      <h1 className="text-xl text-center font-mono">About Me</h1>
      <div className="h-40 w-full bg-slate-500 flex flex-row items-center justify-between">
        <div className="flex flex-row">
        <img className=' w-32 text-white h-32 ml-5 mt-5 mb-5 text-3xl border-4 p-5 rounded-full'src="#" alt="Photo"></img>
        <div className="p-5 m-5">
        <h1 className=" text-2xl text-white font-bold font-mono">Bibek Gosai</h1>
        <p className=" text-white text-sm font-sans">@Bibek.gosai</p>
        </div>
        </div>
        <a onClick={animateButton} href="https://github.com/Bibek244" className={`p-3 m-5 ${isAnimating ? 'animate-ping' : ''} bg-gray-800 text-white rounded text-sm `}>Follow me on Github</a>
      </div>
    </div>
  );
};

export default AboutMe;
