// ContactSection.jsx
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <section className="pt-12 md:pt-20 pb-8 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="pt-8 md:pt-16 text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">
            Contact Us
          </h1>
          <p className="text-base md:text-xl text-blue-100 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send us
            a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default Contact;

/* -----------------------------
   FORM COMPONENT
----------------------------- */
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    subCategory: "",
    details: "",
    message: "",
  });

  const [subCategories, setSubCategories] = useState([]);

  const subjects = {
    services: ["Web Development", "Mobile Apps", "Cloud Hosting"],
    technologies: ["React", "Node.js", "Python", "AI/ML"],
  };

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "subject") {
      setSubCategories(subjects[value] || []);
      setFormData((prev) => ({ ...prev, subCategory: "", details: "" }));
    }
  };

  // handle reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      subCategory: "",
      details: "",
      message: "",
    });
    setSubCategories([]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully 🚀");
    handleReset();
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 md:p-6 shadow-2xl backdrop-blur-sm border border-white/10"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="First Name *"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <FormField
            label="Last Name *"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <FormField
          label="Email Address *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Subject & SubCategory */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white"
            >
              <option value="">Select a subject</option>
              {Object.keys(subjects).map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Sub Category *
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              required
              disabled={!subCategories.length}
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white"
            >
              <option value="">Select sub-category</option>
              {subCategories.map((sc) => (
                <option key={sc} value={sc}>
                  {sc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Details */}
        <FormField
          label="Details *"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          disabled={!formData.subCategory}
          placeholder="Select subject first"
        />

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Message *
          </label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center space-x-4 pt-2">
          <button type="submit" className="px-6 py-3 bg-emerald-500 rounded-xl">
            Send Message
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-white/5"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

/* -----------------------------
   REUSABLE INPUT FIELD
----------------------------- */
function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
  placeholder = "",
}) {
  return (
    <div className="group">
      <label className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white"
      />
    </div>
  );
}

/* -----------------------------
   CONTACT INFO (RIGHT SIDE)
----------------------------- */
function ContactInfo() {
  return (
    <div className="space-y-6 md:space-y-8">
      <InfoCard
        icon={<Phone className="h-6 w-6 text-white" />}
        title="Phone"
        detail="+91 8882824948"
        sub="Reach us during business hours for prompt assistance."
      />
      <InfoCard
        icon={<Mail className="h-6 w-6 text-white" />}
        title="Email"
        detail="info@infocera.in"
      />
      <InfoCard
        icon={<MapPin className="h-6 w-6 text-white" />}
        title="Address"
        detail={`First Floor, L29-L34\nBlock L, Connaught Place\nNew Delhi, Delhi - 110001`}
      />
      <InfoCard
        icon={<Clock className="h-6 w-6 text-white" />}
        title="Business Hours"
        detail={`Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM`}
        sub="Sunday: Closed"
      />
    </div>
  );
}

function InfoCard({ icon, title, detail, sub }) {
  return (
    <div className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white text-sm md:text-base mb-1">
          {title}
        </h4>
        <p className="text-blue-200 text-sm md:text-base font-medium whitespace-pre-line">
          {detail}
        </p>
        {sub && <p className="text-blue-300/70 text-xs mt-1">{sub}</p>}
      </div>
    </div>
  );
}
