import { useState, useEffect } from "react";
import Cookies from "js-cookie";


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const role = Cookies.get("role");
  const username = Cookies.get("role");
  const [greeting, setGreeting] = useState<string>("");


  const getTimezone = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 15) {
      setGreeting("Selamat Siang");
    } else if (currentHour >= 15 && currentHour < 18) {
      setGreeting("Selamat Sore");
    } else {
      setGreeting("Selamat Malam");
    }
  };

  useEffect(() => {
    getTimezone();
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="text-white font-semibold text-xl">
        {greeting}, {username ? (role === "super admin" ? "super admin" : "User") : "user"}
        </div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
        >
          <p>Hello, John doe</p>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Item 3
            </a>
          </div>
        </div>
      )}

    </div>

  );
}

export default Dropdown;
