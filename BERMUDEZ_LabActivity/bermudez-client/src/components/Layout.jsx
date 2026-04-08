import NavBar from './NavBar';
import Footer from './footer'; 
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <NavBar />
      <main className="flex-grow pt-20"> 
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;