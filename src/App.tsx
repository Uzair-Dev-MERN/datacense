import { AuthProvider, useAuth } from "./context/AuthContext";
import { AppRoutes } from "./routes/router";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
