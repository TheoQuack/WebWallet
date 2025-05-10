// src/components/Dashboard/MainContent/MainDashboardContent.jsx
import React, { useRef, useState } from 'react';
import { FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa';
import axiosClient from '../../axios';

// const [money, setMoney] = useState();
// const moneyRef = useRef();

// axiosClient.get

const MainDashboardContent = () => {
  return (
    <div className="content-columns">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <div className="white-box">
          <h2 className="section-title centered">Available Balance:</h2>
          <div className="balance">{}</div>
        </div>

        <div className="white-box split-container">
          {/* Left Side */}
          <div className="left-split">
            <div className="section">
              <h3 className="sub-section-title">Transaction Limits</h3>
              <p className="bold-label">Remaining this week</p>
              <p className="bold-amount">₱100.00</p>
            </div>
            <div className="section">
              <h3 className="sub-section-title">Limit by Category</h3>
              <div className="limit-item">
                <span>Food</span>
                <div className="progress-bar" style={{ '--width': 50 }} />
              </div>
              <div className="limit-item">
                <span>Shopping</span>
                <div className="progress-bar" style={{ '--width': 75 }} />
              </div>
              <div className="limit-item">
                <span>Bills</span>
                <div className="progress-bar" style={{ '--width': 30 }} />
              </div>
              <div className="limit-item">
                <span>Others</span>
                <div className="progress-bar" style={{ '--width': 60 }} />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-split">
            <div className="section">
              <h3 className="sub-section-title">Target Balance</h3>
              <p className="bold-label">Remaining to Goal</p>
              <p className="bold-amount">₱150.00</p>
            </div>
            <div className="section">
              <h3 className="sub-section-title">Goal Planner</h3>
              <div className="circular-progress-container">
                <div className="circular-progress">
                  <div className="circular-progress-text">80%</div>
                </div>
              </div>
              <div className="goal-detail">
                <div className="goal-item">
                  <span className="goal-title">Camera</span>
                  <span className="goal-amount">₱150.00</span>
                  <span className="goal-target">Target Balance</span>
                </div>
                <div className="goal-item">
                  <span className="goal-title">Others</span>
                  <span className="goal-amount">₱150.00</span>
                  <span className="goal-target">Target Balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <div className="action-buttons">
          <button className="action-button">
            <FaMoneyBillWave /> Transfer
          </button>
          <button className="action-button">
            <FaPiggyBank /> Set Goal and Limit
          </button>
        </div>

        <div className="white-box">
          <h3 className="section-title centered">Progress</h3>
          <div className="progress-chart">
            <img src="/images/sample-chart.png" alt="Progress Chart" style={{ width: '100%' }} />
            <div className="day-indicators">
              <div className="day active">1</div>
              <div className="day">2</div>
              <div className="day">3</div>
            </div>
          </div>
        </div>

        <div className="white-box scrollable-white-box">
          <h3 className="section-title centered">History</h3>
          <div className="history-container">
            <div className="history-item">
              <div className="history-date">10/10/2025</div>
              <div className="history-content">
                <span className="transaction-type expenses">EXPENSES</span>
                <span className="history-amount negative">-30</span>
              </div>
            </div>
            <div className="history-item">
              <div className="history-date">10/11/2025</div>
              <div className="history-content">
                <span className="transaction-type received">RECEIVED</span>
                <span className="history-amount">+200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardContent;