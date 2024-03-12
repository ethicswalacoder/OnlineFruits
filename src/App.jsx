import { useEffect } from "react"
import AppBanner from "./components/AppBanner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhereToBuy from "./components/WhereToBuy"
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic"
    });
  }, []);
 

  return (
   <main>
       <Hero/>  
       <Services/>
       <WhereToBuy/>
       <AppBanner/>
       <Footer/>
   </main>
  )
}

export default App
