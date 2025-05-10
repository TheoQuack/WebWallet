// src/components/Dashboard/MainContent/LeftColumn.jsx
import { mockUserData } from '../../../mockData';
import './MainContent.css';

const LeftColumn = () => {
  // Calculate percentage for each category limit
  const categoryLimits = Object.entries(mockUserData.limits.categories).map(([category, amount]) => {
    const used = Math.floor(Math.random() * (amount * 0.9));
    const remaining = amount - used;
    const percentage = (used / amount) * 100;
    
    return { category, limit: amount, remaining, percentage };
  });

  return (
    <div className="left-column">
      <div className="white-box">
        <div className="section">
          <h2 className="section-title centered">Available Balance</h2>
          <div className="balance">₱{mockUserData.balance.toFixed(2)}</div>
        </div>

        <div className="split-container">
          <div className="left-split">
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
              <div className="track-subtitle">Track your Limits</div>
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

          <div className="right-split">
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
              
              <h3 className="sub-section-title">Goal Planner</h3>
              <div className="track-subtitle">Track your Savings</div>
              <div className="circular-progress-container">
                <div className="circular-progress">
                  <div className="circular-progress-text">80%</div>
                </div>
              </div>
              
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

export default LeftColumn;