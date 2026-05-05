import { useContext } from "react";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import AppRoutes from "./Routes/AppRoutes";
import "./index.css";
import Loader from "./component/layout/loader";
import { Toaster } from 'react-hot-toast';
function App() {
  const {loading} = useContext(AuthContext);
if (loading) return <Loader/>;

  return(

  
  <>
  <Toaster position="top-right" reverseOrder={false} />
   <AppRoutes />;
  </>
  )
}

export default App;