import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const labelClasses = "text-[11px] font-bold uppercase tracking-widest text-zinc-500";
const inputClasses = "mt-2 w-full rounded-xl border-2 border-zinc-900 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#92c57a] focus:ring-4 focus:ring-[#92c57a]/10";
const actionButtonClassName = "w-full rounded-xl py-4 text-[11px] font-bold tracking-[0.2em] shadow-[0_4px_0_0_#18181b] active:translate-y-1 active:shadow-none transition-all";

const SignUpPage = () => {
  return (
    <div className="py-8">
      <header className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6da158] mb-2">
          Join the Gazette
        </p>
        <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Create Account</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 font-medium">
          Become a verified reader of the Uguisu Yokocho Gazette and join our community of sporty pups.
        </p>
      </header>
      
      <form className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClasses}>First Name</label>
            <input id="first-name" type="text" placeholder="Pochacco" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="last-name" className={labelClasses}>Last Name</label>
            <input id="last-name" type="text" placeholder="Pup" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className={labelClasses}>Email Address</label>
          <input id="signup-email" type="email" placeholder="sporty.pup@nightingalelane.com" className={inputClasses} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="birthdate" className={labelClasses}>Birthdate</label>
            <input id="birthdate" type="date" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="gender" className={labelClasses}>Gender</label>
            <select id="gender" className={inputClasses}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="address" className={labelClasses}>Home Address</label>
          <textarea 
            id="address" 
            rows="2" 
            placeholder="e.g. Uguisu Yokocho, Nightingale Lane" 
            className={`${inputClasses} resize-none`}
          ></textarea>
        </div>

        <div>
          <label htmlFor="signup-password" className={labelClasses}>Password</label>
          <input id="signup-password" type="password" placeholder="••••••••" className={inputClasses} />
          <p className="mt-2 text-[10px] font-medium text-zinc-400 italic">
            Must include at least 8 characters, a number, and a symbol.
          </p>
        </div>

        <div className="pt-4">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Create Account
          </Button>
        </div>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-200"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="bg-zinc-50 px-4 text-zinc-400">Or Register with</span></div>
        </div>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className="w-full rounded-xl py-3 text-[10px] tracking-widest border-2 border-zinc-900">Google</Button>
          <Button type="button" variant="secondary" className="w-full rounded-xl py-3 text-[10px] tracking-widest border-2 border-zinc-900">Apple</Button>
        </div>
      </form>

      <footer className="mt-10 border-t border-zinc-100 pt-8 text-center text-sm">
        <p className="text-zinc-500 font-medium">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-bold text-[#6da158] hover:underline decoration-2 underline-offset-4">
            Log In here
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default SignUpPage;