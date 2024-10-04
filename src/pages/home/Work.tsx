import { useState } from "react";
import { arrowDown, arrowUp, workHeader, workName, workDetail } from "./Data";
import NestedList from "../../components/NestedList";

function Work() {
  const [showWork, setShowWork] = useState(true);

  return (
    <div className="p-2" onClick={() => setShowWork(!showWork)}>
      {showWork ? (
        <>
          <h1 className="text-center">{workHeader}</h1>
          <h1 className="text-center">{arrowDown}</h1>
        </>
      ) : (
        <>
          <NestedList
            heading={workHeader}
            titleList={workName}
            detailsList={workDetail}
          ></NestedList>
          <h1 className="text-center">{arrowUp}</h1>
        </>
      )}
    </div>
  );
}

export default Work;
