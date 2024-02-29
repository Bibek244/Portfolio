function Project() {
  return (
    <div id="projects" className=" h-fit w-full">
      <h1 className="text-xl text-center font-mono">Projects</h1>
      <div className="flex flex-row justify-center">
        <div className="h-44 w-40 py-2 px-3 m-5 rounded bg-gray-800 shadow">
          <h2 className="text-gray-400 font-bold text-sm py-5 w-full text-left">
            Front End
          </h2>
          <div className="flex flex-wrap gap-2">
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              HTML
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              CSS
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              JavaScript
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              Tailwind
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              Reactjs
            </p>
          </div>
    </div>
           <div className="h-44 w-40 py-2 px-3 m-5 rounded bg-gray-800 shadow">
          <h2 className="text-gray-400 font-bold text-sm py-5 w-full text-left">
            Back End
          </h2>
          <div className="flex flex-wrap gap-2">
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              Node JS
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              Express JS
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              PHP
            </p>
           
          </div>
        </div>

        <div className="h-44 w-40 py-2 px-3 m-5 rounded bg-gray-800 shadow">
          <h2 className="text-gray-400 font-bold text-sm py-5 w-full text-left">
            Database
          </h2>
          <div className="flex flex-wrap gap-2">
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              MySQL
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              MongoDB
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              SQlite
            </p>
            <p className="bg-gray-900 rounded w-fit p-1 text-xs font-extralight text-gray-400">
              Oracle
            </p>
           
          </div>
        </div>
          
        
      </div>
    </div>
  );
}

export default Project;
