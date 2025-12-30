import {
  FiClock,
  FiMonitor,
  FiUsers,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

const programs = [
  {
    title: "Career Awareness Seminars",
    description:
      "Group sessions exploring various career paths, industry trends, and opportunities for students.",
    duration: "2–3 hours",
    mode: "Offline / Online",
    for: "Students & Parents",
    points: [
      "Multiple career options",
      "Real-world insights",
      "Q&A sessions",
    ],
  },
  {
    title: "Personality Development Workshop",
    description:
      "Interactive workshop focusing on confidence, communication, and presentation skills.",
    duration: "1–2 days",
    mode: "Offline",
    for: "Students (Class 9–12)",
    points: [
      "Practical exercises",
      "Role playing",
      "Certificate provided",
    ],
  },
  {
    title: "One-on-One Career Counseling",
    description:
      "Personalized sessions to understand individual strengths and create career roadmaps.",
    duration: "45–60 mins",
    mode: "Online / Offline",
    for: "Individual Students",
    points: [
      "Personalized assessment",
      "Custom roadmap",
      "Follow-up support",
    ],
  },
  {
    title: "School & College Sessions",
    description:
      "Comprehensive career guidance programs conducted at educational institutions.",
    duration: "Half / Full day",
    mode: "Offline",
    for: "Educational Institutions",
    points: [
      "Bulk sessions",
      "Institution-specific",
      "Parent workshops",
    ],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-[#faf9f6] py-6 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Tag */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ede9df] text-sm text-[#355f4b]">
          Programs & Workshops
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-black">
          Structured Programs for <br /> <span className="text-[#355f4b]">Holistic Development</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-[#4b5f55]">
          Choose from our range of programs designed to address different
          aspects of student growth and career preparation.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
          {programs.map((item, i) => (
            <ProgramCard key={i} {...item} />
          ))}
        </div>

        {/* Location */}
        <div className="mt-20 flex items-center justify-center gap-2 text-sm bg-white px-6 py-3 rounded-full shadow-sm text-[#4b5f55]">
          <FiMapPin className="text-[#355f4b]" />
          All programs available in
          <span className="font-semibold text-[#1f3f32]">
            Narmadapuram
          </span>
          and nearby areas
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, description, duration, mode, for: forWho, points }) => (
  <div className="bg-[#f2f3ee] rounded-2xl overflow-hidden shadow-sm">
    
    {/* Header */}
    <div className="px-6 py-5 border-b border-black/5">
      <h3 className="text-lg font-semibold text-[#1f3f32]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[#4b5f55]">
        {description}
      </p>
    </div>

    {/* Meta */}
    <div className="grid grid-cols-3 text-center px-6 py-6 gap-4 text-sm">
      <Meta icon={<FiClock />} label="Duration" value={duration} />
      <Meta icon={<FiMonitor />} label="Mode" value={mode} />
      <Meta icon={<FiUsers />} label="For" value={forWho} />
    </div>

    {/* Points */}
    <ul className="px-6 pb-4 space-y-2 text-sm text-[#4b5f55]">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <FiCheckCircle className="mt-0.5 text-[#d19a3b]" />
          {point}
        </li>
      ))}
    </ul>

    {/* Button */}
    <div className="px-6 pb-6">
      <button className="w-full border border-black/10 hover:bg-white rounded-lg py-2 text-sm font-medium transition">
        Enquire Now
      </button>
    </div>
  </div>
);

const Meta = ({ icon, label, value }) => (
  <div>
    <div className="mx-auto w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#355f4b] mb-2">
      {icon}
    </div>
    <p className="text-xs text-[#6b7c73]">{label}</p>
    <p className="font-medium text-[#1f3f32]">{value}</p>
  </div>
);

export default Programs;