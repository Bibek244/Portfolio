import React from "react";
import { FaInstagram , FaGithub ,FaLinkedin ,FaFacebook} from "react-icons/fa";


export const SideBar = () => {
  return (
    <>
    <div className="fixed flex flex-row justify-between ml-5 mt-5 items-center w-fit h-5" >
    <div className=" ml-5 w-4 h-4 fixed rounded-full bg-green-900"></div>
    <div className="  w-4 h-4 fixed rounded-full bg-red-900"></div>
    </div>
    <div className="fixed flex flex-col ml-2 mt-14  p-5 w-1/6 h-custom z-50 overflow-hidden rounded bg-gray-800">
      <div className="text-gray-400 font-extralight">
        <ul>
          <li className="hover:text-gray-500 cursor-pointer text-center mb-3">
            <a href="#aboutMe">About ME</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-center mb-3">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-center mb-3">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-center mb-3">
            <a href="#hireMe">Hire me</a>
          </li>
        </ul>
      </div>
        <h4 className="text-gray-400">Socials</h4>
      <div className="ml-2 text-gray-400">
        <a
          href="#"
          className="hover:text-gray-500 font-extralight flex items-center mb-3 "
          >
          <FaGithub />{"\u00A0"}
          Github
        </a>

        <a href="#"  className="hover:text-gray-500 font-extralight flex items-center w-full mb-3">
          <FaLinkedin className="text-blue-400" /> {"\u00A0"} LinkedIn
        </a>

        <a
          href="#"
          className="hover:text-gray-500 font-extralight flex items-center mb-3"
          >
          <FaInstagram className="text-blue-400" />
          {"\u00A0"}
          Instagram
        </a>
        <a href="#" className="hover:text-gray-500 font-extralight flex items-center mb-3">
          <FaFacebook />{"\u00A0"}
          Facebook
        </a>
      </div>
    </div>
          </>
  );
};
