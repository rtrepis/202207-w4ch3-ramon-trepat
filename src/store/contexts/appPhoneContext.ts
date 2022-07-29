import { createContext } from "react";
import IPhoneContext from "../../types/interfaces";

const phoneContext = createContext<IPhoneContext>({
  phone: "",
  isCall: false,
});

export default phoneContext;
