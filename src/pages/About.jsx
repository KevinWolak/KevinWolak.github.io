import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [title, setTitle] = useState(false);

  const jsonHandler = () => {
    setTitle(!title);
  };

  return (
    <>
      <section className="about">
        <h2 className="static-txt">I'm a</h2>
        <div className="wrapper">
          <ul className="dynamic-txts">
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Designer</span>
            </li>
            <li>
              <span>Problem Solver</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="container">
        <div class="container-bg"></div>
        <h2 className="detial" onClick={jsonHandler}>
          {"const clickMe = { "}
        </h2>
        <div className={title ? "json-object show animate" : "json-object"}>
          {title ? (
            <div className="visible">
              <p>{'"basicInfo": {'}</p>
              <section className="arrayContainer">
                <p>"firstName": "Kevin",</p>
                <p>"lastName": "Wolak",</p>
                <p>"age": 26</p>
              </section>
              <p>{"}"},</p>
              <p>{'"location": {'}</p>
              <section className="arrayContainer">
                <p>"city": "London",</p>
                <p>"province": "Ontario"</p>
              </section>
              <p>{"}"},</p>
              <p>{'"contact": {'}</p>
              <section className="arrayContainer">
                <p>"number": "519-694-6925",</p>
                <p>"email": "kevinwolak96@gmail.com"</p>
              </section>
              <p>{'"passion": {'}</p>
              <section className="arrayContainer">
                <p>{'"hobbies": ['}</p>
                <p className="languages">
                  {" "}
                  "Code", "Chess", "Golf", "Basketball"
                </p>
                <p>{"]"}</p>
              </section>
              <p>{"}"},</p>
              <p>{'"skills": {'}</p>
              <section className="arrayContainer">
                <p>{'"languanges": ['}</p>
                <p className="languages">
                  "CSS", "HTML", "JavaScript", "React.js", "Express.js", "C",
                  "C++", C#, "Cobol"
                </p>
                <p>{"]"},</p>
                <p>{'"technologies": ['}</p>
                <p className="languages">
                  "Postman", "Git", "GitHub", "Bootstrap", "TailWind"
                </p>
                <p>{"]"}</p>
              </section>
              <p className="indentation">{"}"}</p>
              <h2 className="lastBracket">{"}"} </h2>
            </div>
          ) : null}
        </div>
      </section>{" "}
    </>
  );
};

export default About;
