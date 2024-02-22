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
        className="text-md px-12 py-12 text-center mb-6
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
        className="flex gap-10 flex-col items-center"
      >

        <div className="bg-green-100 shadow-lg border-solid border rounded-xl p-6 flex flex-col items-center gap-2  w-10/12 lg:items-start lg:flex-row lg:w-10/12">

          <img
            src={Mel}
            className="w-3/4 shadow-lg border-solid border rounded-xl lg:w-64 lg:aspect-ratio: 1 / 1"
          />

          <div className="flex flex-col items-center gap-4" >
            <h3
              className="text-center text-lg font-semibold 
              lg:text-2xl"
            >
              Melanie Schiffner
            </h3>
            <p
              className="mt-4 text-sm
              lg:text-xl lg:w-5/6"
            >
              I love to travel in my old VW van and discover the world. It's
              not the most comfortable traveling, but it definetely has style!
              It is also a wonderful experience to see how people react to the
              van and tell me stories about their van they used to have a long
              time ago
            </p>
            <p className="mt-4 lg:text-xl">
              Favourite place:
              Wildalpen, Austria
            </p>
          </div>

          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
              <FaLinkedin className="size-6 lg:size-8" />
            </a>
            <a href="https://github.com/MelSchiffner">
              <FaGithub className="size-6 lg:size-8" />
            </a>
          </div>
        </div>

        <div className="bg-green-100 shadow-lg border-solid border rounded-xl p-6 flex flex-col items-center gap-2 w-10/12 lg:gap-6 lg:items-start lg:flex-row lg:w-10/12">
          <img
            src={Lu}
            className="w-3/4 shadow-lg border-solid border rounded-xl lg:w-64 lg:aspect-ratio: 1 / 1"
          />
          <div className="flex flex-col items-center gap-4">
            <h3
              className="text-center text-lg font-semibold 
              lg:text-2xl lg:"
            >
              Lucía Marconi
            </h3>
            <p
              className="mt-4 text-sm
              lg:text-xl lg:w-5/6"
            >
              I went to Brazil to study for a semester and that experience
              changed my life. It ignited my passion for travel, setting off a
              journey that has taken me to live in three different countries
              so far. From Argentina to the world!
            </p>
            <p className="mt-4 lg:text-xl">
              Favourite place:
              Jericoacoara, Brazil
            </p>
          </div>

          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/Lumarconi21/">
              <FaLinkedin className="size-6 lg:size-8" />
            </a>
            <a href="https://github.com/Lumarconi21">
              <FaGithub className="size-6 lg:size-8" />
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutPage;
