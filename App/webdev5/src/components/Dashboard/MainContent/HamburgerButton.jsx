// src/components/Dashboard/MainContent/HamburgerButton.jsx
import './MainContent.css';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`hamburger-button ${isOpen ? 'open' : ''}`} 
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;