import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#faf9f6] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ede9df] text-sm text-[#355f4b]">
          Get in Touch
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3f32]">
          Start Your Journey <br /> Today
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-[#4b5f55]">
          Have questions about our services? Want to book a consultation?
          Reach out to us and take the first step towards a brighter future.
        </p>

        {/* Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 text-left">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-serif text-[#1f3f32] mb-8">
              Contact Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <InfoCard
                icon={<FiPhone />}
                title="Phone"
                line1="+91 98765 43210"
                line2="Call or WhatsApp"
              />

              <InfoCard
                icon={<FiMail />}
                title="Email"
                line1="hansa.vyas@email.com"
                line2="We reply within 24 hours"
              />

              <InfoCard
                icon={<FiMapPin />}
                title="Location"
                line1="Narmadapuram, Madhya Pradesh"
                line2="Home visits available"
              />

              <InfoCard
                icon={<FiClock />}
                title="Timing"
                line1="Mon – Sat: 10 AM – 6 PM"
                line2="Sunday by appointment"
              />
            </div>

            {/* WhatsApp Card */}
            <div className="mt-10 bg-[#355f4b] rounded-2xl px-8 py-10 text-center text-white">
              <FaWhatsapp className="mx-auto text-4xl mb-4" />
              <h4 className="text-xl font-serif">
                Quick Connect via WhatsApp
              </h4>
              <p className="mt-2 text-white/80 text-sm">
                Send us a message for quick responses and easy scheduling
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 bg-[#d19a3b] hover:bg-[#c18b2f] text-black px-6 py-3 rounded-lg font-medium transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#f2f3ee] rounded-2xl p-10">
            <h3 className="text-2xl font-serif text-[#1f3f32]">
              Book a Consultation
            </h3>
            <p className="mt-2 text-sm text-[#4b5f55]">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 bg-white"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Student's Current Class *
                </label>
                <select className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 bg-white">
                  <option>Select Class</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                  <option>College</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements or questions..."
                  className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d19a3b] hover:bg-[#c18b2f] text-black py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, line1, line2 }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="w-10 h-10 rounded-full bg-[#e6ebe7] flex items-center justify-center text-[#355f4b] mb-4">
      {icon}
    </div>
    <h4 className="font-semibold text-[#1f3f32]">
      {title}
    </h4>
    <p className="mt-1 text-sm text-[#4b5f55]">
      {line1}
    </p>
    <p className="text-xs text-[#6b7c73]">
      {line2}
    </p>
  </div>
);

export default Contact;