import Svg from "./Svg";

function Timeline() {
  return (
    <div className="p-6">
      <section className="mb-6">
        <h2 className="text-4xl font-thin mb-2 underline decoration-indigo-500/30">
          My Journey
        </h2>
      </section>

      <div className="flex justify-start">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Bachelor's Degree */}
          <li>
            <div className="timeline-middle">
              <Svg name="college" />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2013</time>
              <div className="text-lg font-black">Bachelor&apos;s Degree</div>
              Bachelors in Electronics and Communication Engineering at
              Jawaharlal Nehru Technological University
            </div>
            <hr />
          </li>
          {/* Software Developer at Virtus */}
          <li>
            <hr />
            <div className="timeline-middle">
              <Svg name="work" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2017</time>
              <div className="text-lg font-black">
                Software Developer at Virtus
              </div>
              Developed an order management and delivery application using
              TypeScript, Angular 4, Node.js, and Express.js. Integrated with
              Google Maps API for order tracking and implemented Redis for
              improved performance.
            </div>
            <hr />
          </li>
          {/* Software Engineer at Mantra */}
          <li>
            <hr />
            <div className="timeline-middle">
              <Svg name="work" />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black">
                Software Engineer at Mantra
              </div>
              Engineered AI-powered scheduling software and implemented project
              management software. Integrated with third-party apps and designed
              RESTful APIs. Created CI/CD pipelines using GitLab CI.
            </div>
            <hr />
          </li>
          {/* Senior Software Engineer at Nisum */}
          <li>
            <hr />
            <div className="timeline-middle">
              <Svg name="work" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">
                Senior Software Engineer at Nisum
              </div>
              Designed reusable Vue.js components for Micro Frontend
              Architecture. Conducted A/B testing, published Node.js packages,
              and enhanced code reliability through Jest unit testing.
            </div>
            <hr />
          </li>
          {/* Master's Degree */}
          <li>
            <hr />
            <div className="timeline-middle">
              <Svg name="college" />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">Master&apos;s Degree</div>
              Masters in Computer Software Engineering at New Jersey Institute
              of Technology
            </div>
            <hr />
          </li>
          {/* Future Aspirations */}
          <li>
            <hr />
            <div className="timeline-middle">
              <Svg name="work" />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">Future Aspirations</div>
              Seeking new opportunities to apply my advanced skills and
              knowledge in software engineering. Aiming to contribute to
              innovative projects and continue growing as a professional in the
              tech industry.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
