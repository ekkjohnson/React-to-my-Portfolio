import "./app.css";
import navTabs from "./components/navTabs";
import about from "./components/pages/about";
import footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <navTabs/>
      <about/>
      <footer/>
    </div>
  );
}