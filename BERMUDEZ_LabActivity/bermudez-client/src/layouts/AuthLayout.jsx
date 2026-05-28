import { Outlet } from 'react-router-dom';
import pochaccoArt from '../assets/styles/pochacco-bilog.png'; 

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-white">

      <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16 xl:px-24 relative z-10">
        <Outlet />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center bg-[#003366] py-16 lg:w-1/2 lg:py-0 overflow-hidden z-20">

        <div className="absolute left-0 top-1/2 z-30 hidden translate-x-[-99.5%] -translate-y-1/2 flex-col items-end lg:flex">
          <div className="mb-3 h-8 w-20 rounded-l-full bg-[#003366]"></div>
          <div className="mb-3 h-8 w-32 rounded-l-full bg-[#003366]"></div>
          <div className="mb-3 h-8 w-14 rounded-l-full bg-[#003366]"></div>
          <div className="mb-3 h-8 w-24 rounded-l-full bg-[#003366]"></div>
          <div className="flex w-40 items-center justify-end">
            <div className="h-3 w-20 rounded-l-full bg-[#003366]"></div>
            <div className="ml-4 h-3 w-3 rounded-full bg-[#003366]"></div>
          </div>
        </div>

        <div className="absolute -right-16 top-16 h-48 w-48 rounded-full bg-[#002244] shadow-inner lg:right-10 lg:top-20">
          <div className="absolute left-8 top-8 h-8 w-8 rounded-full bg-white/10 shadow-inner"></div>
          <div className="absolute bottom-10 left-12 h-10 w-10 rounded-full bg-white/10 shadow-inner"></div>
          <div className="absolute right-10 top-20 h-5 w-5 rounded-full bg-white/10 shadow-inner"></div>
        </div>

        <svg className="absolute left-12 top-24 h-6 w-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
        <svg className="absolute bottom-1/4 right-20 h-5 w-5 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
        <svg className="absolute left-1/4 top-1/3 h-4 w-4 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>

        <div className="absolute right-1/3 top-16 h-2 w-2 rounded-full bg-[#D4AF37]"></div>
        <div className="absolute bottom-20 left-20 h-3 w-3 rounded-full bg-[#D4AF37]"></div>
        <div className="absolute right-16 top-1/2 h-2 w-2 rounded-full bg-white opacity-40"></div>
        
        <img 
          src={pochaccoArt} 
          alt="Floating Mascot" 
          className="relative z-10 w-[90%] max-w-112.5 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

      </div>
    </div>
  );
};

export default AuthLayout;