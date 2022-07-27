import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Display />
      <Action text="Call" />
      <Action text="Hang" isActive />
    </div>
  );
};

export default Actions;
