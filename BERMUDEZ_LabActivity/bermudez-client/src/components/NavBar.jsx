import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';
import myLogo from '../assets/styles/pochacco-logo.png';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userStatus);
  }, [location]); 

  const isActive = (path) => {
    return location.pathname === path 
      ? "text-[#6da158] font-bold" 
      : "text-zinc-500 hover:text-zinc-900";
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-zinc-200 bg-white/80 backdrop-blur-md px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link to="/" className="transition-transform hover:scale-105">
          <img 
            src={myLogo} 
            alt="Website Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/articles" className={`text-sm font-semibold tracking-wide transition-colors ${isActive('/articles')}`}>
            Articles
          </Link>
        </div>
        {isLoggedIn ? (

          <div className="flex items-center gap-6">
            <button 
              onClick={handleLogout}
              className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-red-500"
            >
              Log Out
            </button>
          </div>

        ) : (
          <div className="flex items-center gap-5">
            <Link 
              to="/auth/signin" 
              className="hidden text-[11px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#6da158] sm:block"
            >
              Log In
            </Link>
            <Button 
              to="/auth/signup" 
              className="rounded-full bg-[#92c57a] px-6 py-2.5 text-[11px] font-bold tracking-widest text-white shadow-[0_4px_10px_rgba(146,197,122,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#6da158] hover:shadow-[0_6px_15px_rgba(146,197,122,0.4)] border-none"
            >
              SIGN UP
            </Button>
          </div>

        )}
        
      </div>
    </nav>
  );
};

export default NavBar;