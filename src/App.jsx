import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GitCalendar from "./components/GitCalender";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="gap-y-5 text-slate-700 bg-slate-800">
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <GitCalendar/>
    <Contact/>

 
    </div>
  );
}

export default App;
