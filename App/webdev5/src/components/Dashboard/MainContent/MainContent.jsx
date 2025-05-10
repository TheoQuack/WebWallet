// src/components/Dashboard/MainContent/MainContent.jsx
import HamburgerButton from './HamburgerButton';
import './MainContent.css';

const MainContent = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
      <HamburgerButton onClick={toggleSidebar} />
      <div className="content-columns">
        {children}
      </div>
    </div>
  );
};

export default MainContent;