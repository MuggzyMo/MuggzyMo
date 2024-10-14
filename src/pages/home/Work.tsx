import { useState } from "react";
import { arrowDown, arrowUp, workHeader, workName, workDetail } from "./Data";
import NestedList from "../../components/NestedList";

function Work() {
  const [showWork, setShowWork] = useState(true);

  return (
    <div className="p-2">
      {showWork ? (
        <>
          <h1 className="text-center">{workHeader}</h1>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowWork(!showWork)}
            >
              {arrowDown}
            </h1>
          </div>
        </>
      ) : (
        <>
          <NestedList
            heading={workHeader}
            titleList={workName}
            detailsList={workDetail}
          ></NestedList>
          <div className="arrow-center">
            <h1
              className="clickable-arrow"
              onClick={() => setShowWork(!showWork)}
            >
              {arrowUp}
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Work;
