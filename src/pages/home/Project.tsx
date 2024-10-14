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
    <>
      <div className="p-2">
        {showProject ? (
          <>
            <h1 className="text-center">{projectHeader}</h1>
            <div className="arrow-center">
              <h1
                className="clickable-arrow"
                onClick={() => setShowProject(!showProject)}
              >
                {arrowDown}
              </h1>
            </div>
          </>
        ) : (
          <>
            <NestedList
              heading={projectHeader}
              titleList={projectName}
              detailsList={projectDetail}
            ></NestedList>
            <div className="arrow-center">
              {" "}
              <h1
                className="clickable-arrow"
                onClick={() => setShowProject(!showProject)}
              >
                {arrowUp}
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Project;
