 import { useState } from "react";
 import { Link } from "react-router-dom";
 import styles from './MenuHamburguesa.module.css'

export const MenuHamburguesa = () => { 
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex justify-between border-b cursor-pointer	 border-gray-400 top-0 right-0 absolute mx-4">
      <nav>
        <section className="MOBILE-MENU flex  lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 	 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600 cursor-pointer	"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-w-80 min-h-[250px]">
            <Link to={'/'} className=" hover:text-yellow-500 text-gray-500 underline font-semibold"><li>
                  Home
              </li></Link>
              <Link to='/category/Drive' className="hover:text-yellow-500 text-gray-500 underline font-semibold ">
              <li className="">Drivers</li></Link>
             <Link to={'/Service/Service'} className="hover:text-yellow-500 text-gray-500 underline font-semibold">
             <li>
                  Service
              </li>
             </Link>
              <Link to={''} className="hover:text-yellow-500 text-gray-500 underline font-semibold">
              <li>
                  Test Drive
              </li>
              </Link>
              <Link to={''} className="hover:text-yellow-500 text-gray-500 underline font-semibold">
               <li>
                  Contact
              </li>
              </Link>
            </ul>
          </div>
        </section>

        {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
 