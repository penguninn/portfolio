import avatar from "../assets/avatar.png";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Macvuanh Dai");

  const skills = [
    "Java",
    "Springboot",
    "Typescript",
    "React",
    "C/C++",
    "Python",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git"
  ];

  const bioData = [
    {
      year: "2022",
      description: "Won the third prize in the Provincial-level Excellent Student Contest."
    },
    {
      year: "2023 to present",
      description: "Currently a student at FPT Edu."
    }
  ];

  const interests = ["Astronomy", "Badminton", "Car modification", "Music"];

  const contacts = [
    {
      icon: <FaEnvelope />,
      text: "davidmva200x@gmail.com",
      link: "mailto:davidmva200x@gmail.com"
    },
    {
      icon: <FaLinkedinIn />,
      text: "david200x",
      link: "https://www.linkedin.com/in/david200x/"
    },
    {
      icon: <FaXTwitter />,
      text: "david200x_",
      link: "https://x.com/david200x_"
    },
    {
      icon: <FaGithub />,
      text: "penguninn",
      link: "https://github.com/penguninn"
    }
  ];

  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      <p className="w-full p-3 mb-5 rounded-md text-center bg-[var(--title-background)]">
        Hello, I'm a software developer in Vietnam!
      </p>
      <div className="w-full mb-5 md:flex p-2 md:items-center">
        <div className="grow">
          <h1 className="text-4xl font-bold">Mac Vu Anh Dai</h1>
          Code Craftsman ( Developer / Designer )
        </div>
        <div className="shrink flex justify-center ml-3 mt-4 md:mt-0">
          <img
            src={avatar}
            alt="Mac Vu Anh Dai"
            className="w-28 h-28 border-2 border-white rounded-full object-contain"
          />
        </div>
      </div>
      <div className="w-full mb-6">
        <h3>About</h3>
        <p>
          I'm a freelancer and a full-stack developer in Vietnam. I enjoy
          building scalable, high-quality web applications and continuously
          exploring new technologies to improve my skills.
        </p>
      </div>
      <div className="w-full mb-6">
        <h3>Skills</h3>
        <div className="flex flex-wrap items-center gap-2">
          {skills.map((skill, index) => (
            <Button 
              key={index}
              size="sm" 
              className="bg-[var(--btn-background)] text-white hover:bg-pink-500"
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
      <div className="w-full mb-6">
        <h3>Check out my work</h3>
        <p>
          I've worked on a variety of projects, from simple websites to complex
          web applications.
        </p>
        <Link to="/projects" className="flex justify-center items-center mt-3">
          <Button className="cursor-pointer bg-[var(--btn-background)] text-white hover:bg-pink-500">
            My favourite work
          </Button>
        </Link>
      </div>
      <div className="w-full mb-6">
        <h3>Bio</h3>
        {bioData.map((item, index) => (
          <div key={index} className="flex justify-start items-center gap-5">
            <h4>{item.year}</h4>
            {item.description}
          </div>
        ))}
      </div>
      <div className="w-full mb-6">
        <h3>Interests</h3>
        <span>{interests.join(", ")}</span>
      </div>
      <div className="w-full mb-6">
        <h3>Contact</h3>
        <p>I'm always excited to connect with fellow developers and tech enthusiasts. Whether you have a project idea, a question, or just want to chat about development, feel free to get in touch.</p>
        <div className="list-none">
          {contacts.map((contact, index) => (
            <div key={index} className="list-item">
              <Link
                to={contact.link}
                target="_blank"
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  className="flex items-center justify-center gap-3 cursor-pointer text-lg text-pink-600 
                hover:text-pink-600 hover:underline hover:bg-transparent"
                >
                  {contact.icon}
                  {contact.text}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <span className="mt-2">Looking forward to hearing from you!</span>
      </div>
    </div>
  );
};
export default Home;
