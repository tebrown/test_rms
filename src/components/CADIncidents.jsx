import React, { useState } from 'react';
import { mockCADIncidents } from '../data/mockData';
import './CADIncidents.css';

const CADIncidents = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredIncidents = filter === 'all' 
    ? mockCADIncidents 
    : mockCADIncidents.filter(inc => inc.status === filter);

  return (
    <div className="cad-container">
      <div className="cad-header">
        <div>
          <h2>CAD Incidents</h2>
          <p className="text-muted">Computer-Aided Dispatch System Integration</p>
        </div>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'info' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All Incidents
          </button>
          <button 
            className={filter === 'In Progress' ? 'warning' : 'secondary'}
            onClick={() => setFilter('In Progress')}
          >
            In Progress
          </button>
          <button 
            className={filter === 'Closed' ? 'success' : 'secondary'}
            onClick={() => setFilter('Closed')}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="cad-content">
        <div className="card incidents-panel">
          <div className="card-header">
            <h3>Incident List</h3>
            <span className="badge">{filteredIncidents.length} incidents</span>
          </div>
          <div className="cad-incidents-list">
            {filteredIncidents.map(incident => (
              <div 
                key={incident.id}
                className={`cad-incident-card ${selectedIncident?.id === incident.id ? 'selected' : ''}`}
                onClick={() => setSelectedIncident(incident)}
              >
                <div className="incident-card-header">
                  <div>
                    <div className="incident-number">{incident.incidentNumber}</div>
                    <div className="incident-type-badge">{incident.incidentType}</div>
                  </div>
                  <span className={`badge ${
                    incident.status === 'Closed' ? 'success' : 
                    incident.status === 'In Progress' ? 'warning' : 'info'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                <div className="incident-card-body">
                  <div className="incident-location">
                    📍 {incident.address}, {incident.city}
                  </div>
                  <div className="incident-datetime">
                    🕐 {new Date(incident.dateTime).toLocaleString()}
                  </div>
                  <div className="incident-units-summary">
                    🚒 {incident.units.length} units dispatched
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedIncident ? (
          <div className="card incident-details">
            <div className="card-header">
              <div className="flex-between">
                <h3>Incident Details</h3>
                <button className="info">📝 Create NFIRS Report</button>
              </div>
            </div>

            <div className="detail-section">
              <h4>Incident Information</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <div className="detail-label">Incident Number</div>
                  <div className="detail-value">{selectedIncident.incidentNumber}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Status</div>
                  <div className="detail-value">
                    <span className={`badge ${selectedIncident.status === 'Closed' ? 'success' : 'warning'}`}>
                      {selectedIncident.status}
                    </span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Incident Type</div>
                  <div className="detail-value">{selectedIncident.incidentType}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Alarm Level</div>
                  <div className="detail-value">{selectedIncident.alarmLevel}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Priority</div>
                  <div className="detail-value">
                    <span className="badge danger">{selectedIncident.priority}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Date/Time</div>
                  <div className="detail-value">
                    {new Date(selectedIncident.dateTime).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h4>Location</h4>
              <div className="detail-grid">
                <div className="detail-item full-width">
                  <div className="detail-label">Address</div>
                  <div className="detail-value">{selectedIncident.address}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">City</div>
                  <div className="detail-value">{selectedIncident.city}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">State</div>
                  <div className="detail-value">{selectedIncident.state}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">ZIP Code</div>
                  <div className="detail-value">{selectedIncident.zipCode}</div>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h4>Responding Units</h4>
              <div className="units-grid">
                {selectedIncident.units.map((unit, idx) => (
                  <div key={idx} className="unit-badge">🚒 {unit}</div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4>Dispatch Notes</h4>
              <div className="dispatch-notes">{selectedIncident.dispatchNotes}</div>
            </div>

            <div className="detail-actions">
              <button className="success">✓ Mark as Reviewed</button>
              <button className="info">📝 Create NFIRS Report</button>
              <button className="secondary">🖨️ Print Report</button>
              <button className="secondary">📤 Export Data</button>
            </div>
          </div>
        ) : (
          <div className="card incident-details">
            <div className="no-selection">
              <div className="no-selection-icon">📋</div>
              <h3>No Incident Selected</h3>
              <p className="text-muted">Select an incident from the list to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CADIncidents;
