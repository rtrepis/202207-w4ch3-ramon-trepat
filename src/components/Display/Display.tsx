import "./Display.css";

interface DisplayProps {
  phoneString?: string;
}

const Display = ({ phoneString }: DisplayProps): JSX.Element => {
  return <span className="number">{phoneString}</span>;
};

export default Display;
