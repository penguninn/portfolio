import avatar from "../../assets/avatar.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Home = () => {
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
            className="size-24 border-2 border-white rounded-full object-cover"
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
        <h3>Work Experience</h3>
        <p className="text-pink-500">Not yet =)))</p>
      </div>
      <div className="w-full mb-6">
        <h3>Skills</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            Java
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            Springboot
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            C++
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            Typescript
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            React
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            MongoDB
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            Docker
          </Button>
          <Button size="sm" className="bg-[var(--btn-background)] text-white">
            Git
          </Button>
        </div>
      </div>
      <div className="w-full mb-6">
        <h3>Check out my work</h3>
        <p>
          I’ve worked on a variety of projects, from simple websites to complex
          web applications.
        </p>
        <Link to="/projects" className="flex justify-center items-center mt-3">
          <Button className="cursor-pointer text-pink-500">
            My favourite work
          </Button>
        </Link>
      </div>
      <div className="w-full mb-6">
        <h3>Bio</h3>
        <div className="flex justify-start items-center gap-5">
          <h4>2005</h4>
          Born in Quang Ninh, Viet Nam.
        </div>
        <div className="flex justify-start items-center gap-5">
          <h4>2023 to present</h4>
          Currently a student at FPT Polytechnic college.
        </div>
      </div>
      <div className="w-full mb-6">
        <h3>I ♥</h3>
        <span>Astronomy, Badminton, Car modification, Muisc</span>
      </div>
      <div className="w-full mb-6">
        <h3>Link</h3>
        <div className="list-none">
          <div className="list-item">
            <Link
              to="https://github.com/penguninn"
              target="_blank"
              className="inline-block"
            >
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-3 cursor-pointer text-lg text-pink-600 
                hover:text-pink-600 hover:bg-pink-300 dark:hover:bg-gray-800"
              >
                <FaGithub />
                @penguninn
              </Button>
            </Link>
          </div>
          <div className="list-item">
            <Link
              to="https://www.linkedin.com/in/david-400b01221/"
              target="_blank"
              className="inline-block"
            >
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-3 cursor-pointer text-lg text-pink-600 
                hover:text-pink-600 hover:bg-pink-300 dark:hover:bg-gray-800"
              >
                <FaLinkedinIn />
                @david
              </Button>
            </Link>
          </div>
          <div className="list-item">
            <Link
              to="https://x.com/NantatsuNo"
              target="_blank"
              className="inline-block"
            >
              <Button
                variant="ghost"
                className="flex items-center justify-center gap-3 cursor-pointer text-lg text-pink-600 
                hover:text-pink-600 hover:bg-pink-300 dark:hover:bg-gray-800"
              >
                <FaXTwitter />
                @david
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mb-6">
        <h3>Contact</h3>
        <p>
          Want to chat? Just shoot me a dm{" "}
          <Link
            target="_blank"
            to="https://x.com/NantatsuNo"
            className="text-blue-500 hover:underline"
          >
            with a direct question on X
          </Link>{" "}
          and I'll respond whenever I can. Otherwise, send me an email to{" "}
          <Link
            target="_blank"
            to="mailto:coolermaster.1082005@gmail.com"
            className="text-blue-500 hover:underline"
          >
            coolermaster.1082005@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Home;
