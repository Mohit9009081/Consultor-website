import { useState } from "react";
import { FiBookOpen, FiArrowRight, FiX, FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Programs", id: "programs" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [active, setActive] = useState("home");
  const[menuOpen,setMenuOpen] = useState(false)

  const handleScroll = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      id="home"
      className="relative min-h-screen bg-linear-to-br from-[#1f4d3a] via-[#2f6b4f] to-[#9c7c3c] text-whit"
    >
     
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] `background-size:[24px_24px]` opacity-40"></div>

     
     <nav className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
  {/* Logo */}
  <div
    // onClick={() => handleScroll("home")}
    className="flex items-center gap-2 font-semibold text-lg cursor-pointer text-white"
  >
    <FiBookOpen />
    Hansa Vyas
  </div>

  {/* Desktop Menu */}
  <ul className="hidden md:flex gap-8 text-sm">
    {navLinks.map((link) => (
      <li
        key={link.id}
        onClick={() => handleScroll(link.id)}
        className={`cursor-pointer transition ${
          active === link.id
            ? "text-yellow-400"
            : "text-white/80 hover:text-white"
        }`}
      >
        {link.name}
      </li>
    ))}
  </ul>

  {/* Desktop Button */}
  <button
    onClick={() => handleScroll("contact")}
    className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium"
  >
    Book Consultation
  </button>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-white text-2xl"
  >
    {menuOpen ? <FiX /> : <FiMenu />}
  </button>
</nav>

{menuOpen && (
  <div className="md:hidden relative z-10 bg-[#1f4d3a]/95 backdrop-blur border-t border-white/10">
    <ul className="flex flex-col px-6 py-6 gap-4 text-sm">
      {navLinks.map((link) => (
        <li
          key={link.id}
          onClick={() => {
            handleScroll(link.id);
            setMenuOpen(false);
          }}
          className={`cursor-pointer ${
            active === link.id
              ? "text-yellow-400"
              : "text-white/80"
          }`}
        >
          {link.name}
        </li>
      ))}

      <button
        onClick={() => {
          handleScroll("contact");
          setMenuOpen(false);
        }}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg font-medium"
      >
        Book Consultation
      </button>
    </ul>
  </div>
)}

   
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
          🌟 35+ Years of Excellence in Education
        </span>

        <h1 className="text-4xl md:text-6xl font-serif text-white  leading-tight">
          Guiding Young Minds <br />
          <span className="text-yellow-400">Towards Success</span>
        </h1>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto">
          Empowering students with career guidance, personality development,
          and academic mentorship.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium"
          >
            Book Free Consultation <FiArrowRight />
          </button>

          <button
            onClick={() => handleScroll("services")}
            className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg"
          >
            Explore Services
          </button>
        </div>

       
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Stat value="5000+" label="Students Mentored" />
          <Stat value="35+" label="Years Experience" />
          <Stat value="100+" label="Workshops Conducted" />
        </div>
      </div>
    </header>
  );
};

const Stat = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur rounded-xl py-6 px-4">
    <h3 className="text-3xl font-semibold text-yellow-400">{value}</h3>
    <p className="mt-2 text-sm text-white/70">{label}</p>
  </div>
);

export default Header;