import React from 'react';

const navData = [
  {
    to: '#home',
    text: 'Home'
  },
  {
    to: '#about',
    text: 'About'
  },
  {
    to: '#projects',
    text: 'Projects'
  },
  {
    to: '#career',
    text: 'Career'
  }
];

const Navbar = () => {
  return (
    <nav className="z-20 fixed top-0 left-0 w-full py-5 lg:px-52 backdrop-blur-sm">
      <div className="px-5 grid grid-cols-2 justify-between items-center ">
        <div className="flex items-center">
          <a href="#home" className="text-lg font-medium">
            <span className="primary-text">0.</span>
            <span> Abdul Gani</span>
          </a>
        </div>
        <div className="flex flex-row justify-self-end gap-x-10 items-center">
          {navData.map((data, i) => (
            <NavbarItem i={i + 1} {...data} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavbarItem = ({ i, text, to }) => {
  return (
    <a href={to} className="nav-item">
      <span className="primary-text">{i}.</span>
      <span> {text}</span>
    </a>
  );
};

export default Navbar;
