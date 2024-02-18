import React from 'react';

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-52 px-5 py-28 gap-y-5 bg-black justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-gray-50">Abdul Gani Shaikh</h1>
        <p className="text-md text-gray-300">
          A focused Java Fullstack developer building Websites and Mobile Applications that leads to the success of the
          overall product
        </p>
      </div>

      <div className="flex text-gray-50 flex-col justify-center items-center gap-5">
        <h1 className="text-xl font-semibold">Connect with me</h1>
        <div className="flex justify-center gap-x-5">
          <a href="https://www.instagram.com/shkhabdulgani" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-instagram fa-2x px-4"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdul-gani-shaikh-b657a5213/" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-linkedin fa-2x px-4"></i>
          </a>
          <a href="https://github.com/AbdulGaniShaikh" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-github fa-2x px-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
