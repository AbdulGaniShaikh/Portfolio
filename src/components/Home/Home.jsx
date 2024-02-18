import React from 'react';
import me from 'assets/img/me.png';
import resume from 'assets/pdf/resume.pdf';
const Home = () => {
  return (
    <div id="home" className="grid grid-flow-row lg:grid-cols-2 lg:grid-flow-col h-screen ">
      <div className="flex flex-col gap-y-2 py-10 text-lg justify-center items-center lg:items-start">
        <p>Hi, My Name is</p>
        <p className="primary-text text-5xl">Abdul Gani Shaikh</p>
        <p>Adaptable Java Fullstack Developer</p>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="border-2 text-primaryColor border-primaryColor hover:text-white hover:border-gray-100 hover:animate-border hover:bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] rounded-lg "
        >
          <div className="px-3 py-1">Resume</div>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img src={me} alt="me" className="bg-primaryColor rounded-full object-cover aspect-square size-72" />
      </div>
    </div>
  );
};

export default Home;
