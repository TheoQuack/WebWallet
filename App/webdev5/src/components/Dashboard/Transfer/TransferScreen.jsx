// src/components/Dashboard/Transfer/TransferScreen.jsx
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Transfer.css';

const TransferScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="transfer-screen-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <FaArrowLeft />
        <span>Back</span>
      </button>
      
      <div className="transfer-content">
        <h2 className="transfer-title">Transaction Option</h2>
        <p className="transfer-subtitle">Send money securely to any bank with ease!</p>
        
        <div className="transfer-options">
          <button 
            className="transfer-option" 
            onClick={() => navigate('/dashboard/transfer/wallet')}
          >
            <div className="option-logo">Wall-ET</div>
          </button>
          <button 
            className="transfer-option" 
            onClick={() => navigate('/dashboard/transfer/banks')}
          >
            <div className="option-logo">Other Banks</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferScreen;