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
            <p>{'"Basic Info":{'}</p>
            <section className="arrayContainer">
              <p>"firstName": "Kevin",</p>
              <p>"lastName": "Wolak",</p>
              <p>"Age": "26",</p>
            </section>
            <p>{"}"},</p>
            <p>{'"Location":{'}</p>
            <section className="arrayContainer">
              <p>"City": "London",</p>
              <p>"Province": "Ontario"</p>
            </section>
            <p>{"}"},</p>
            <p>{'"Contact":{'}</p>
            <section className="arrayContainer">
              <p>"Number": "519-694-6925",</p>
              <p>"Email": "kevinwolak96@gmail.com"</p>
            </section>
            <p>{"}"},</p>
            <p>{'"Skills":{'}</p>
            <section className="arrayContainer">
              <p>{'"Languanges":['}</p>
              <p>CSS,HTML,JavaScript,React.js,Express.js,C,C++,C#,Cobol</p>
              <p>{"]"},</p>
              <p>{'"Technologies":['}</p>
              <p>Postman,Git,GitHub,Boostrap,TailWind</p>
              <p>{"}"},</p>
            </section>
            <h2 className="endBracket">{"}"} </h2>
          </div>
        ) : null}
      </section>{" "}
    </>
  );
};

export default About;
