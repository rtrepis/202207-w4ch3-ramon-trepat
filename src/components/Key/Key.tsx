import "./Key.css";

interface KeyPropos {
  text: string;
  isBig?: boolean;
}

const Key = ({ text, isBig }: KeyPropos): JSX.Element => {
  return (
    <>
      <li>
        <button className={`key ${isBig ? "big" : ""}`}>{text}</button>
      </li>
    </>
  );
};

export default Key;
