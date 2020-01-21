import * as React from "react";

import AuthContext, { AuthContextValue } from "../contexts/AuthContext";
import Session from "../../services/session";

const LoginPage = () => {
  const { setSession } = React.useContext<AuthContextValue>(AuthContext);
  return (
    <>
      <div>need log in</div>
      <button
        onClick={() => {
          setSession(() => {
            const session = new Session();
            session.logIn("ryo.togashi.ca@gmail.com", "testpassword");
            return session;
          });
        }}
      >
        click
      </button>
    </>
  );
};

export default LoginPage;
