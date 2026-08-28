import Logo from '../img/Logo.png'
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Nav = ({cartCount, user, setShowLogin, searchTerm, setSearchTerm}) => {
  return (
    <nav className=" fixed min-w-full top-0 bg-white h-20 grid items-center shadow-xl px-4 sm:px-8 lg:px-16 xl:px-30">
      
      <div className="flex items-center justify-between gap-4">
        <div className="shrink-0">
          <Link to={'/'}><img className="w-16 sm:w-20" src={Logo} alt="Logo"/></Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end">

          <div className="flex items-center border border-[#808080] rounded px-2 w-full max-w-90">
            <input type="text" placeholder="Enter item or restaurant you are looking for" className="text-[12px] w-full h-8 outline-none"
              value={searchTerm} onChange={(e)=> {setSearchTerm(e.target.value)}}
            />
            <FaSearch className="rotate-90 text-[#808080] shrink-0" />
          </div>
          <Link to='/cart'>
            <FiShoppingBag className="text-xl sm:text-2xl shrink-0" />

            {cartCount > 0 && (
              <span className="absolute top-4 right-56 bg-red-500 text-white text-[10px] w-4
              h-4 rounded-full flex items-center justify-center"> {cartCount}</span>
            )}
          </Link>

          {user ? (

          <p className="font-medium text-sm">
            {user.email}
          </p>

        ) : (
          <button className="bg-black text-white w-20 h-8 rounded text-sm shrink-0"  onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        )}

        </div>

      </div>

    </nav>
  )
}

export default Nav