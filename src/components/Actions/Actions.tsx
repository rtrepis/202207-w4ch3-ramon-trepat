import { useContext } from "react";
import phoneContext from "../../store/contexts/appPhoneContext";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = (): JSX.Element => {
  const { phone, isCall } = useContext(phoneContext);

  return (
    <div className="actions">
      <Display phoneString={phone} />
      {phone.length < 9 && !isCall ? <Action text="Call" /> : null}
      {phone.length > 8 && !isCall ? <Action text="Call" isActive /> : null}
      {isCall ? <Action text="Hang" isActive /> : null}
    </div>
  );
};

export default Actions;
