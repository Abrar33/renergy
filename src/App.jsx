import { useContext } from "react";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import AppRoutes from "./Routes/AppRoutes";
import "./index.css";
import Loader from "./component/layout/loader";
function App() {
  const {loading} = useContext(AuthContext);
if (loading) return <Loader/>;
  return <AppRoutes />;
  
}

export default App;