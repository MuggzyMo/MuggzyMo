interface NestedListProps {
  heading: string;
  titleList: string[];
  detailsList: string[][];
}

function NestedList({
  heading,
  titleList: titleList,
  detailsList: detailsList,
}: NestedListProps) {
  return (
    <div>
      <h1 className="text-center">{heading}</h1>
      <ul className="list-group">
        {titleList.map((title, titleIndex) => (
          <li className="list-group-item list-group-item-dark" key={title}>
            <h4>{title}</h4>
            <ul>
              {detailsList[titleIndex].map((details, detailsIndex) => (
                <li key={detailsIndex}>{details}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NestedList;
