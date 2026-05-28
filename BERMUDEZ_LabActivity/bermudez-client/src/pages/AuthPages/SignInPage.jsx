import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { loginUser } from '../../services/UserService';

const inputClasses = "w-full border-b-2 border-zinc-200 bg-transparent py-2 text-sm font-medium text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-[#003366]";
const labelClasses = "text-[10px] font-bold uppercase tracking-widest text-[#003366]";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError('');
    
    try {
      const { data } = await loginUser({ email, password });

      if (data.type === 'viewer') {
        setError('Access Denied: Viewers are not permitted to log into the dashboard.');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('type', data.type); 

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-6 text-center text-2xl font-bold leading-tight text-[#003366]">
        Welcome back to <br /> Nightingale Lane!
      </h2>

      {error && (
        <div className="mb-6 rounded-md bg-red-50 p-3 text-center text-sm font-medium text-red-600 border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-8">
        <div>
          <label htmlFor="signin-email" className={labelClasses}>Email</label>
          <input 
            id="signin-email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sporty.pup@uguisu.com" 
            className={inputClasses} 
            required
          />
        </div>

        <div>
          <label htmlFor="signin-password" className={labelClasses}>Password</label>
          <input 
            id="signin-password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••" 
            className={inputClasses} 
            required
          />
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
          <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-[#003366]" />
            <span>Remember me</span>
          </label>
          <button type="button" className="hover:text-[#D4AF37]">Forgot Password?</button>
        </div>

        <div className="flex justify-center pt-6">
          <Button type="submit" className="w-3/4 rounded-full bg-[#FFD700] py-3 text-sm font-bold tracking-widest text-[#003366] shadow-[0_8px_15px_rgba(255,215,0,0.4)] transition-all hover:-translate-y-1 hover:bg-[#E5C100] hover:shadow-[0_12px_20px_rgba(255,215,0,0.5)] border-none">
            LOG IN
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-xs font-semibold text-zinc-400">
        No account yet? <Link to="/auth/signup" className="text-[#003366] hover:text-[#D4AF37] hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInPage;