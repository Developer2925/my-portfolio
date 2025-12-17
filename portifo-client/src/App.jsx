import React, { useState, useEffect } from "react";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  Moon,
  Sun,
} from "lucide-react";

const Navigation = ({
  activeSection,
  setActiveSection,
  darkMode,
  setDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Work", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        darkMode
          ? "bg-gray-900/80 backdrop-blur-sm border-gray-800"
          : "bg-white/80 backdrop-blur-sm border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className={`text-xl font-light tracking-wider ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ＰＯＲＴＦＯＬＩＯ
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => setActiveSection(item)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-gray-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-gray-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={darkMode ? "text-white" : "text-black"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
                className={`block w-full text-left text-sm tracking-wide transition-colors ${
                  activeSection === item
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-6 transition-colors ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl text-center">
        <h1
          className={`text-6xl md:text-8xl font-light mb-6 tracking-tight transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Om Dhakulkar
        </h1>
        <p
          className={`text-xl md:text-2xl font-light mb-8 transition-colors ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Bilingual Software Engineer
        </p>
        <p
          className={`max-w-2xl mx-auto leading-relaxed transition-colors ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          Creating minimal, functional, and beautiful digital experiences with a
          focus on user-centered design and multilingual understanding.
        </p>
      </div>
    </section>
  );
};

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl">
        <h2
          className={`text-4xl md:text-5xl font-light mb-12 tracking-tight transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          About
        </h2>
        <div className="md:flex w-full justify-around md:grid-cols-2 gap-6">
          <div className="md:w-1/2">
            <p
              className={`leading-relaxed mb-6 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a designer and developer passionate about creating clean,
              intuitive interfaces that solve real problems. Practical
              experience and specialization in React, JavaScript, SQL and modern
              web technologies.
            </p>
            <p
              className={`leading-relaxed transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3
              className={`text-lg font-medium mb-4 transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Skills
            </h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {[
                "React",
                "JavaScript",
                "TailwindCSS",
                "Node.js",
                "UI/UX Design",
                "MongoDB",
                "SQL",
                "MySQL",
                "GSAP",
                "Github",
              ].map((skill) => (
                <div key={skill} className="my-1">
                  <div
                    className={`transition-colors border rounded px-2 py-1 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = ({ darkMode }) => {
  const projects = [
    {
      title: "Doctor Appointment Management System",
      description:
        "A modern appointment solution with real-time appointment management and seamless payment experience",
      tech: ["React", "Node.js", "Express", "MongoDB", "Payment-gateway"],
      link: "https://github.com/Developer2925/AppointmentMS",
      year: "2024",
      category: "Full Stack Web Development",
      image: Project1,
    },
    {
      title: "Book Inventory Management App",
      description: "Book management tool with CRUD functionality",
      tech: ["React", "Node", "Express", "MongoDB"],
      link: "https://github.com/Developer2925/book_inventory",
      year: "2024",
      category: "CRUD Application",
      image: Project2,
    },
    {
      title: "Gaming Website Frontend Clone",
      description:
        "A high-quality frontend project demonstrating advanced UI design, animations, and responsive layouts.",
      tech: ["React", "TailwindCSS", "GSAP", "locomotive-scroll"],
      link: "https://awwards-zentry-eight.vercel.app/",
      year: "2024",
      category: "Frontend Development",
      image: Project3,
    },
    {
      title: "Ochi Design - Frontend",
      description:
        "A modern, animation-driven frontend website focused on aesthetics and user experience.",
      tech: [
        "React",
        "TailwindCSS",
        "locomotive-scroll",
        "GSAP",
        "framer-motion",
      ],
      link: "https://ochi-design-cyan.vercel.app/",
      year: "2024",
      category: "Frontend Development",
      image: Project4,
    },
  ];

  return (
    <section
      id="work"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-light mb-12 tracking-tight transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Selected Work
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                darkMode
                  ? "bg-gray-900 border-gray-700 hover:border-gray-600"
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`md:h-48 h-36 relative overflow-hidden ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-700 to-gray-800"
                    : "bg-gradient-to-br from-gray-100 to-gray-200"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-colors duration-300 md:flex justify-center items-center ${
                    darkMode
                      ? "bg-black/0 group-hover:bg-black/10"
                      : "bg-black/0 group-hover:bg-black/5"
                  }`}
                >
                  <img src={project.image} alt="" className="" />
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                >
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-wider mb-2 ${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {project.category}
                    </p>
                    <h3
                      className={`text-xl font-medium transition-colors ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300"
                  >
                    <ExternalLink
                      size={20}
                      className={darkMode ? "text-gray-400" : "text-gray-600"}
                    />
                  </a>
                </div>
                <p
                  className={`mb-6 leading-relaxed text-sm transition-colors ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 border transition-colors ${
                        darkMode
                          ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                          : "border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 tracking-tight transition-colors ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed transition-colors ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-lg font-medium mb-6 transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Send a Message
            </h3>
            {submitted ? (
              <div
                className={`border p-6 text-center transition-colors ${
                  darkMode
                    ? "bg-green-900/20 border-green-800"
                    : "bg-green-50 border-green-200"
                }`}
              >
                <p
                  className={`font-medium mb-2 ${
                    darkMode ? "text-green-400" : "text-green-800"
                  }`}
                >
                  Message Sent!
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-green-500" : "text-green-700"
                  }`}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm mb-2 transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border focus:outline-none transition-colors ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-white"
                        : "bg-white border-gray-300 text-black focus:border-gray-900"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm mb-2 transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border focus:outline-none transition-colors ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-white"
                        : "bg-white border-gray-300 text-black focus:border-gray-900"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm mb-2 transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 border focus:outline-none transition-colors resize-none ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white focus:border-white"
                        : "bg-white border-gray-300 text-black focus:border-gray-900"
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 px-6 transition-colors flex items-center justify-center gap-2 group ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </div>

          <div>
            <h3
              className={`text-lg font-medium mb-6 transition-colors ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Connect
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:omdhakulkar2925@gmail.com"
                target="_blank"
                className={`flex items-center gap-4 transition-colors group ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <div
                  className={`w-12 h-12 border flex items-center justify-center transition-colors ${
                    darkMode
                      ? "border-gray-700 group-hover:border-white"
                      : "border-gray-300 group-hover:border-black"
                  }`}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    omdhakulkar2925@gmail.com
                  </p>
                </div>
              </a>

              <a
                target="_blank"
                href="https://github.com/Developer2925"
                className={`flex items-center gap-4 transition-colors group ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <div
                  className={`w-12 h-12 border flex items-center justify-center transition-colors ${
                    darkMode
                      ? "border-gray-700 group-hover:border-white"
                      : "border-gray-300 group-hover:border-black"
                  }`}
                >
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    @Developer2925
                  </p>
                </div>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/om-dhakulkar/"
                className={`flex items-center gap-4 transition-colors group ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <div
                  className={`w-12 h-12 border flex items-center justify-center transition-colors ${
                    darkMode
                      ? "border-gray-700 group-hover:border-white"
                      : "border-gray-300 group-hover:border-black"
                  }`}
                >
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Om Dhakulkar
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`border-t py-8 transition-colors ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p
          className={`text-sm transition-colors ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          © 2024 Om Dhakulkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div
      className={`transition-colors ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div id="home">
        <Hero darkMode={darkMode} />
      </div>
      <div id="about">
        <About darkMode={darkMode} />
      </div>
      <div id="work">
        <Work darkMode={darkMode} />
      </div>
      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}
