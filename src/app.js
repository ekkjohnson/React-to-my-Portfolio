import "./app.css";
import React, {useState} from "react";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
// import PortfolioContainer from "./components/portfolioContainer";

export default function App() {

  const [pages] = useState([
    {page:"About"},
    {page:"Work"},
    {page:"Contact"},
    {page:"Resume"},
  ])
  const [currentPage, setCurrentPage] = useState(pages[0]);
  
   const handlePageChange = (page) => {setCurrentPage(page)};
  return (
    <div className="App">
      <NavTabs pages={pages}  currentPage={currentPage} handlePageChange={handlePageChange}/>
      <PortfolioContainer currentPage={currentPage}/>
      <Footer/>
    </div>
  );
}