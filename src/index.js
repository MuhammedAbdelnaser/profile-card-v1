import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList name="HTML + CSS" emojy="" bgcolor="red" />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="cardImage">
      <img src="me.jpg" alt="Me" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Muhammed Abdelnaser</h1>
      <p>
        Highly motivated front-end developer with less than 1 year of experience
        specializing in creating dynamic and user-friendly websites. Skilled in
        HTML, CSS, JavaScript, Typescript, Next.js,and React.
      </p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="red" />
      <Skill skill="JavaScript" emoji="💪" color="blue" />
      <Skill skill="Next.js" emoji="👶" color="green" />
      <Skill skill="React" emoji="💪" color="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
