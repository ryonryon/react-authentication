import * as React from "react";

import AuthContext from "../contexts/AuthContext";
import Session from "../../services/session";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [session, setSession] = React.useState(new Session());

  return (
    <AuthContext.Provider value={{ session: session, setSession: setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
