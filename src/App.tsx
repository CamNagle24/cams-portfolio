import { useState } from "react";
import "./style.css";
import "./mediaqueries.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        <div className="logo">Cameron Nagle</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Nav */}
      <nav id="hamburger-nav">
        <div className="logo">Cameron Nagle</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${isOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/CamPic.png" alt="Cameron Profile Picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Cameron Nagle</h1>
        <p className="section__text__p2">Comp Sci Major/UX Minor</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/Cameron Nagle Resume.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/cameron-nagle01/")
            }
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.open("https://github.com/CamNagle24")}
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/Cam_Pic2.jpg"
            alt="profile"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-container">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience"
                className="icon"
              />
              <h3>Relevant Coursework</h3>
              <p>
                Algorithms and Data Structures<br />
                Interaction Design<br />
                Internet Programming<br />
                Service Design<br />
                User Experience in Design
              </p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                University of Minnesota<br />
                B.S. in Computer Science<br />
                Minor: UX Design<br />
                Graduation: May, 2026
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a current Comp Sci Major & UX Minor at the University of
              Minnesota - Twin Cities. I love learning about web design and
              creating fun digital products. Seeking Software
              Development/UX Opportunities.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=html">
                  <img src="./assets/HtmlLogo.jpg" alt="HTML" className="icon" />
                </a>
                <div>
                  <h3>HTML</h3>
                  <p>Learning</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=css">
                  <img src="./assets/CSSLogo.png" alt="CSS" className="icon" />
                </a>
                <div>
                  <h3>CSS</h3>
                  <p>Learning</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24/Range-Slider">
                  <img
                    src="./assets/JavaScriptLogo.png"
                    alt="JS"
                    className="icon"
                  />
                </a>
                <div>
                  <h3>JavaScript</h3>
                  <p>Learning</p>
                </div>
              </article>
              <article>
                <a href="https://www.figma.com/design/...">
                  <img src="./assets/figmaIcon.png" alt="Figma" className="icon" />
                </a>
                <div>
                  <h3>Figma</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=java">
                  <img src="./assets/JavaLogo.png" alt="Java" className="icon" />
                </a>
                <div>
                  <h3>Java</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=c%2B%2B">
                  <img src="./assets/C++Logo.png" alt="C++" className="icon" />
                </a>
                <div>
                  <h3>C++</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=c">
                  <img src="./assets/CLogo.png" alt="C" className="icon" />
                </a>
                <div>
                  <h3>C</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=python">
                  <img
                    src="./assets/PythonLogo.jpeg"
                    alt="Python"
                    className="icon"
                  />
                </a>
                <div>
                  <h3>Python</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <a href="https://github.com/CamNagle24?tab=repositories&language=ocaml">
                  <img
                    src="./assets/OCamlLogo.jpeg"
                    alt="OCaml"
                    className="icon"
                  />
                </a>
                <div>
                  <h3>OCaml</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Wordle",
      img: "./assets/Wordle-Kinda-Long.png",
      github: "https://github.com/CamNagle24/Wordle",
      demo: "https://youtu.be/M_KFGMcOTA4",
    },
    {
      title: "Bitwise Puzzle",
      img: "./assets/BitShift.jpeg",
      github: "https://github.com/CamNagle24/Bitwise-Puzzle",
      demo: "https://www.youtube.com/watch?v=hAHwhz35-9w",
    },
    {
      title: "Range Slider",
      img: "./assets/Range-Slider.png",
      github: "https://github.com/CamNagle24/Range-Slider",
      demo: "https://range-slider24.netlify.app/",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((proj, i) => (
            <div key={i} className="details-container color-container">
              <div className="article-container">
                <img src={proj.img} alt={proj.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                {proj.title}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(proj.github)}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(proj.demo)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:camnag01@gmail.com">camnag01@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/cameron-nagle01">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 Cameron Nagle. All Rights Reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}