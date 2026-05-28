import { Link } from 'react-router-dom';
import friend1 from '../assets/friendspage/friend-1.png';
import pochaccoImg from '../assets/friendspage/friend-7.png';

const Footer = () => {
  return (
    <footer className="relative mt-10 bg-white pt-8 overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 text-sm pb-36">
         
         <div className="hidden lg:block"></div>

         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">Your Account</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">Get started now</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Login</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Browse articles</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Refer a friend</Link></li>
            </ul>
         </div>
         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">Why Pochacco</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">The difference</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Vegetarian diet</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Banana ice cream</Link></li>
            </ul>
         </div>
         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">Activities</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">Walking</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Basketball</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Soccer</Link></li>
            </ul>
         </div>
         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">About Us</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">Uguisu Yokocho</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">How it works</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Press pack</Link></li>
            </ul>
         </div>
         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">Community</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">Our Blog</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Testimonials</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Workshops</Link></li>
            </ul>
         </div>
         <div>
            <h3 className="font-bold text-zinc-900 uppercase tracking-wider mb-4 text-[11px]">Help</h3>
            <ul className="space-y-2 text-zinc-500 text-xs font-medium">
               <li><Link to="#" className="hover:text-[#6da158]">FAQ</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Terms & Conditions</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Privacy Policy</Link></li>
               <li><Link to="#" className="hover:text-[#6da158]">Get in touch</Link></li>
            </ul>
         </div>
      </div>

      <div className="absolute bottom-0 w-full h-48 sm:h-56 pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full text-[#92c57a]" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[80%] text-[#7cb365]" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor">
           <path d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,208C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-4 sm:px-12 max-w-7xl mx-auto w-full h-full pointer-events-auto pb-4">
            <div className="flex items-end gap-6 h-full">

                <img src={pochaccoImg} alt="Pochacco" className="block h-40 sm:h-48 object-contain drop-shadow-md transition-transform hover:-translate-y-2" />
                
                <div className="flex flex-col gap-2 mb-4">
                    <p className="text-zinc-900 font-extrabold text-[10px] sm:text-[11px] tracking-widest uppercase">
                      Keep in touch. We love to chat
                    </p>
                    <div className="flex gap-4 text-zinc-800">
                      <svg className="w-5 h-5 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      <svg className="w-5 h-5 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </div>
                </div>
            </div>

            <div className="flex items-end h-full mb-4">
                <img src={friend1} alt="The Pi-Chans" className="h-16 sm:h-20 object-contain drop-shadow-md transition-transform hover:scale-110" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;