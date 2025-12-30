import {
  FiCompass,
  FiStar,
  FiBookOpen,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCompass />,
    title: "Career Guidance",
    description:
      "Expert guidance for stream selection after 10th, career options after 12th, and awareness about competitive examinations.",
    points: [
      "Stream selection counseling",
      "Career path exploration",
      "Competitive exam guidance",
      "Arts & Humanities specialization",
    ],
  },
  {
    icon: <FiStar />,
    title: "Personality Development",
    description:
      "Comprehensive programs to build confidence, enhance communication skills, and prepare students for interviews and life.",
    points: [
      "Confidence building",
      "Communication skills",
      "Interview preparation",
      "Public speaking",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "Academic Mentorship",
    description:
      "Personalized academic support to strengthen subject understanding, improve performance, and develop disciplined study habits.",
    points: [
      "One-to-one mentoring",
      "Study planning & time management",
      "Exam strategy & revision",
      "Academic performance tracking",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Parent & Student Counseling",
    description:
      "Guiding parents and students together to make informed academic and career decisions with clarity and confidence.",
    points: [
      "Parent-student joint sessions",
      "Career clarity discussions",
      "Stress & pressure management",
      "Goal-oriented planning",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#faf9f6] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Tag */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ede9df] text-sm text-[#355f4b]">
          Our Services
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3f32]">
          Comprehensive Guidance for <br />
          Every Student’s Journey
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-[#4b5f55]">
          From career decisions to personality development, we offer holistic
          support to help students achieve their full potential.
        </p>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-8 text-left">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, points }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
    
    {/* Icon */}
    <div className="w-12 h-12 rounded-xl bg-[#eef2eb] flex items-center justify-center text-[#355f4b] mb-6 text-xl">
      {icon}
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold text-[#1f3f32]">
      {title}
    </h3>

    {/* Description */}
    <p className="mt-3 text-[#4b5f55] text-sm leading-relaxed">
      {description}
    </p>

    {/* Points */}
    <ul className="mt-5 space-y-2 text-sm">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2 text-[#4b5f55]">
          <span className="mt-1 w-2 h-2 rounded-full bg-[#d19a3b]"></span>
          {point}
        </li>
      ))}
    </ul>

    {/* Learn More */}
    <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#355f4b] hover:gap-3 transition">
      Learn More <FiArrowRight />
    </button>
  </div>
);

export default Services;