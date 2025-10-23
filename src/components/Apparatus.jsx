import React, { useState } from 'react';
import { mockApparatus } from '../data/mockData';
import './Apparatus.css';

const Apparatus = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredApparatus = filter === 'all'
    ? mockApparatus
    : mockApparatus.filter(unit => unit.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'success';
      case 'On Scene': return 'danger';
      case 'Out of Service': return 'warning';
      default: return 'info';
    }
  };

  return (
    <div className="apparatus-container">
      <div className="apparatus-header">
        <div>
          <h2>Apparatus Management</h2>
          <p className="text-muted">Fleet status and resource tracking</p>
        </div>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'info' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All Units
          </button>
          <button 
            className={filter === 'Available' ? 'success' : 'secondary'}
            onClick={() => setFilter('Available')}
          >
            Available
          </button>
          <button 
            className={filter === 'On Scene' ? 'danger' : 'secondary'}
            onClick={() => setFilter('On Scene')}
          >
            On Scene
          </button>
        </div>
      </div>

      <div className="apparatus-stats">
        <div className="stat-item">
          <div className="stat-number">{mockApparatus.length}</div>
          <div className="stat-description">Total Units</div>
        </div>
        <div className="stat-item success">
          <div className="stat-number">
            {mockApparatus.filter(u => u.status === 'Available').length}
          </div>
          <div className="stat-description">Available</div>
        </div>
        <div className="stat-item danger">
          <div className="stat-number">
            {mockApparatus.filter(u => u.status === 'On Scene').length}
          </div>
          <div className="stat-description">On Scene</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">
            {mockApparatus.reduce((sum, u) => sum + u.personnel, 0)}
          </div>
          <div className="stat-description">Total Personnel</div>
        </div>
      </div>

      <div className="apparatus-grid">
        {filteredApparatus.map(unit => (
          <div 
            key={unit.id}
            className={`apparatus-unit-card ${selectedUnit?.id === unit.id ? 'selected' : ''}`}
            onClick={() => setSelectedUnit(unit)}
          >
            <div className="unit-card-header">
              <div className="unit-icon">🚒</div>
              <span className={`badge ${getStatusColor(unit.status)}`}>
                {unit.status}
              </span>
            </div>
            <div className="unit-name">{unit.name}</div>
            <div className="unit-type">{unit.type}</div>
            <div className="unit-station">{unit.station}</div>
            <div className="unit-personnel">
              👥 {unit.personnel} personnel
            </div>
          </div>
        ))}
      </div>

      {selectedUnit && (
        <div className="modal-overlay" onClick={() => setSelectedUnit(null)}>
          <div className="modal-content apparatus-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedUnit.name} Details</h3>
              <button className="secondary" onClick={() => setSelectedUnit(null)}>✕</button>
            </div>
            <div className="apparatus-details-content">
              <div className="detail-section">
                <h4>Unit Information</h4>
                <div className="detail-grid">
                  <div className="detail-item">
                    <div className="detail-label">Unit ID</div>
                    <div className="detail-value">{selectedUnit.id}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Unit Name</div>
                    <div className="detail-value">{selectedUnit.name}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Type</div>
                    <div className="detail-value">{selectedUnit.type}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Status</div>
                    <div className="detail-value">
                      <span className={`badge ${getStatusColor(selectedUnit.status)}`}>
                        {selectedUnit.status}
                      </span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Station</div>
                    <div className="detail-value">{selectedUnit.station}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Personnel</div>
                    <div className="detail-value">{selectedUnit.personnel} assigned</div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4>Equipment Specifications</h4>
                <div className="equipment-specs">
                  {selectedUnit.type === 'Engine' && (
                    <>
                      <div className="spec-item">🔧 Pump Capacity: 1,500 GPM</div>
                      <div className="spec-item">💧 Water Tank: 500 gallons</div>
                      <div className="spec-item">🔥 Foam System: Class A/B</div>
                      <div className="spec-item">📏 Hose: 1,200 feet</div>
                    </>
                  )}
                  {selectedUnit.type === 'Ladder' && (
                    <>
                      <div className="spec-item">📐 Aerial Ladder: 75 feet</div>
                      <div className="spec-item">⚡ Pump Capacity: 1,000 GPM</div>
                      <div className="spec-item">💧 Water Tank: 300 gallons</div>
                      <div className="spec-item">🪜 Ground Ladders: 5 sets</div>
                    </>
                  )}
                  {selectedUnit.type === 'Medic' && (
                    <>
                      <div className="spec-item">⚕️ ALS Equipment</div>
                      <div className="spec-item">🏥 Cardiac Monitor/Defibrillator</div>
                      <div className="spec-item">💊 Full Medication Complement</div>
                      <div className="spec-item">🔧 Extrication Equipment</div>
                    </>
                  )}
                  {selectedUnit.type === 'Hazmat' && (
                    <>
                      <div className="spec-item">☣️ Level A/B Suits</div>
                      <div className="spec-item">🔬 Detection Equipment</div>
                      <div className="spec-item">🧪 Decontamination Unit</div>
                      <div className="spec-item">📚 Reference Library</div>
                    </>
                  )}
                  {selectedUnit.type === 'Command' && (
                    <>
                      <div className="spec-item">📡 Mobile Command Center</div>
                      <div className="spec-item">💻 Computer Systems</div>
                      <div className="spec-item">📻 Communications Suite</div>
                      <div className="spec-item">🗺️ Mapping/GIS Systems</div>
                    </>
                  )}
                </div>
              </div>

              <div className="detail-section">
                <h4>Maintenance & Inspection</h4>
                <div className="maintenance-info">
                  <div className="maintenance-item">
                    <span className="badge success">✓</span>
                    <span>Daily Check: Completed</span>
                  </div>
                  <div className="maintenance-item">
                    <span className="badge success">✓</span>
                    <span>Weekly Inspection: Current</span>
                  </div>
                  <div className="maintenance-item">
                    <span className="badge success">✓</span>
                    <span>Annual Certification: Valid</span>
                  </div>
                  <div className="maintenance-item">
                    <span className="badge info">📅</span>
                    <span>Next Service: 14 days</span>
                  </div>
                </div>
              </div>

              <div className="apparatus-actions">
                <button className="success">✓ Mark Available</button>
                <button className="warning">⚠️ Out of Service</button>
                <button className="secondary">🔧 Schedule Maintenance</button>
                <button className="secondary">📊 View History</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apparatus;
