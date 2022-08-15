import Image from "next/image";

import Layout from "../components/layouts/Layout";
import classes from "../styles/Projects.module.css";
import mhtts from "../components/assets/mhtts.png";
import cwf from "../components/assets/cwf.png";
import hmp from "../components/assets/hmp.png";
import ccp from "../components/assets/CCP.png";
import ccf from "../components/assets/CCF.png";
import acms from "../components/assets/ACMS.png";

const Projects = () => {
  return (
    <Layout>
      <div className={classes.control}>
        <h1 className={classes["pg-title"]}>Projects</h1>
        <p className={classes["title-desc"]}>
          I&apos;m an avid learner of technology. I use project-based learning
          to improve my skillset by implementing learned programming concepts in
          a real-world environment. Here are my recent{" "}
          <span className={classes["title-desc1"]}>projects</span>.
        </p>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/cwf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={cwf}
                  alt="CyWeather Weather Forecast"
                  priority="true"
                />
              </div>
              <h2>CyWeather Weather Forecast</h2>
              <p>
                A coding challenge to portray my practical skills given a
                real-world problem. The main objective of this project is to
                create a simple HOURLY weather forecast app. Technologies used
                include Figma, React.js, and CSS3.
              </p>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/my-portfolio-website-next-js-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={hmp}
                  alt="Hillary Mongare Portfolio"
                  priority="true"
                />
              </div>
              <h2>Portfolio Website</h2>
              <p>
                A portfolio website to showcase my skills and recent projects.
                Technologies used include Figma, Next.js, CSS3, and Flask.
              </p>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://momshavethistosay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={mhtts}
                  alt="Moms Have This To Say"
                  priority="true"
                />
              </div>
              <h2>Moms Have This To Say</h2>
              <p>
                A landing page of the &apos;Moms Have This To Say&apos; company
                based in Maui, Hawaii. The technologies used include Figma,
                Next.js, CSS3, Firebase, and Flask.
              </p>
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Currency-Converter-CLI-Application-PyInquirer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={ccp}
                  alt="Currency Converter (PyInquirer)"
                  priority="true"
                />
              </div>
              <h2>Currency Converter (PyInquirer)</h2>
              <p>
                A CLI application whos main objective is to convert some
                currencies using the latest rates. The technologies used include
                Python3, PyInquirer Library, and Pytest.
              </p>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Currency-Converter-CLI-Application-Fire-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={ccf}
                  alt="Currency Converter (Python Fire)"
                  priority="true"
                />
              </div>
              <h2>Currency Converter (Python Fire)</h2>
              <p>
                A CLI application whos main objective is to convert some
                currencies using the latest rates. The technologies used include
                Python3, Python Fire, and Pytest.
              </p>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Accommodation_Complaints_Management_System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes["project-img"]}>
                <Image
                  width={350}
                  height={200}
                  src={acms}
                  alt="Accommodation Complaints Management System"
                  priority="true"
                />
              </div>
              <h2>Accommodation Complaints Management System</h2>
              <p>
                A system to replace the current manual system of students
                physically going to the Halls Department and dropping their
                complaints at the Complaints Register. The technologies used
                include HTML5, CSS3, Vanilla Javascript, MySQL, Spring Boot, and
                Java.
              </p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
