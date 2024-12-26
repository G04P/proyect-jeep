import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/service/service", label: "Service" },
  { to: "/contact/contact", label: "Contact" },
];

export const MobileMenuContent = ({ isOpen, onClose }) => {
    
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden
        ${isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg  transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="pt-16 px-4 ">
          <ul className="space-y-4">
                 <Link to="/">
              <img
                className="h-[62px] object-contain"
                src="https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png"
                alt="Jeep"
              />
            </Link>
            {MENU_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-2 text-gray-600 hover:text-yellow-500 font-medium transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};