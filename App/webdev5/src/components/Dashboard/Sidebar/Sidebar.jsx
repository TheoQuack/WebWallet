import { FaTimes, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className="sidebar-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="profile-section">
          <img 
            src="/assets/765-default-avatar.png"  // Updated path - store this in public/assets
            alt="Profile" 
            className="profile-picture"
          />
          <h2 className="username">WALLET</h2>
        </div>
        
        <div className="info-section">
          <div className="info-item">
            <div className="label">Contact Number</div>
            <div className="value">+63 912 345 6789</div>
          </div>
          
          <div className="info-item">
            <div className="label">Email Address</div>
            <div className="value">user@example.com</div>
          </div>
        </div>
        
        <button className="feedback-button">Feedback</button>
        
        <p className="app-description">
          WALL-ET is a centralized online financial platform designed for Philippine users to simplify money management. 
          It offers tools for budgeting, saving, and tracking expenses, empowering users to achieve financial goals 
          with ease and convenience.
        </p>
        
        <button className="logout-button">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;