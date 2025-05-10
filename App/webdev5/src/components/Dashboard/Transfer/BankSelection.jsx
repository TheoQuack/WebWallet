// src/components/Dashboard/Transfer/BankSelection.jsx
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Transfer.css';

const BankSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="transfer-screen-container">
      <button className="back-button" onClick={() => navigate('/dashboard/transfer')}>
        <FaArrowLeft />
        <span>Back</span>
      </button>
      
      <div className="transfer-content">
        <h2 className="transfer-title">Select E-Wallet</h2>
        <p className="transfer-subtitle">Choose your preferred e-wallet service</p>
        
        <div className="transfer-options">
          <div className="transfer-option">
            <div className="option-logo">GCash</div>
          </div>
          <div className="transfer-option">
            <div className="option-logo">Maya</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSelection;