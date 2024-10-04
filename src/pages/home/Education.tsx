import { useState } from "react";
import { arrowDown, arrowUp, educationHeader, education } from "./Data";
import List from "../../components/ElementList";

function Education() {
  const [showEdu, setShowEdu] = useState(true);
  4;

  return (
    <div className="p-2" onClick={() => setShowEdu(!showEdu)}>
      {showEdu ? (
        <>
          <h1 className="text-center">{educationHeader}</h1>
          <h1 className="text-center">{arrowDown}</h1>
        </>
      ) : (
        <>
          <List heading={educationHeader} items={education}></List>
          <h1 className="text-center">{arrowUp}</h1>
        </>
      )}
    </div>
  );
}

export default Education;
