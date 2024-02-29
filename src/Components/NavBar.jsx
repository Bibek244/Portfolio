function NavBar() {
  return (
    <>
      <div className="sticky top-0">
        <div>
          <ul className="flex flex-row justify-between w-full p-5 bg-gray-900 text-white font-mono ">
            <h1 className="cursor-none">Bibek Gosai</h1>
            
            <li className=" hover:text-gray-500 cursor-pointer">
              <a href="#hireMe" className="bg-green-500 px-3 py-2 rounded-full text-xs ">Contact Me</a></li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
