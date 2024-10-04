import IntialInfo from "./InitialInfo";
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";
import Work from "./Work";

function App() {
  return (
    <div
      className="d-flex flex-column mb-3 p-2 bg-secondary text-dark"
      style={{ minHeight: "100vh" }}
    >
      <div className="p-2" style={{ marginBottom: "7%" }}>
        <IntialInfo></IntialInfo>
      </div>
      <Education></Education>
      <hr className="my-4" style={{ borderWidth: "3px" }} />
      <Skill></Skill>
      <hr className="my-4" style={{ borderWidth: "3px" }} />
      <Project></Project>
      <hr className="my-4" style={{ borderWidth: "3px" }} />
      <Work></Work>
    </div>
  );
}

export default App;
