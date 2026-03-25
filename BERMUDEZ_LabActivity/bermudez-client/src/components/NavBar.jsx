import { NavLink, Link } from 'react-router-dom';
import pochaccoLogo from '../assets/styles/pochacco-logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Friends', to: '/friends' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex items-center transition-transform hover:scale-105">
          <img 
            src={pochaccoLogo} 
            alt="Pochacco Logo" 
            className="h-13 w-auto object-contain" 
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50 transition hover:bg-zinc-700 hover:border-zinc-700"
          >
            Get to know Pochacco
          </Link>
        </div>

      </div>
    </header>
  );
};

export default NavBar;