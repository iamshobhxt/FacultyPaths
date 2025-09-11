import { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#22223b] via-[#1a1a2e] to-[#0f3460]">
      <div className="group relative w-full max-w-2xl flex flex-col items-center">
        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 animate-glow group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-300"
          style={{
            background:
              "conic-gradient(rgb(0, 240, 255), rgb(124, 58, 237), rgb(0, 240, 255) 100%)",
            filter: "blur(6px)",
          }}
        ></div>

        {/* Card */}
        <div className="bg-[#181a20] backdrop-blur-md py-8 px-20 rounded-2xl shadow-2xl w-full flex flex-col items-center border border-white/10 z-20">
          <h1 className="text-3xl font-extrabold mb-2 text-white tracking-tight drop-shadow-lg">
            Create Account
          </h1>
          <p className="text-gray-300 text-center mb-6 text-sm">
            By creating an account, you may receive newsletters or promotions.
          </p>

          {/* Form */}
          <form
            className="w-full flex flex-col space-y-4 mt-2"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="new-password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-4 py-2 bg-white border border-gray-700 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl tracking-wide"
            >
              Create Account
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4 italic">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;