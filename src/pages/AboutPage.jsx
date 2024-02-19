import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Mel from "../assets/mel.jpg"


function AboutPage() {

return (

    <div className="">
    <img src={Mel} className="w-40"/>
    <div className="">
      <h3>Melanie Schiffner</h3>
      <p>
        Love to travel in my old VW van. It's not the most comfortable traveling, but it definetely has style!
        <br /> Favourite place: <b>Wildalpen, Austria</b>
      </p>

      <div className="">
        <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/MelSchiffner">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
    </div>
)
}


export default AboutPage;