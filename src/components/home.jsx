import { useState } from "react";
import { Menu, X } from "lucide-react";

const home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="p-2 m-2 bg-gray-800 text-white rounded-md fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <h2 className="text-xl font-bold mb-5">Sidebar</h2>
        <ul>
          <li className="mb-3"><a href="#" className="hover:text-gray-400">Home</a></li>
          <li className="mb-3"><a href="#" className="hover:text-gray-400">Sobre</a></li>
          <li className="mb-3"><a href="#" className="hover:text-gray-400">Serviços</a></li>
          <li className="mb-3"><a href="#" className="hover:text-gray-400">Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default home;