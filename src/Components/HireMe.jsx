import { useState } from "react";
import { IoIosSend, IoMdCall } from "react-icons/io";

const HireMe = () => {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [comment, setComment]=useState('')
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(name + email + comment)
  //   Email.send({
  //     Host : "smtp.elasticemail.com",
  //     Username : "username",
  //     Password : "password",
  //     To : 'them@website.com',
  //     From : "you@isp.com",
  //     Subject : "This is the subject",
  //     Body : "And this is the body"
  // }).then(
  //   message => alert(message)
  // );

  }
  return (
    <div
      id="hireMe"
      className="h-screen w-full flex flex-wrap items-center justify-between "
    >
      <div className="ml-20 text-right ">
        <p className="text-red-500 text-6xl mb-5">Contact Me</p>
        <p className="text-gray-400 mb-2 flex items-center justify-end"> <IoIosSend className="text-green-500 text-xl" /> {"\u00A0"}{"\u00A0"} Bibekgosai555@gmail.com</p>
        <p className="text-gray-400 mb-2 flex items-center justify-end"> <IoMdCall className="text-green-500 text-xl"/> {"\u00A0"}{"\u00A0"} +977 98--------</p>
      </div>
      <div className="flex flex-row justify-end w-3/5 h-fit mb-2 mr-10 ">
        <form className=" bg-gray-800 shadow w-full text-center rounded-full overflow-hidden p-5" onSubmit={(e) =>handelSubmit(e)}>
          <div className=" mb-3 text-end">
            <label className="p-2 text-gray-400 font-mono" htmlFor="name">Name</label>
            <input
              type="text"
              className="bg-gray-900 text-gray-400 font-mono rounded p-2 w-2/3"
              id="name"
              onChange={(e) =>setName(e.target.value)}
            />
          </div>
          <div className=" mb-3 text-end">
            <label className="p-2 text-gray-400 font-mono" htmlFor="email">Email</label>
            <input
              type="email"
              className="bg-gray-900 text-white font-mono rounded p-2 w-2/3"
              id="email"
              onChange={(e) =>setEmail(e.target.value)}
            />
          </div>
          <div className=" mb-3 text-end">
            <label className="p-2 align-text-top text-gray-400 font-mono" htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              className=" bg-gray-900 text-white font-mono rounded p-2 w-2/3"
              onChange={(e) =>setComment(e.target.value)}
              rows={5}
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white text-xs font-mono px-2 py-1 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
