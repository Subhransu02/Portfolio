import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/SubhransuSekharPanda.jpg";
import {
  SiCodechef,
  SiLeetcode
} from "react-icons/si";
const thisIsMyCopy = "https://www.codechef.com/users/subhransu_02";
const thisIsMyCopy1 = "https://leetcode.com/Subhransu_02";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Subhransu Sekhar Panda </span> and I
                am from{" "}
                <span className="different"> Koraput, Odisha (India)</span>. I
                am currently pursuing BTech (Computer Science and Engineering)
                at{" "}
                <span className="different">
                  Veer Surendra Sai University Of Technology, Burla, Sambalpur
                  (O)
                </span>
              </h4>
              <div className="coding-profile">
              <div>
                <SiCodechef />
                <h5><a href={thisIsMyCopy}>Codechef</a> </h5>
                
              </div>
              <div>
                <SiLeetcode />
                <h5><a href={thisIsMyCopy1}>Leetcode</a></h5>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};
