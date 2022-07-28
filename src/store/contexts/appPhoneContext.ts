import { createContext } from "react";
import IPhoneContext from "../../types/interfaces";

const phoneContext = createContext<IPhoneContext>({
  phone: "12345678",
  isCall: false,
});

export default phoneContext;
