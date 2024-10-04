import { useState } from "react";
import { arrowDown, arrowUp, skillHeader, skill } from "./Data";
import List from "../../components/ElementList";

function Skill() {
  const [showSkill, setShowSkill] = useState(true);

  return (
    <div className="p-2" onClick={() => setShowSkill(!showSkill)}>
      {showSkill ? (
        <>
          <h1 className="text-center">{skillHeader}</h1>
          <h1 className="text-center">{arrowDown}</h1>
        </>
      ) : (
        <>
          <List heading={skillHeader} items={skill}></List>
          <h1 className="text-center">{arrowUp}</h1>
        </>
      )}
    </div>
  );
}

export default Skill;
