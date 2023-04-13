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
        <h2 className="detial" onClick={jsonHandler}>
          {"const Detail = { "}
        </h2>
        {title ? (
          <div>
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
            <p>{'"Passion": {'}</p>
            <section className="arrayContainer">
              <p>{'"Hobbies": ['}</p>
              <p className="languages"> "Code","Chess","Golf","Baseketball"</p>
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
              <p>{'"Technologies": ['}</p>
              <p className="languages">
                "Postman", "Git", "GitHub", "Bootstrap", "TailWind"
              </p>
              <p>{"]"}</p>
            </section>
            <p className="indentation">{"}"}</p>
            <h2>{"}"} </h2>
          </div>
        ) : null}
      </section>{" "}
    </>
  );
};

export default About;
