import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiSemanticuireact,
  SiMysql,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiPhp } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import tindogpic from "../../assets/tindog.png";
import rqgpic from "../../assets/rqg.png";
import citypic from "../../assets/city.png";
import vspic from "../../assets/vs.png";
import chatpic from "../../assets/chat.png";
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
        </div>
      </div>
    </>
  );
};
