import * as React from "react";
import User from "../../models/User";

const UserContext = React.createContext(null as User);

export const useUserContext = () => React.useContext(UserContext);

export default UserContext;
