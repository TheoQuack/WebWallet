// src/components/Dashboard/MainContent/RightColumn.jsx
import { FaMoneyBillWave, FaPiggyBank, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { mockUserData } from '../../../mockData';
import './MainContent.css';

const RightColumn = () => {
  const navigate = useNavigate();

  return (
    <div className="right-column">
      <div className="action-buttons">
        <button 
          className="action-button" 
          onClick={() => navigate('/dashboard/transfer')}
        >
          <FaMoneyBillWave /> Transfer
        </button>
        <button className="action-button">
          <FaPiggyBank /> Set Goal and Limit
        </button>
      </div>

      <div className="white-box">
        <div className="section">
          <h2 className="section-title">Progress</h2>
          <div className="progress-chart">
            <FaChartLine size={24} />
            <div className="day-indicators">
              <div className="day active">1</div>
              <div className="day">2</div>
              <div className="day">3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scrollable-white-box">
        <div className="section">
          <h2 className="section-title">History</h2>
          <div className="history-container">
            {mockUserData.history.map((item, index) => (
              <div className="history-item" key={index}>
                <div className="history-date">{item.date}</div>
                <div className="history-content">
                  <div className={`transaction-type ${item.type.toLowerCase()}`}>
                    {item.type.toUpperCase()}
                  </div>
                  {item.type.toLowerCase() === 'grocery' ? (
                    <div className="pending-label">PENDING</div>
                  ) : (
                    <div className={`history-amount ${item.amount < 0 ? 'negative' : ''}`}>
                      {item.amount < 0 ? '-' : '+'}₱{Math.abs(item.amount).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;