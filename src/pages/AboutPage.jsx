import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Mel from "../assets/mel.jpg";
import Lu from "../assets/lu.jpg";

function AboutPage() {
  return (
    <>
      <h3
        className="text-lg font-semibold text-center mt-12 mx-6 
      lg:mt-8 lg:text-2xl "
      >
        "Travelling leaves you speachless, then turns you into a storyteller"
      </h3>
      <p
        className="shadow-lg text-md px-12 py-12 text-center mb-6
      lg:px-60 lg:py-8 lg:text-xl "
      >
        Driven by our shared passion for travel and technology, we join forces
        to embark on our latest endeavor: an app that showcases the breathtaking
        beauty of different places around the world.
        <br />
        Our aim is to gather a collection of amazing destinations that transport
        users to far-off lands with a single click. From the snow-capped peaks
        of the Swiss Alps to the sun-kissed shores of Bali, every place tells a
        story, weaving a tapestry of experiences that beckon the curious and the
        adventurous alike.
      </p>

      <div
        className="flex gap-10 flex-col ml-16
      lg:ml-44"
      >
        <div>
          <div className="bg-green-100 shadow-xl border-solid border rounded-xl p-6 flex flex-row w-10/12">
            <div>
              <img
                src={Mel}
                className="w-80 aspect-ratio: 1 / 1 shadow-lg border-solid border rounded-xl mt-6"
              />
            </div>
            <div className="">
              <h3
                className="text-center text-lg font-semibold 
              lg:text-xl"
              >
                Melanie Schiffner
              </h3>
              <p
                className="mt-4 ml-6 text-md 
              lg:text-lg"
              >
                I love to travel in my old VW van and discover the world. It's
                not the most comfortable traveling, but it definetely has style!
                It is also a wonderful experience to see how people react to the
                van and tell me stories about their van they used to have a long
                time ago
              </p>
              <p className="mt-4 ml-6">
                Favourite place:
                <b className="mx-6">Wildalpen, Austria</b>
              </p>
            </div>

            <div className="inline-flex">
              <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/MelSchiffner" className="ml-2">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-green-100 shadow-lg border-solid border rounded-xl p-6 flex flex-row w-10/12">
            <div className="">
              <img
                src={Lu}
                className="w-64 aspect-ratio: 1 / 1 shadow-lg border-solid border rounded-xl mt-4"
              />
            </div>
            <div>
              <h3
                className="text-center text-lg font-semibold 
              lg:text-xl"
              >
                Lucía Marconi
              </h3>
              <p
                className="mt-4 ml-6 text-md 
              lg:text-lg"
              >
                I went to Brazil to study for a semester and that experience
                changed my life. It ignited my passion for travel, setting off a
                journey that has taken me to live in three different countries
                so far. From Argentina to the world!
              </p>
              <p className="mt-4 ml-6">
                Favourite place:
                <b className="mx-6">Jericoacoara, Brazil</b>
              </p>
            </div>

            <div className="inline-flex">
              <a href="https://www.linkedin.com/in/Lumarconi21/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/Lumarconi21" className="ml-2">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
