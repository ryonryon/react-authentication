import * as React from "react";

import AuthProvider from "./Routes/AuthProvider";
import AuthenticationRoute from "./Routes/AuthenticationRoute";

const App = () => {
  return (
    <AuthProvider>
      <AuthenticationRoute />
    </AuthProvider>
  );
};

export default App;
