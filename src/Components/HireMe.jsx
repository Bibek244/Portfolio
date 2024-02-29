import { useState } from "react";

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
      className=" h-screen w-full flex flex-col items-center"
    >
      {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
      <h1 className="text-xl text-center font-mono">Hire Me</h1>
      <div className="flex flex-row justify-end items-end text-start w-2/3 h-fit mb-2 rounded ">
        <form className=" bg-gray-800 shadow w-1/2 text-center  p-5" onSubmit={(e) =>handelSubmit(e)}>
          <div className=" mb-3 text-end">
            <label className="p-2 text-white font-mono" htmlFor="name">Name</label>
            <input
              type="text"
              className="bg-gray-900 text-white font-mono rounded p-2 w-2/3"
              id="name"
              onChange={(e) =>setName(e.target.value)}
            />
          </div>
          <div className=" mb-3 text-end">
            <label className="p-2 text-white font-mono" htmlFor="email">Email</label>
            <input
              type="email"
              className="bg-gray-900 text-white font-mono rounded p-2 w-2/3"
              id="email"
              onChange={(e) =>setEmail(e.target.value)}
            />
          </div>
          <div className=" mb-3 text-end">
            <label className="p-2 align-text-top text-white font-mono" htmlFor="comment">Comment</label>
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
