import { MdOutlineEmail } from "react-icons/md";
import styles from "./Header.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {MenuHamburguesa} from '../menu/MenuHamburguesa'
export const Header = () => {

  return (
    <div className="container min-w-full ">
      <nav className={styles.nav}>
        <div className="flex flex-nowrap md:flex justify-items-center  min-w-full  ">
          <div className="mx-6">
            <Link to={"/"}>
             <img
              className="object-contain p-2 ml-6 h-32 w-68"
              src="https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png"
              alt="Jeep"
            />
            </Link>
           
          </div>
           
          <section  className="relative flex justify-center container content-center my-12  mx-auto">
            <ul className="flex flex-row hidden lg:flex  font-bold  gap-20 mx-2 ">
              <Link to={'/'} className="text-gray-200  hover:text-yellow-400"><li>
                  Home
              </li></Link>
              <Link to='/category/Drive' className="text-gray-200 hover:text-yellow-400">
              <li className="">Drivers</li></Link>
             <Link to={'/service/service'} className="text-gray-200 hover:text-yellow-400">
             <li>
                  Service
              </li>
             </Link>
              <Link to={''} className="text-gray-200 hover:text-yellow-400">
              <li>
                  Test Drive
              </li>
              </Link>
              <Link to={''} className="text-gray-200 hover:text-yellow-400">
               <li>
                  Contact
              </li>
              </Link>
            </ul>
            <div className="text-gray-200 flex absolute top-1 right-8 hidden gap-5 ">
              <a href="">
                <MdOutlineEmail />
              </a>
              <a href="">
                <FaPhoneAlt />
              </a>
            </div>
            <div>
            <MenuHamburguesa/>
           </div>
          </section>
        </div>
      </nav>
    </div>
  );
};
