import "./App.css";
// import Home from './pages/Home'
import AppRouters from "./routes/AppRouters";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Whether animation not happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return (
    <>
      <AppRouters />
    </>
  );
}

export default App;
