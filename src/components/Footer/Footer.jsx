import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black opacity-75 w-full mt-auto">
      <h3 className="text-white text-center font-bold py-4">FOLLOW US</h3>

      <div className="flex justify-center gap-6 text-white text-2xl pb-4">
        <a href="https://www.instagram.com/gonzaperez.1/"><FaInstagram /></a>
        <a href=""><FaTwitter /></a>
        <a href=""><FaFacebook /></a>
        <a href=""><FaYoutube /></a>
      </div>

      <div className="text-white text-center pb-6">
        <h3 className="font-semibold text-lg">ATENCIÓN AL CLIENTE</h3>
        <p className="text-sm">
          Atención Cliente CJDR  
          <br />
          0 800 333 7070
          <br />
          Lunes a viernes de 8 a 20hs.
        </p>
      </div>
    </footer>
  );
};
