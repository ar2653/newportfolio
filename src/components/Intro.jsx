import { useEffect, useState } from "react";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import PropTypes from "prop-types";

function Intro({ theme }) {
  const [notationType, setNotationType] = useState("highlight");

  useEffect(() => {
    if (theme === "light") {
      setNotationType("highlight");
    } else if (theme === "cyberpunk") {
      setNotationType("highlight");
    }
  }, [theme]);
  return (
    <>
      <RoughNotationGroup show="true" key={theme}>
        <div className="hero bg-base-100 mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <figure>
              <img
                src="https://ankush-portfolio.s3.amazonaws.com/profilepic.jpg"
                className="max-w-full rounded-lg shadow-2xl"
              />
            </figure>
            <div>
              <h1 className="text-4xl md:text-5xl">
                {/* <p>{theme} {notationType}</p> */}
                Hello! I&apos;m Ankush, a&nbsp; 
                <RoughNotation
                  type={notationType}
                  color="orange"
                  order="1"
                  animationDelay="1000"
                >
                developer&nbsp;
                </RoughNotation>
                based in New York.
              </h1>
              <p className="font-extralight mt-2">
                I&apos;m a Computer Software Engineering graduate from &nbsp;
                <RoughNotation
                  type={notationType}
                  multiline="true"
                  color="#CAFFBF"
                  order="2"
                  animationDelay="1000"
                >
                  New Jersey Institute of Technology.
                </RoughNotation>
                <br />
                <br />
                For the past 6 moths I&apos;ve worked for Prudential Financial
                on infrastructure development using AWS.
                <br />
                Prior to my Masters in US, I have
                <RoughNotation
                  type={notationType}
                  color="#f0abfc"
                  order="3"
                  animationDelay="1000"
                  multiline="true"
                >
                  &nbsp;5+ years&nbsp;
                </RoughNotation>
                of experience as a Software Engineer in a couple of startups and
                big companies.
                <br />
                <br />
                Through these experiences, I had the opportunity to work with
                both small and large organisations across different tech stacks
                and products. I&apos;m well versed in web technologies such as
                <RoughNotation
                  type={notationType}
                  multiline="true"
                  color="#FFADAD"
                  order="4"
                  animationDelay="1000"
                >
                  &nbsp;&nbsp;React, Vue.js and Angular.&nbsp;
                </RoughNotation>
                I have also worked on backend with
                <RoughNotation
                  type={notationType}
                  multiline="true"
                  color="#D1E9F6"
                  order="4"
                  animationDelay="1000"
                >
                  &nbsp;Python, Node.js, Express.js and FastAPI.&nbsp;
                </RoughNotation>
                On one end I&apos;ve built an internal products used just by the
                company and on the other end I have built products that are
                being used by millions of users. I also have experience working
                with cloud platforms like
                <RoughNotation
                  type={notationType}
                  multiline="true"
                  color="#BDB2FF"
                  order="4"
                  animationDelay="1000"
                >
                  &nbsp;AWS and Azure.&nbsp;
                </RoughNotation>
                <br />
                <br />
                I&apos;m currently looking for full time opportunities as a
                Software Engineer.
                <RoughNotation type="circle" multiline="true" color="red" order="5">
                  &nbsp;Hire me?&nbsp;
                </RoughNotation>
              </p>
              {/* Buttons  */}
              <div className="py-6 flex space-x-6">
                <button
                  className="btn btn-neutral font-thin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ankushranapure/",
                      "_blank"
                    )
                  }
                >
                  View LinkedIn
                </button>
                <button
                  className="btn font-thin"
                  onClick={() =>
                    window.open("https://github.com/ar2653", "_blank")
                  }
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </RoughNotationGroup>
    </>
  );
};

Intro.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Intro;
