import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

import Layout from "../components/layouts/Layout";
import skills from "../components/assets/code.png";
import classes from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <Layout>
      <div className={classes.control2}>
        <div className={classes.skills}>
          <Image
            src={skills}
            layout="responsive"
            alt="Hillary Oyaro Mongare Skills"
          />
        </div>
      </div>
      <div className={classes.control}>
        <div className={classes.experience}>
          <h1>Experience</h1>
          <p>
            As for me everyday is a learning experience. It’s impossible to know
            everthing but I get to practice on my craft as much as possible.{" "}
          </p>
          <p>Here are the technologies that I’ve been working with recently;</p>
          <div className={classes["skills-list"]}>
            <div className={classes["skills-list-item"]}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ES6+</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Figma</li>
              <li>Netlify</li>
              <li>Vercel</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>Python3</li>
              <li>Flask</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>PHP</li>
              <li>CodeIgniter4</li>
              <li>Android</li>
              <li>Heroku</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>Git</li>
              <li>CircleCI</li>
              <li>Docker</li>
            </div>
          </div>
          <p className={classes.recommendation}>
            If you would like to know more about me or are simply curious feel
            free to download my CV or get in touch.
          </p>
          <br></br>
          <a
            className={classes.actions}
            href="https://drive.google.com/file/d/1CS1n0HFy_8hC0sNulzGp5vD6Y43RwFLi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <span className={classes.icon}>
              <FaFileDownload />
            </span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
