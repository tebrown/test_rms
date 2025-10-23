import React from 'react';
import { dashboardStats, mockCADIncidents, mockNFIRSReports, mockApparatus } from '../data/mockData';
import './Dashboard.css';

const Dashboard = ({ setCurrentView }) => {
  const recentIncidents = mockCADIncidents.slice(0, 3);
  const activeApparatus = mockApparatus.filter(a => a.status === 'On Scene');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p className="text-muted">Real-time fire department operations</p>
      </div>

      {/* Statistics Grid */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.activeIncidents}</div>
            <div className="stat-label">Active Incidents</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.totalIncidentsThisMonth}</div>
            <div className="stat-label">Incidents This Month</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.averageResponseTime}</div>
            <div className="stat-label">Avg Response Time</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.personnelOnDuty}</div>
            <div className="stat-label">Personnel On Duty</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚒</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.apparatusAvailable}</div>
            <div className="stat-label">Apparatus Available</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <div className="stat-value">{dashboardStats.nfirsReportsPending}</div>
            <div className="stat-label">NFIRS Pending</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Incidents */}
        <div className="card dashboard-section">
          <div className="card-header">
            <div className="flex-between">
              <h3>Recent CAD Incidents</h3>
              <button className="secondary" onClick={() => setCurrentView('cad')}>
                View All →
              </button>
            </div>
          </div>
          <div className="incidents-list">
            {recentIncidents.map(incident => (
              <div key={incident.id} className="incident-item">
                <div className="incident-header">
                  <span className="incident-number">{incident.incidentNumber}</span>
                  <span className={`badge ${incident.status === 'Closed' ? 'success' : 'warning'}`}>
                    {incident.status}
                  </span>
                </div>
                <div className="incident-type">{incident.incidentType}</div>
                <div className="incident-address text-muted">
                  {incident.address}, {incident.city}
                </div>
                <div className="incident-meta">
                  <span className="text-muted">
                    {new Date(incident.dateTime).toLocaleString()}
                  </span>
                  <span className="incident-units">
                    {incident.units.length} units
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NFIRS Reports Status */}
        <div className="card dashboard-section">
          <div className="card-header">
            <div className="flex-between">
              <h3>NFIRS Reports</h3>
              <button className="secondary" onClick={() => setCurrentView('nfirs')}>
                Manage →
              </button>
            </div>
          </div>
          <div className="nfirs-summary">
            <div className="nfirs-stat-item">
              <div className="nfirs-stat-label">Submitted</div>
              <div className="nfirs-stat-value success">
                {dashboardStats.nfirsReportsSubmitted}
              </div>
            </div>
            <div className="nfirs-stat-item">
              <div className="nfirs-stat-label">Pending Review</div>
              <div className="nfirs-stat-value warning">
                {dashboardStats.nfirsReportsPending}
              </div>
            </div>
            <div className="nfirs-stat-item">
              <div className="nfirs-stat-label">Total Incidents</div>
              <div className="nfirs-stat-value">
                {dashboardStats.totalIncidents}
              </div>
            </div>
          </div>
          <div className="nfirs-reports-list">
            {mockNFIRSReports.map(report => (
              <div key={report.id} className="nfirs-report-item">
                <div className="flex-between">
                  <div>
                    <div className="report-id">{report.id}</div>
                    <div className="text-muted">{report.incidentNumber}</div>
                  </div>
                  <span className={`badge ${report.status === 'Submitted' ? 'success' : 'info'}`}>
                    {report.status}
                  </span>
                </div>
                <div className="report-type text-muted">
                  Type {report.incidentType} - {report.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Units */}
        <div className="card dashboard-section full-width">
          <div className="card-header">
            <div className="flex-between">
              <h3>Apparatus Status</h3>
              <button className="secondary" onClick={() => setCurrentView('apparatus')}>
                View All →
              </button>
            </div>
          </div>
          <div className="apparatus-grid">
            {mockApparatus.map(unit => (
              <div key={unit.id} className="apparatus-card">
                <div className="apparatus-header">
                  <div className="apparatus-name">{unit.name}</div>
                  <span className={`badge ${
                    unit.status === 'Available' ? 'success' : 
                    unit.status === 'On Scene' ? 'danger' : 'warning'
                  }`}>
                    {unit.status}
                  </span>
                </div>
                <div className="apparatus-details">
                  <div className="text-muted">{unit.type}</div>
                  <div className="text-muted">{unit.station}</div>
                  <div className="text-muted">{unit.personnel} personnel</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions card">
        <h3 className="mb-2">Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn" onClick={() => setCurrentView('nfirs')}>
            <span className="action-icon">📝</span>
            <span>Create NFIRS Report</span>
          </button>
          <button className="action-btn" onClick={() => setCurrentView('cad')}>
            <span className="action-icon">🚨</span>
            <span>Import from CAD</span>
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">📊</span>
            <span>Generate Analytics</span>
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">📤</span>
            <span>Export FEMA Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
