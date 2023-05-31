import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb, DiPhp, DiGit } from "react-icons/di";
import { SiJavascript, SiMysql, SiFirebase,SiPostman,SiSemanticuireact } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>JS</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <DiGit />
            <h5>Git</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>Wp</h5>
          </div>
          <div>
            <DiPhp />
            <h5>PHP</h5>
          </div>
          <div>
            <SiMysql />
            <h5>Mysql</h5>
          </div>
          <div>
            <SiSemanticuireact />
            <h5>Sui</h5>
          </div>
        </div>
      </div>
    </>
  );
};
