import { useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenuContent } from "./MobileMenuContent";

export const MenuHamburguesa = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="md:hidden ">
      <MobileMenuButton
        isOpen={isNavOpen} 
        onClick={() => setIsNavOpen(!isNavOpen)} 
      />
      <MobileMenuContent 
        isOpen={isNavOpen} 
        onClose={() => setIsNavOpen(false)} 
      />
    </nav>
  );
};