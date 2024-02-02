import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return <footer className="h-full bg-black opacity-75"><h3 className="text-white justify-center flex">FOLLOW US</h3>
        <div className="text-white text-center justify-center flex flex-wrap gap-4">
          <a href="https://www.instagram.com/gonzaperez.1/"><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaYoutube /></a>
        </div>
        <div className="text-white flex flex-wrap justify-center ">
        <h3 className="text-center">ATENCION ATENCION AL CLIENTE</h3>
        <p className="text-centers">Atención Cliente CJDR  
           0 800 333 7070
           lunes a viernes de 8 a 20hs.</p>
        </div>
  </footer>
};
