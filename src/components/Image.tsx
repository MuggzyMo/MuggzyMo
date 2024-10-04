interface ImageProps {
  classNameString: string;
  source: string;
}

function Image({ classNameString: classString, source }: ImageProps) {
  return <img src={source} className={classString} style={{ width: "25vw" }} />;
}

export default Image;
