import {
  FiBookOpen,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#355f4b] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div
             
              className="flex items-center gap-3 text-white"
            >
              <div className="w-12 h-12 rounded-full bg-[#3f6b55] flex items-center justify-center text-[#d19a3b]">
                <FiBookOpen />
              </div>
              <div>
                <h3 className="text-lg font-serif">Hansa Vyas</h3>
                <p className="text-sm text-white/60">
                  Education & Career Consultancy
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed">
              35+ years of experience guiding students towards successful
              careers and personal growth. Building confident futures, one
              student at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-white">About</li>
              <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-white">Services</li>
              <li onClick={() => scrollTo("programs")} className="cursor-pointer hover:text-white">Programs</li>
              <li onClick={() => scrollTo("testimonials")} className="cursor-pointer hover:text-white">Testimonials</li>
              <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-white">
                Career Guidance
              </li>
              <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-white">
                Personality Development
              </li>
              <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-white">
                Academic Guidance
              </li>
              <li onClick={() => scrollTo("services")} className="cursor-pointer hover:text-white">
                Mentorship & Counseling
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#d19a3b]" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#d19a3b]" />
                <a href="mailto:hansa.vyas@email.com" className="hover:text-white">
                  hansa.vyas@email.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-[#d19a3b]" />
                Narmadapuram, Madhya Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © 2026 Hansa Vyas Education & Career Consultancy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;