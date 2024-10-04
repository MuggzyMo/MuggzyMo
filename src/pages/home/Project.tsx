import { useState } from "react";
import {
  arrowDown,
  arrowUp,
  projectHeader,
  projectName,
  projectDetail,
} from "./Data";
import NestedList from "../../components/NestedList";

function Project() {
  const [showProject, setShowProject] = useState(true);

  return (
    <div className="p-2" onClick={() => setShowProject(!showProject)}>
      {showProject ? (
        <>
          <h1 className="text-center">{projectHeader}</h1>
          <h1 className="text-center">{arrowDown}</h1>
        </>
      ) : (
        <>
          <NestedList
            heading={projectHeader}
            titleList={projectName}
            detailsList={projectDetail}
          ></NestedList>
          <h1 className="text-center">{arrowUp}</h1>
        </>
      )}
    </div>
  );
}

export default Project;
