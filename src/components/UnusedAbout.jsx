import stack from "../data/stack";
import Card from "./Card";
import Svg from "./Svg";

function About() {
  return (
    <div className="flex flex-col items-center bg-base-100">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl mb-6 font-thin  underline decoration-indigo-500/30">
          Contact
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          I am a passionate graduate student with a strong background in
          software development, specializing in the creation of dynamic web
          applications and high-performance components. Leveraging my expertise
          in various technologies, I am eagerly seeking opportunities to expand
          my knowledge and contribute to exciting projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
        <Svg name="vue" />
      </div>
    </div>
  );
}

export default About;
