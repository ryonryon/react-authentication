import * as React from "react";
import Session from "../../services/session";

interface AuthContextValue {
  session: Session;
  setSession: React.Dispatch<React.SetStateAction<Session>>;
}

const AuthContext = React.createContext(null as AuthContextValue);

export const useAuthContext = () => React.useContext(AuthContext);

export default AuthContext;
