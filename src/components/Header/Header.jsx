import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { MenuHamburguesa } from "../menu/MenuHamburguesa";
import { getProducts } from "../../productMock";
import { VehicleModal } from "../Modals/VehicleModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = getProducts();
    setProducts(allProducts);
  }, []);

  return (
    <div>
      <div className="w-full bg-[#1c1c1c] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                className="h-[62px] object-contain"
                src="https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png"
                alt="Jeep"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-16">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/service/service">Service</NavLink>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white font-bold hover:text-yellow-400 transition-colors flex items-center gap-2"
              >
                Vehicles <SlArrowDown />
              </button>
              
              <NavLink to="/contact/contact">Contact</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="" className="text-white hover:text-yellow-400 transition-colors">
                <MdOutlineEmail size={20} />
              </a>
              <a href="" className="text-white hover:text-yellow-400 transition-colors">
                <FaPhoneAlt size={20} />
              </a>
            </div>

            <div className="md:hidden">
              <MenuHamburguesa />
            </div>
          </div>
        </div>
      </div>

      <VehicleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={products}
      />
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white font-bold hover:text-yellow-400 transition-colors"
  >
    {children}
  </Link>
);