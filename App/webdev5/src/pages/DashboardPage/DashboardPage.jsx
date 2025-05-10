import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import MainContent from '../../components/Dashboard/MainContent/MainContent';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container" style={{ display: 'flex' }}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <MainContent 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Outlet /> {/* Renders nested routes */}
      </MainContent>
    </div>
  );
};

export default DashboardPage;