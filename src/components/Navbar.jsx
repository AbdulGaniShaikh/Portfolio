import React, { useRef, useState } from 'react';

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
  const navbar = useRef(null);
  const hamburger = useRef(null);
  const [navVisible, setNavVisible] = useState(false);
  const onClick = () => {
    if (!navVisible) {
      navbar.current.classList.remove('left-full');
      navbar.current.classList.add('left-0');
      hamburger.current.classList.add('change');
    } else {
      navbar.current.classList.add('left-full');
      navbar.current.classList.remove('left-0');
      hamburger.current.classList.remove('change');
    }
    setNavVisible(!navVisible);
  };
  return (
    <nav className="z-20 fixed top-0 left-0 w-full py-5 lg:px-52 backdrop-blur-sm">
      <div className="flex px-5 justify-between items-center ">
        <div className="flex items-center">
          <a href="#home" className="text-lg font-medium">
            <span className="primary-text">0.</span>
            <span> Abdul Gani</span>
          </a>
        </div>

        <div
          ref={navbar}
          className="z-10 max-sm:fixed max-sm:bg-navBg max-sm:text-2xl top-0 bottom-0 left-full right-0 max-sm:h-screen max-sm:w-full justify-self-end ease-in-out duration-300"
        >
          <div className="flex h-full w-full flex-row max-sm:flex-col gap-10 items-center justify-center">
            {navData.map((data, i) => (
              <NavbarItem onClick={onClick} i={i + 1} {...data} />
            ))}
          </div>
        </div>

        <div ref={hamburger} onClick={onClick} className="z-20 inline-block sm:hidden cursor-pointer">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </nav>
  );
};

const NavbarItem = ({ i, text, to, onClick }) => {
  return (
    <a href={to} onClick={onClick} className="nav-item">
      <span className="primary-text">{i}.</span>
      <span> {text}</span>
    </a>
  );
};

export default Navbar;
