import { Link } from 'react-router-dom';
import pochaccoCool from '../assets/homepage/404.png';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col min-h-[65vh] items-center justify-center bg-white px-4 py-12">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-5xl">
        <div className="flex-shrink-0">
          <img 
            src={pochaccoCool} 
            alt="Cool Pochacco with sunglasses" 
            className="w-56 md:w-80 object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-4 md:mt-0">
          
          <h1 className="text-3xl md:text-4xl text-zinc-900 mb-6 font-serif tracking-wide">
            Stay Cool...
          </h1>
          
          <p className="text-sm font-semibold text-zinc-700 mb-6">
            It's just a 404 Error!
          </p>
          
          <p className="text-xs md:text-sm text-zinc-500 max-w-xs leading-relaxed mb-10">
            What you're looking for may have jogged off course or gone out for banana ice cream.
          </p>

          <div className="flex gap-6 mt-4">
             <Link to="/" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#6da158] transition-colors">
                Go Home
             </Link>
             <Link to="/friends" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#6da158] transition-colors">
                Read Articles
             </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default NotFoundPage;