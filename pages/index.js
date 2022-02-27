import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import hillary from "../components/assets/hillary-oyaro-mongare.jpeg";
import Layout from "../components/layouts/Layout";
import classes from "../styles/Index.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={classes.control2}>
        <div className={classes.control3}>
          <div className={classes.hillary}>
            <Image src={hillary} alt="Hillary" priority="true" />
          </div>
          <p>
            <i>“Design is intelligence made visible.” --Alina Wheeler</i>
          </p>
        </div>
      </div>
      <div className={classes.control}>
        <div className={classes.text1}>Hi there, I&apos;m</div>
        <div className={classes.name}>Hillary Mongare.</div>
        <div className={classes.title}>
          <span className={classes["title-name"]}>Full Stack Developer</span>
          &nbsp;
          <span className={classes["title-description"]}>
            ready to turn your ideas into functional &amp; beautiful
            experiences.
          </span>
        </div>
        <Link href="/experience" passHref>
          <button>
            More about me
            <span className={classes.icon}>
              <BsArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
