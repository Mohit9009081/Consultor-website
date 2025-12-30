import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student, Class 12",
    text: `Mrs. Vyas helped me choose the right stream after 10th. Her guidance was invaluable in understanding my strengths and career options in Arts. Today, I am confidently pursuing my passion.`,
  },
  {
    name: "Rajesh Patel",
    role: "Parent",
    text: `As a parent, I was worried about my daughter's career choices. Mrs. Vyas's counseling sessions gave us clarity and direction. Her experience and wisdom truly shine through in every session.`,
  },
  {
    name: "Ananya Gupta",
    role: "BA History Student",
    text: `The personality development workshop transformed my confidence. I went from being shy to speaking on stage. Mrs. Vyas's teaching style is warm, patient, and incredibly effective.`,
  },
  {
    name: "Vikram Singh",
    role: "School Principal",
    text: `We invited Mrs. Vyas for a career awareness seminar at our school. The students were deeply engaged, and parents appreciated the practical insights. Highly recommend her programs.`,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#faf9f6] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Tag */}
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#ede9df] text-sm text-[#355f4b]">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1f3f32]">
          Words from Students <br /> & Parents
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-[#4b5f55]">
          Hear what students and parents have to say about their experience
          with our guidance and counseling services.
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20">
          <p className="text-sm text-[#4b5f55]">
            Trusted by students and parents across
          </p>
          <h4 className="mt-2 text-xl font-serif text-[#1f3f32]">
            Narmadapuram & Surrounding Areas
          </h4>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text }) => {
  const initial = name.charAt(0);

  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm">
      
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#355f4b] flex items-center justify-center text-white text-lg">
        ❝
      </div>

      {/* Stars */}
      <div className="flex gap-1 text-[#d19a3b] mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} fill="currentColor" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#4b5f55] text-sm leading-relaxed">
        “{text}”
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#e6ebe7] flex items-center justify-center font-semibold text-[#355f4b]">
          {initial}
        </div>
        <div>
          <p className="font-semibold text-[#1f3f32]">
            {name}
          </p>
          <p className="text-xs text-[#6b7c73]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;