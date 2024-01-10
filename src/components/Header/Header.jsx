import { MdOutlineEmail } from "react-icons/md";
import styles from "./Header.module.css";
import { FaPhoneAlt } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="container min-w-full ">
      <nav className={styles.nav}>
        <div className="flex justify-items-center container content-center  min-w-full  ">
          <div className="ml-24 absolute">
            <img
              className="object-cover h-32 w-68"
              src="https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png"
              alt="Jeep"
            />
          </div>
          <div className="relative flex justify-center container content-center my-12  mx-auto">
            <ul className="flex flex-row hidden lg:flex  font-bold  gap-20 mx-2 ">
              <li>
                <a href="" className="text-gray-200  hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200 hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200 hover:text-yellow-400">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200 hover:text-yellow-400">
                  Service
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200 hover:text-yellow-400">
                  Test Drive
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200 hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
            <div className="absolute text-gray-200 flex flex-row-reverse space-x-4 space-x-reverse mx-6 py-2 right-2">
              <a href="">
                <MdOutlineEmail />
              </a>
              <a href="">
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
