import React from "react";

function NavBar() {
  return (
    <>
      <div className="sticky top-0">
        <div>
          <ul className="flex flex-row justify-between border w-full p-5 bg-fuchsia-800 text-white font-mono ">
            <h1 className="cursor-none">Bibek Gosai</h1>
            <div className="flex flex-row gap-5">
            <li className=" hover:text-gray-500 cursor-pointer" onClick={() => {}}><a href="#aboutMe">About ME</a></li>
            <li className=" hover:text-gray-500 cursor-pointer" onClick={() => {}}><a href="#skills">Skills</a></li>
            <li className=" hover:text-gray-500 cursor-pointer" onClick={() => {}}><a href="#projects">Projects</a></li>
            <li className=" hover:text-gray-500 cursor-pointer" onClick={() => {}}><a href="#hireMe">Hire me</a></li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
