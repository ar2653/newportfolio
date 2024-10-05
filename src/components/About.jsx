import tech from "../data/tech";
import Svg from "./Svg";
import { RoughNotation } from "react-rough-notation";

const About = function () {
  const categories = tech.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="p-6">
        <section className="mb-10 prose-stone">
          <h2 className="text-4xl font-thin  mb-2 underline decoration-indigo-500/30">
            About Me
          </h2>
          <p className="font-extralight text-sm mt-4">
            Full-Stack Software Engineer with 5+ years of experience building
            scalable web applications using
            <RoughNotation type="underline" multiline="true" color="#f472b6" order="1" show="true" animationDelay="1000">
            &nbsp;JavaScript, React, Angular, Vue.js, Node.js, Python, Docker, and AWS.&nbsp;
            </RoughNotation>
            <span className="underline decoration-sky-400"></span>
            <br/>
            I specialize in developing
            intuitive and high-performance solutions across the full stack.
            Driven by a love for modern technologies, I continuously seek
            opportunities to innovate and collaborate in fast-paced, dynamic
            environments.
          </p>
        </section>
        {Object.keys(categories).map((category, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-thin  mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categories[category].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
                >
                  {item.type === "svg" ? (
                    <Svg name={item.name} />
                  ) : (
                    <figure>
                      <img
                        src={item.image}
                        alt={item.displayName}
                        height={100}
                        width={100}
                      />
                    </figure>
                  )}
                  <span className="mt-2 text-gray-700 font-thin">
                    {item.displayName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
