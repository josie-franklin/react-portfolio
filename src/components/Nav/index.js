import React from "react";
import resume from "../../assets/resume2022.pdf";

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <nav>
      <ul>
        <li>
          <a
            className={`moon-flower ${aboutSelected && "nav-focus"}`}
            href="#about"
            onClick={() => {
              setAboutSelected(true);
              setWorkSelected(false);
              setContactSelected(false);
            }}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className={`moon-flower ${workSelected && "nav-focus"}`}
            href="#work"
            onClick={() => {
              setAboutSelected(false);
              setWorkSelected(true);
              setContactSelected(false);
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={`moon-flower ${contactSelected && "nav-focus"}`}
            href="#contact"
            onClick={() => {
              setAboutSelected(false);
              setWorkSelected(false);
              setContactSelected(true);
            }}
          >
            Contact Me
          </a>
        </li>
        <li>
          <a
            className="moon-flower"
            download="josie-franklin-resume"
            href={resume}
          >
            Resumé
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
