import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

import logo from "../../public/hillary-oyaro-mongare-logo.jpg";

const Header = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="logo">
        <Link href="/" passHref>
          <Image src={logo} width={106} height={101} alt="Hillary Logo" />
        </Link>
      </div>
      <label htmlFor="btn" className="icon">
        <FaBars />
      </label>
      <input type="checkbox" id="btn" />
      <ul>
        <li>
          <Link href="/" passHref>
            <a className={router.pathname == "/" ? "active" : ""}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/experience" passHref>
            <a className={router.pathname == "/experience" ? "active" : ""}>
              Experience
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <a className={router.pathname == "/projects" ? "active" : ""}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Hire Me
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
