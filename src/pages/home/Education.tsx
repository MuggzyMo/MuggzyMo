import { useState } from "react";
import { arrowDown, arrowUp, educationHeader, education } from "./Data";
import List from "../../components/ElementList";

function Education() {
  const [showEdu, setShowEdu] = useState(true);
  4;

  return (
    <div className="p-2">
      {showEdu ? (
        <>
          <h1 className="text-center">{educationHeader}</h1>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowEdu(!showEdu)}
            >
              {arrowDown}
            </h1>
          </div>
        </>
      ) : (
        <>
          <List heading={educationHeader} items={education}></List>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowEdu(!showEdu)}
            >
              {arrowUp}
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Education;
