import React from "react";
import "./Projects.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiFirebase,
  SiSemanticuireact,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiMongodb, DiPhp } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
// import { IoLogoJavascript } from "react-icons/io";
import tindogpic from "../../assets/tindog.png";
import rqgpic from "../../assets/rqg.png";
import citypic from "../../assets/city.png";
import vspic from "../../assets/vs.png";
import chatpic from "../../assets/chat.png";
import crud from "../../assets/crud.png";
import sspic from "../../assets/ss.png";
import ggpic from "../../assets/gg.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={tindogpic} alt="Tindog" />
                </div>
              </div>
              <div className="project_information">
                <h2>Tindog</h2>
                <p>
                  This is a single page application using HTML, CSS and
                  Bootstrap which looks forward to give partners to the dogs.
                  Simply a Tinder for dogs.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <BsBootstrap />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://subhransu02.github.io/tindog/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/tindog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={rqgpic} alt="RANDOM-QUOTE-GENERATOR" />
                </div>
              </div>
              <div className="project_information">
                <h2>RANDOM-QUOTE-GENERATOR</h2>
                <p>
                  This is an application based on HTML, CSS and reactjs, which
                  shows you beautiful quote for your day to be productive.
                </p>
                <div>
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://subhransu02.github.io/random-quote-generator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/random-quote-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={crud} alt="Book-Management" />
                </div>
              </div>
              <div className="project_information">
                <h2>Book Management</h2>
                <p>
                  It is a project which is an application of reactjs, firebase
                  mainly a CRUD application to store the data of books, and keep
                  a record of availabilty.
                </p>
                <div>
                  <FaReact />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://react-crud-c9463.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/BOOK"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={citypic} alt="CITY TOURS" />
                </div>
              </div>
              <div className="project_information">
                <h2>CITY TOURS</h2>
                <p>
                  It is a project which is an application of reactjs,
                  semantic‐ui, firebase mainly a CRUD application to store the
                  data of cities, and show the details like geographical
                  location, population, state, etc.
                </p>
                <div>
                  <FaReact />
                  <SiFirebase />
                  <SiSemanticuireact />
                </div>
                <div>
                  <a
                    href="https://tour-of-city-m28ior60z-subhransu02.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/tour-of-city"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={chatpic} alt="Chatty" />
                </div>
              </div>
              <div className="project_information">
                <h2>Chatty</h2>
                <p>A chat app to connect you with others.</p>
                <div>
                  <FaReact />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://chatty-rust.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/chatty"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={vspic} alt="voting-system" />
                </div>
              </div>
              <div className="project_information">
                <h2>Voting System</h2>
                <p>
                  This is a project which is an application of PHP and MySQL.
                  This is a way to vote from home.
                </p>
                <div>
                  <DiPhp />
                  <SiMysql />
                </div>
                <div>
                  <a
                    href="https://github.com/Subhransu02/voting-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={sspic} alt="mern-estate" />
                </div>
              </div>
              <div className="project_information">
                <h2>Real Estate</h2>
                <p>
                  This is a project which is an application based on MERN and
                  Tailwind CSS. This is a real life real estate app to find rent
                  or sell houses.
                </p>
                <div>
                  <FaReact />
                  <SiFirebase />
                  <DiMongodb />
                  <SiExpress />
                  <FaNodeJs />
                </div>
                <div>
                  <a
                    href="https://mern-estate-i4ri.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/real_estate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={ggpic} alt="google-clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Google Clone</h2>
                <p>
                  This is a project which is an application based on NextJs and
                  Tailwind CSS. This is a Google clone that performs search functionality.
                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://google-clone-subhransu02.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Subhransu02/google-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
