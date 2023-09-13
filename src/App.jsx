import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <main style={{ fontFamily: "Avenir" }}>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
