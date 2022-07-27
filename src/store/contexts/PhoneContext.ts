import { createContext } from "react";

interface IPhoneContext {
  phone: string;
  isCall: boolean;
}

const PhoneContext = createContext<IPhoneContext>({ phone: "", isCall: false });

export default PhoneContext;
