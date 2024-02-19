import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Mel from "../assets/mel.jpg"
import Lu from "../assets/lu.jpg"


function AboutPage() {

  return (
    <>
      <h3 className="text-2xl font-semibold text-center mt-12 mx-6 lg:mt-24">"Travelling leaves you speachless, then turns you into a storyteller"</h3>
      <p className="text-xl px-12 py-12 lg:px-80 lg:py-20 text-center">Driven by our shared passion for travel and technology, we join forces to embark on our latest endeavor:
        an app that showcases the breathtaking beauty of different places around the world.
        <br />
        Our aim is to gather a collection of amazing destinations that transport
        users to far-off lands with a single click. From the snow-capped peaks of the Swiss Alps to the sun-kissed shores of Bali,
        every place tells a story, weaving a tapestry of experiences that beckon the curious and the adventurous alike.
      </p>

      <div className="flex justify-center gap-12 flex-wrap flex-auto lg:min-w-full ">

        <div> /
          <div className="">
            <img src={Mel} className="w-36 h-50" />
          </div>
          <div className="">
            <h3 className="text-center text-xl font-semibold">Melanie Schiffner</h3>
            <p className="mt-4">
              Love to travel in my old VW van. It's not the most comfortable traveling, but it definetely has style!
              <br /> Favourite place: <b className="mx-12">Wildalpen, Austria</b>
            </p>
          </div>
          <div className="inline-flex mx-64 my-12">
            <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/MelSchiffner">
              <FaGithub size={30} />
            </a>
          </div>
        </div>


        <div className="">
          <div className="">
            <img src={Lu} className="w-36 h-50" />
          </div>
          <div>
            <h3 className="text-center text-xl font-semibold">Lucía Marconi</h3>
            <p className="mt-4">
              I went to Brazil to study for a semester and that experience changed my life. It ignited my passion for travel,
              <br />
              setting off a journey that has taken me to live in three different countries so far.
              From Argentina to the world!</p>
            <br /> Favourite place: <b className="mx-12">Mallorca, Spain</b>

          </div>

          <div className="inline-flex mx-64 my-12">
            <a href="https://www.linkedin.com/in/Lumarconi21/">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Lumarconi21">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutPage;