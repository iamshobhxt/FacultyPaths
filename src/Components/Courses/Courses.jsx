import React, { useState } from 'react';
import { Star, Clock, Users, CheckCircle, ShoppingCart, Play } from 'lucide-react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const courses = [
    {
      id: 1,
      title: "Technical Placement Catalyst",
      price: 2499,
      originalPrice: 4999,
      rating: 4.5,
      students: 150,
      duration: "100 Hours",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=200&fit=crop&crop=center",
      description: "Master modern web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 5 real-world projects.",
      features: [
        "5 hands-on projects",
        "Certificate of completion",
        "Lifetime access",
        "24/7 community support"
      ],
      curriculum: [
        "HTML & CSS Fundamentals",
        "JavaScript ES6+",
        "React & Redux",
        "Node.js & Express",
        "MongoDB & Database Design"
      ],
      pdf: "/management-placement.pdf"
    },
    {
      id: 2,
      title: "Management Placement Catalyst",
      price: 2499,
      originalPrice: 4999,
      rating: 4.6,
      students:350,
      duration: "100 Hours",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop&crop=center",
      description: "The management placement catalyst program is a tranformative 25-days , 100-hours training roadmap meticulously design for management students. ",
      features: [
        "Certificate of completion",
        "Lifetime access",
        "24/7 community support",
        "Career guidance"
      ],
      curriculum: [
        "Comprehensive Curriculum",
        "Industry Alignment",
        "Hands oh Learning",
        "Placement Preparation",
        "Real-world Projects"
      ],
      pdf: "/technical-placement.pdf"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      price: 499.99,
      originalPrice: 999.99,
      rating: 4.7,
      students: 300,
      duration: "25 Days",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Complete digital marketing course covering SEO, social media, email marketing, PPC, and analytics.",
      features: [
        "35 hours of training",
        "Marketing templates",
        "Case studies",
        "Tool recommendations",
        "Monthly Q&A sessions"
      ],
      curriculum: [
        "SEO & Content Marketing",
        "Social Media Strategy",
        "Email Marketing",
        "Google Ads & PPC",
        "Analytics & Reporting"
      ],
      pdf: "/digital-marketing.pdf"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      price: 499.99,
      originalPrice: 999.99,
      rating: 4.8,
      students:500,
      duration: "10 Days",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      description: "Learn user interface and user experience design principles. Create stunning, user-friendly designs.",
      features: [
        "32 hours of design training",
        "Design system templates",
        "Figma & Adobe XD",
        "Portfolio projects",
        "Design critique sessions"
      ],
      curriculum: [
        "Design Principles",
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      pdf: "/ui-ux-design.pdf"
    }
  ];

  const openModal = (course) => setSelectedCourse(course);
  const closeModal = () => setSelectedCourse(null);

  return (
    <div className="min-h-screen my-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r  from-purple-600 to-blue-600 text-white py-5">
        {/* <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-black" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-black">
            Cart: ₹{cart.reduce((total, course) => total + course.price, 0).toFixed(2)}
          </span>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Skills That Matter
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Master in-demand skills with our expert-led courses
          </p>
          <div className="flex justify-center space-x-8 text-sm md:text-base">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              1500+ Students
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              4.8 Average Rating
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Lifetime Access
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h3>
          <p className="text-gray-600 text-lg">
            Choose from our most popular courses and start learning today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                </div>
                <button
                  onClick={() => openModal(course)}
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                >
                  <Play className="h-12 w-12 text-white" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{course.level}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h4>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{course.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ₹{course.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* ✅ PDF Button per course */}
                  <button
                    onClick={() => window.open(course.pdf, "_blank")}
                    className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg"
                  >
                    Roadmap Here
                  </button>

                  <button
                    onClick={() => openModal(course)}
                    className="w-full py-2 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedCourse.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Duration:</span>
                      <span>{selectedCourse.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Level:</span>
                      <span>{selectedCourse.level}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Students:</span>
                      <span>{selectedCourse.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {selectedCourse.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">
                          ₹{selectedCourse.price}
                        </span>
                        <span className="text-xl text-gray-500 line-through ml-3">
                          ₹{selectedCourse.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold ml-1">
                          {selectedCourse.rating}
                        </span>
                      </div>
                    </div>

                    {/* ✅ PDF Button inside modal */}
                    <button
                      onClick={() => window.open(selectedCourse.pdf, "_blank")}
                      className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 mb-3 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Roadmap Here
                    </button>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">Course Curriculum:</h4>
                    <ul className="space-y-2">
                      {selectedCourse.curriculum.map((topic, index) => (
                        <li key={index} className="flex items-center py-2 border-b border-gray-200">
                          <Play className="h-4 w-4 text-blue-500 mr-3" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Courses;
