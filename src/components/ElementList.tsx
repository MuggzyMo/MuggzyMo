interface ElementListProps {
  items: JSX.Element[];
  heading: string;
}

function List({ items, heading }: ElementListProps) {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <h1 className="text-center">{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item list-group-item-dark" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
