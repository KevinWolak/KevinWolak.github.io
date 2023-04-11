import "./Project.css";
import academy from "../img/academy.png";
import fitforyou from "../img/fitforyou.png";
import gitlogo from "../img/github-mark.png";

const Project = () => {
  return (
    <div className="card-container">
      <a href="https://github.com/KevinWolak/martinWolakAcademyClient">
        <div className="card">
          <div className="card-header">
            <img src={academy} alt="nerdImage" />
          </div>
          <div className="card-body">
            <p>
              <span className="text-bold">MartinWolakAcademy</span> is an online
              tutoring platform designed to cultivate the fundamentals of
              lifelong learning, behavior, and health. This project,
              commissioned by a start-up company, utilizes a robust tech stack
              consisting of React.js, Express.js, CSS and PostgreSQL. The
              platform is set to launch by the end of June 2023, with the goal
              of providing an engaging and effective online learning experience.
            </p>
            <img src={gitlogo} alt="nerdImage" className="logo" />
          </div>
        </div>
      </a>
      <a href="https://github.com/KevinWolak/ReactFitForYou">
        <div className="card">
          <div className="card-header">
            <img src={fitforyou} alt="nerdImage" />
          </div>
          <div className="card-body">
            <p>
              <span className="text-bold">FitForYou</span> is a fitness
              application that I developed as a personal project after using a
              commercial fitness app and realizing that I could develop a
              similar application on a smaller scale. FitForYou enables me to
              track my weights and monitor the progress of my fitness regimen on
              a weekly basis. The technology stack that supports FitForYou
              consists of React with TypeScript, Tailwind CSS, Express.js, and
              PostgreSQL.
            </p>
            <img src={gitlogo} alt="nerdImage" className="logo" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
