
// import { ChevronLeft, ChevronRight, Bell, User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-16 bg-black/30 flex justify-between items-center px-6">
//       <div className="flex space-x-2">
//         <button onClick={() => navigate(-1)} className="bg-black/40 rounded-full p-1">
//           <ChevronLeft size={20} className="text-white" />
//         </button>
//         <button onClick={() => navigate(1)} className="bg-black/40 rounded-full p-1">
//           <ChevronRight size={20} className="text-white" />
//         </button>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button className="text-white p-2 hover:bg-black/20 rounded-full">
//           <Bell size={20} />
//         </button>
//         <button className="text-white p-2 hover:bg-black/20 rounded-full">
//           <User size={20} />
//         </button>
//       </div>
//   </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { User, AlertCircle, X } from 'lucide-react';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      setIsLoginOpen(false);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MusicVerse</h1>
        
        <div className="relative">
          <button
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            <User size={24} />
          </button>

          {isLoginOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl z-50">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Login</h2>
                  <button 
                    onClick={() => setIsLoginOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/20 p-2 rounded">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </button>
                </form>
                
                <div className="mt-4 text-center">
                  <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                    Forgot password?
                  </a>
                </div>
                
                <div className="mt-4 text-center text-gray-400 text-sm">
                  Don't have an account? 
                  <a href="#" className="text-purple-400 hover:text-purple-300 ml-1">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;