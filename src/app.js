import "./app.css";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <NavTabs/>
      <About/>
      <Footer/>
    </div>
  );
}