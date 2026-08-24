import Logo from '../img/Logo.png'
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="mt-5 sm:mt-8 px-4 sm:px-8 lg:px-16 xl:px-30">
      
      <div className="flex items-center justify-between gap-4">
        <div className="shrink-0">
          <img className="w-16 sm:w-20" src={Logo} alt="Logo"/>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end">

          <div className="flex items-center border border-[#808080] rounded px-2 w-full max-w-90">
            <input type="text" placeholder="Enter item or restaurant you are looking for" className="text-[12px] w-full h-8 outline-none"/>
            <FaSearch className="rotate-90 text-[#808080] shrink-0" />
          </div>

          <FiShoppingBag className="text-xl sm:text-2xl shrink-0" />

          <button className="bg-black text-white w-20 h-8 rounded text-sm shrink-0">
            Sign In
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Nav