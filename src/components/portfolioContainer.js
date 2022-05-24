
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer({currentPage}) {

    const renderPage = () => {
      switch (currentPage.page) {
        case 'About': 
          return <About />;
          break;
          case 'Work': 
          return <Work />;
          break;
          case 'Contact': 
          return <Contact />;
          break;
          case 'Resume': 
          return <Resume />;
          break;
      }
    };
    return (
      <div>
        {renderPage()}
      </div>
    );
  }