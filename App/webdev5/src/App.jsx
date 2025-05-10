import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import TransferScreen from './components/Dashboard/Transfer/TransferScreen';
import BankSelection from './components/Dashboard/Transfer/BankSelection';
import WallETTransfer from './components/Dashboard/Transfer/WallETTransfer';
import MainDashboardContent from './components/Dashboard/MainDashboardContent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Optional: persist login across refresh
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />

        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <DashboardPage /> : <Navigate to="/" replace />}
        >
          <Route index element={<MainDashboardContent />} />
          <Route path="transfer" element={<TransferScreen />} />
          <Route path="transfer/banks" element={<BankSelection />} />
          <Route path="transfer/wallet" element={<WallETTransfer />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;