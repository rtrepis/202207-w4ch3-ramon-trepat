import { useContext } from "react";
import phoneContext from "../../store/contexts/appPhoneContext";
import "./Action.css";

interface ActionProps {
  text: string;
  isActive?: boolean;
}

const Action = ({ text, isActive }: ActionProps): JSX.Element => {
  return (
    <a
      href="a"
      className={`${text.toLowerCase()} ${isActive ? "active" : ""}`}
      onClick={() => {}}
    >
      {text}
    </a>
  );
};

export default Action;
