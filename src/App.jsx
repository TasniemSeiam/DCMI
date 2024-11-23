import "./App.css";
// import Home from './pages/Home'
import AppRouters from "./routes/AppRouters";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Preloading } from "./components/Preload";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Whether animation not happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return <>{isLoading ? <Preloading /> : <AppRouters />}</>;
}

export default App;
