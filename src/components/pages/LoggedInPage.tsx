import * as React from "react";

import { useUserContext } from "../contexts/UserContext";
import { useAuthContext } from "../contexts/AuthContext";
import Session from "../../services/session";

const LoggedInPage = () => {
  const user = useUserContext();
  const { setSession } = useAuthContext();
  return (
    <>
      <h1>{user.email}</h1>
      <p>{user.password}</p>
      <button
        onClick={() => {
          setSession(prevSessioon => {
            prevSessioon.logOut();
            return new Session();
          });
        }}
      >
        sign out
      </button>
    </>
  );
};

export default LoggedInPage;
