import * as React from "react";

import UserContext from "../contexts/UserContext";
import UserModel from "../../models/User";

interface Props {
  children: React.ReactNode;
  user: UserModel | null;
}

const UserProvider = ({ children, user }: Props) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
