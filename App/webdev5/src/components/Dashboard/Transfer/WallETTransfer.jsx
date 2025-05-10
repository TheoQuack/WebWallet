// src/components/Dashboard/Transfer/WallETTransfer.jsx
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { mockUserData } from '../../../mockData';
import './Transfer.css';

const WallETTransfer = () => {
  const navigate = useNavigate();
  
  // Calculate percentage for each category limit
  const categoryLimits = Object.entries(mockUserData.limits.categories).map(([category, amount]) => {
    const used = Math.floor(Math.random() * (amount * 0.9));
    const remaining = amount - used;
    const percentage = (used / amount) * 100;
    
    return { category, limit: amount, remaining, percentage };
  });

  return (
    <div className="transfer-screen-container">
      <button className="back-button" onClick={() => navigate('/dashboard/transfer')}>
        <FaArrowLeft />
        <span>Back</span>
      </button>
      
      <div className="wallet-transfer-content">
        <h1 className="transfer-logo">WALLET</h1>
        <h2 className="transfer-title">TRANSACTION</h2>
        <p className="transfer-subtitle">Fast, secure, and easy e-money transfers!</p>
        
        <div className="split-transfer-container">
          {/* Left Column - Dashboard Content */}
          <div className="transfer-left-column">
            <div className="section">
              <h2 className="section-title">Available Balance</h2>
              <div className="balance">₱{mockUserData.balance.toFixed(2)}</div>
            </div>
            
            <div className="section">
              <h2 className="section-title">Transaction Limits</h2>
              <div className="limit-item">
                <div className="bold-label">Remaining this week</div>
                <div className="bold-amount">₱{mockUserData.limits.weeklyRemaining.toFixed(2)}</div>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ '--width': (mockUserData.limits.weeklyRemaining / 300) * 100 }}
                >
                  <span>{mockUserData.limits.weeklyRemaining.toFixed(2)} of ₱300.00</span>
                </div>
              </div>
              
              <h3 className="sub-section-title">Limit by Category</h3>
              <p className="track-subtitle">Track your Limits</p>
              <div className="category-list">
                {categoryLimits.map(({category, limit, remaining, percentage}) => (
                  <div className="category-item" key={category}>
                    <div className="category-header">
                      <span className="category-name">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                      <span className="category-amount">
                        ₱{remaining.toFixed(2)} of ₱{limit.toFixed(2)}
                      </span>
                    </div>
                    <div className="category-progress">
                      <div className="progress-bar" style={{ '--width': percentage }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Middle Column - Input Fields */}
          <div className="transfer-middle-column">
            <input 
              className="input-field" 
              placeholder="Email" 
              type="email"
            />
            <input 
              className="input-field" 
              placeholder="Contact Number" 
              type="tel"
            />
            <input 
              className="input-field" 
              placeholder="Amount" 
              type="number"
            />
            <input 
              className="input-field" 
              placeholder="Purpose" 
              type="text"
            />
            <button className="transfer-button">
              Transfer
            </button>
          </div>
          
          {/* Right Column - Dashboard Content */}
          <div className="transfer-right-column">
            <div className="section">
              <h2 className="section-title">Target Balance</h2>
              <div className="limit-item">
                <div className="bold-label">Remaining to Goal</div>
                <div className="bold-amount">₱{mockUserData.balance.toFixed(2)}</div>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ '--width': (mockUserData.balance / 300) * 100 }}
                >
                  <span>{mockUserData.balance.toFixed(2)} of ₱300.00</span>
                </div>
              </div>
            </div>
            
            <div className="section">
              <h3 className="sub-section-title">Goal Planner</h3>
              <p className="track-subtitle">Track your Savings</p>
              <div className="circular-progress-container">
                <div className="circular-progress">
                  <div className="circular-progress-text">80%</div>
                </div>
              </div>
            </div>
            
            <div className="section">
              <h3 className="sub-section-title">Goal Detail</h3>
              <div className="goal-detail">
                <div className="goal-item">
                  <div className="goal-title">Camera</div>
                  <div className="goal-target">Target Balance</div>
                  <div className="goal-amount">₱{mockUserData.goals.camera.saved.toFixed(2)}</div>
                </div>
                <div className="goal-item">
                  <div className="goal-title">Others</div>
                  <div className="goal-target">Target Balance</div>
                  <div className="goal-amount">₱150.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallETTransfer;