import { FaRegUser } from "react-icons/fa";

function NavBar() {
  return (
    <div className="sticky top-0 "  style={{ marginLeft: "18%" }}>
      <ul className="flex flex-row h-24  justify-end w-full p-5 bg-gray-900 text-white font-mono ">
        <li className=" hover:text-gray-500 cursor-pointer">
          <a
            href="#hireMe"
            className="flex bg-green-500 px-3 py-2 rounded-full text-xs "
          >
            Contact Me {"\u00A0"}
            <FaRegUser />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
