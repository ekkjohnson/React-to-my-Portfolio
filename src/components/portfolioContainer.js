import React, { useState } from 'react';
import NavTabs from './navTabs';
import About from './pages/About';
import Work from './pages/work';
import Contact from './pages/contact';
import Resume from './pages/resume'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'Contact'){
        return <Contact />;
      } 
      return <Resume />
    };
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
    );
  }