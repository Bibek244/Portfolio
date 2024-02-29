import React from "react";

export const SideBar = () => {
  return (
    <div className="fixed flex flex-col ml-2 mt-5 p-5 w-1/6 h-96 z-50 overflow-hidden rounded bg-gray-800">
      <div className="text-gray-400 font-extralight">
        <ul>
          <li className=" hover:text-gray-500 cursor-pointer text-center  mb-3">
            <a href="#aboutMe">
              About ME
            </a>
          </li>
          <li className=" hover:text-gray-500 cursor-pointer text-center  mb-3">
            <a href="#skills" >
              Skills
            </a>
          </li>
          <li className=" hover:text-gray-500 cursor-pointer text-center  mb-3 ">
            <a href="#projects" >
              Projects
            </a>
          </li>
          <li className=" hover:text-gray-500 cursor-pointer text-center  mb-3">
            <a href="#hireMe" >
              Hire me
            </a>
          </li>
        </ul>
      </div>
      <div className="text-gray-400">
        <h4>Socials</h4>
        <ul>
          <li className=" hover:text-gray-500 font-extralight  mb-3">
            <a href="#">Github</a>
          </li> 

          <li className="  hover:text-gray-500 font-extralight  mb-3">
            <a href="#">LinkedIn</a>
          </li>
          
          <li className="  hover:text-gray-500 font-extralight  mb-3">
            <a href="#">Instagram</a>
          </li>

          <li className="  hover:text-gray-500 font-extralight  mb-3">
            <a href="#">Facebook</a>
          </li>

        </ul>
      </div>
    </div>
  );
};
