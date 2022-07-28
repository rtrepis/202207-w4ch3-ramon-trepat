import phoneContext from "../../store/contexts/appPhoneContext";
import IPhoneContext from "../../types/interfaces";

interface PhoneProvaiderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneProvaider = ({ children }: PhoneProvaiderProps): JSX.Element => {
  const phoneInitial: IPhoneContext = {
    phone: "1234556789",
    isCall: true,
  };

  return (
    <phoneContext.Provider value={phoneInitial}>
      {children}
    </phoneContext.Provider>
  );
};

export default PhoneProvaider;
