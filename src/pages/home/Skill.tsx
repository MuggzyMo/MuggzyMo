import { useState } from "react";
import { arrowDown, arrowUp, skillHeader, skill } from "./Data";
import List from "../../components/ElementList";

function Skill() {
  const [showSkill, setShowSkill] = useState(true);

  return (
    <div className="p-2">
      {showSkill ? (
        <>
          <h1 className="text-center">{skillHeader}</h1>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowSkill(!showSkill)}
            >
              {arrowDown}
            </h1>
          </div>
        </>
      ) : (
        <>
          <List heading={skillHeader} items={skill}></List>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowSkill(!showSkill)}
            >
              {arrowUp}
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Skill;
