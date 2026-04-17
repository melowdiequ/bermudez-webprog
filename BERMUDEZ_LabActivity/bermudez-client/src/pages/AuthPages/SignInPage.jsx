import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses = "w-full border-b-2 border-zinc-200 bg-transparent py-2 text-sm font-medium text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-[#92c57a]";
const labelClasses = "text-[10px] font-bold uppercase tracking-widest text-[#92c57a]";

const SignInPage = () => {
  const navigate = useNavigate();
const handleLogin = (e) => {
    e.preventDefault(); 
    localStorage.setItem('isLoggedIn', 'true'); 
    navigate('/');
  };

  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-10 text-center text-2xl font-bold leading-tight text-[#6da158]">
        Welcome back to <br /> Nightingale Lane!
      </h2>

      <form onSubmit={handleLogin} className="space-y-8">
        <div>
          <label htmlFor="signin-email" className={labelClasses}>Email</label>
          <input id="signin-email" type="email" placeholder="sporty.pup@uguisu.com" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="signin-password" className={labelClasses}>Password</label>
          <input id="signin-password" type="password" placeholder="••••••••" className={inputClasses} />
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
          <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-[#92c57a]" />
            <span>Remember me</span>
          </label>
          <button type="button" className="hover:text-[#6da158]">Forgot Password?</button>
        </div>

        <div className="flex justify-center pt-6">
          <Button type="submit" className="w-3/4 rounded-full bg-[#92c57a] py-3 text-sm font-bold tracking-widest text-white shadow-[0_8px_15px_rgba(146,197,122,0.4)] transition-all hover:-translate-y-1 hover:bg-[#6da158] hover:shadow-[0_12px_20px_rgba(146,197,122,0.5)] border-none">
            LOG IN
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-xs font-semibold text-zinc-400">
        No account yet? <Link to="/auth/signup" className="text-[#6da158] hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInPage;