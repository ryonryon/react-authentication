import * as React from "react";

import { useAuthContext } from "../contexts/AuthContext";
import UserProvider from "./UserProvider";
import LoginPage from "../pages/LoginPage";
import LoggedInPage from "../pages/LoggedInPage";

const AuthenticationRoute = () => {
  const { session } = useAuthContext();
  return session.isLoggeddIn() ? (
    <UserProvider user={session.user}>
      <LoggedInPage />
    </UserProvider>
  ) : (
    <LoginPage />
  );
};

export default AuthenticationRoute;
