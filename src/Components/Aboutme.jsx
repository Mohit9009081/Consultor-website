import {
  FiBook,
  FiHeart,
  FiTarget,
  FiMapPin,
} from "react-icons/fi";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="bg-[#faf9f6] py-10 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CARD */}
        <div className="relative bg-linear-to-br from-[#dfe5d8] to-[#ebe6d6] rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center">

          {/* IMAGE */}
          <div className="md:w-120 md:h-160 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#e3e8dd] flex items-center justify-center">
            <img
              src="/professor.jpg"
              alt="Professor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute -bottom-5 right-5 bg-[#d19a3b] text-white rounded-2xl px-5 py-3 text-center shadow-lg">
            <p className="text-2xl font-bold">35+</p>
            <p className="text-xs tracking-wide leading-tight">
              Years of<br />Experience
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ede9df] text-sm text-[#355f4b]">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#1f3f32] leading-tight">
            A Lifetime Dedicated to <br />
            Shaping Futures
          </h2>

          <p className="mt-6 text-[#4b5f55] leading-relaxed text-sm sm:text-base">
            With over three decades of experience as a History Professor,
            I have had the privilege of guiding thousands of students through
            their academic journeys. My passion extends beyond the classroom—
            I believe every student deserves personalized guidance to unlock
            their full potential.
          </p>

          <p className="mt-4 text-[#4b5f55] leading-relaxed text-sm sm:text-base">
            Based in Narmadapuram, I offer comprehensive consultancy services
            that combine academic expertise with practical career guidance.
            Whether you're a student choosing streams after 10th or preparing
            for competitive exams, or a parent seeking the best for your child,
            I’m here to help.
          </p>

          <p className="mt-4 text-[#4b5f55] leading-relaxed text-sm sm:text-base">
            My approach is simple: understand each student’s unique strengths
            and aspirations, then create a personalized roadmap for success.
            Education is not just about marks—it’s about building confident,
            well-rounded individuals ready to face the world.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Feature
              icon={<FiBook />}
              title="Academic Excellence"
              text="History Professor with extensive experience in higher education and student mentorship."
            />
            <Feature
              icon={<FiHeart />}
              title="Passion for Teaching"
              text="Dedicated to nurturing young minds and helping them discover their true potential."
            />
            <Feature
              icon={<FiTarget />}
              title="Career Focus"
              text="Specialized in guiding students through critical career decisions after 10th and 12th."
            />
            <Feature
              icon={<FiMapPin />}
              title="Local Expertise"
              text="Deep understanding of educational opportunities in Narmadapuram and surrounding areas."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
    <div className="w-10 h-10 rounded-full bg-[#eef2eb] flex items-center justify-center text-[#355f4b] shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-[#1f3f32]">{title}</h4>
      <p className="text-sm text-[#4b5f55] mt-1">{text}</p>
    </div>
  </div>
);

export default Aboutme;