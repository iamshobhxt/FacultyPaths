import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

function ContactInfo({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-center space-x-3 md:space-x-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 md:h-12 md:w-12">
        <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
      </div>
      <div>
        <p className="text-sm font-semibold md:text-base">{title}</p>
        <p
          className="text-xs text-blue-200 md:text-sm"
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    // Example "submit" simulation
    console.log("Form submitted:", formData);
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="login-box bg-black p-6 rounded-2xl shadow-lg">
      <p className="text-blue-600 font-bold text-2xl text-center mb-4">Get Started Today</p>
      <form onSubmit={handleSubmit}>
        <div className="user-box mb-4">
        <label className="text-sm text-gray-300">Name</label>
          <input
            required
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 p-2 text-white focus:outline-none"
          />
        </div>
        <div className="user-box mb-4">
        <label className="text-sm text-gray-300">Email</label>
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 p-2 text-white focus:outline-none"
          />
        </div>
        <div className="user-box mb-4">
        <label className="text-sm text-gray-300">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 p-2 text-white focus:outline-none"
          />
        </div>
        <div className="user-box mb-6">
        <label className="text-sm text-gray-300">
            Tell us about your project
        </label>
          <textarea
            required
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-400 p-2 text-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="relative inline-block px-6 py-3 font-bold uppercase tracking-wider text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-white">{status}</p>}
    </div>
  );
}

function ContactSection() {
  return (
    <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20 md:min-h-[500px] md:px-0 md:py-32">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-12 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-6">
            <h2
              className="mb-2 text-2xl font-bold sm:text-3xl md:mb-6 md:text-4xl"
              style={{ fontFamily: "Exo, Arial, sans-serif" }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="mb-4 text-base text-blue-100 md:mb-8 md:text-xl">
              Let's discuss how our innovative IT solutions can drive your
              business forward. Get in touch with our experts today.
            </p>
            <div className="space-y-4 md:space-y-6">
              <ContactInfo
                icon={Phone}
                title="Call Us"
                detail="+91 9336592235"
              />
              <ContactInfo
                icon={Mail}
                title="Email Us"
                detail="facultypaths.info"
              />
              <ContactInfo
                icon={MapPin}
                title="Visit Us"
                detail={`Panchsheel Marg , Barra -8 <br />Kanpur Nagar - 208027 , Uttar Pradesh.`}
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="mt-6 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection