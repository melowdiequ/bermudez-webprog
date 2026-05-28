import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const labelClasses = "text-[11px] font-bold uppercase tracking-widest text-zinc-500";
const inputClasses = "mt-2 w-full rounded-xl border-2 border-zinc-900 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#003366] focus:ring-4 focus:ring-[#003366]/10";
const actionButtonClassName = "w-full rounded-xl py-4 text-[11px] font-bold tracking-[0.2em] shadow-[0_4px_0_0_#18181b] active:translate-y-1 active:shadow-none transition-all bg-[#FFD700] text-[#003366] border-none hover:bg-[#E5C100]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    username: '',
    password: '',
    address: '',
    type: 'viewer' 
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await createUser(formData);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/auth/signin');
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please check your inputs.');
    }
  };

  return (
    <div className="py-8">
      <header className="mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">
          Join the Gazette
        </p>
        <h1 className="text-4xl font-black text-[#003366] tracking-tight">Create Account</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 font-medium">
          Become a verified reader of the Uguisu Yokocho Gazette and join our community.
        </p>
      </header>

      {error && (
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-bold text-red-600 border-2 border-red-200">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-6 rounded-xl bg-green-50 p-4 text-sm font-bold text-green-600 border-2 border-green-200">
          Account created successfully! Redirecting to login...
        </div>
      )}
      
      <form onSubmit={handleSignUp} className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClasses}>First Name</label>
            <input id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Pochacco" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="last-name" className={labelClasses}>Last Name</label>
            <input id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Pup" className={inputClasses} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-email" className={labelClasses}>Email Address</label>
            <input id="signup-email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="sporty.pup@nightingalelane.com" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="username" className={labelClasses}>Username</label>
            <input id="username" name="username" value={formData.username} onChange={handleChange} type="text" placeholder="sportypup99" className={inputClasses} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className={labelClasses}>Age</label>
            <input id="age" name="age" value={formData.age} onChange={handleChange} type="number" placeholder="21" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="gender" className={labelClasses}>Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className={inputClasses} required>
              <option value="" disabled>Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-number" className={labelClasses}>Contact Number</label>
            <input id="contact-number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} type="tel" placeholder="+63 912 345 6789" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="signup-password" className={labelClasses}>Password</label>
            <input id="signup-password" name="password" value={formData.password} onChange={handleChange} type="password" placeholder="••••••••" className={inputClasses} required minLength="6" />
          </div>
        </div>

        <div>
          <label htmlFor="address" className={labelClasses}>Home Address</label>
          <textarea 
            id="address" 
            name="address"
            value={formData.address} 
            onChange={handleChange}
            rows="2" 
            placeholder="e.g. Uguisu Yokocho, Nightingale Lane" 
            className={`${inputClasses} resize-none`}
            required
          ></textarea>
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={success} className={actionButtonClassName}>
            {success ? 'SUCCESS!' : 'CREATE ACCOUNT'}
          </Button>
        </div>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-200"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="bg-[#fdfbf7] px-4 text-zinc-400">Or Register with</span></div>
        </div>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className="w-full rounded-xl py-3 text-[10px] tracking-widest border-2 border-zinc-900 bg-white hover:bg-zinc-50 text-zinc-900">Google</Button>
          <Button type="button" variant="secondary" className="w-full rounded-xl py-3 text-[10px] tracking-widest border-2 border-zinc-900 bg-white hover:bg-zinc-50 text-zinc-900">Apple</Button>
        </div>
      </form>

      <footer className="mt-10 border-t border-zinc-200 pt-8 text-center text-sm">
        <p className="text-zinc-500 font-medium">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-bold text-[#003366] hover:text-[#D4AF37] hover:underline decoration-2 underline-offset-4 transition-colors">
            Log In here
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default SignUpPage;