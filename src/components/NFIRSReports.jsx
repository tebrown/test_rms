import React, { useState } from 'react';
import { mockCADIncidents, mockNFIRSReports, nfirsIncidentTypes, propertyUseCodes, actionTakenCodes, departmentInfo } from '../data/mockData';
import './NFIRSReports.css';

const NFIRSReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showCADImport, setShowCADImport] = useState(false);
  const [formData, setFormData] = useState({
    incidentNumber: '',
    incidentDate: '',
    incidentType: '',
    address: '',
    city: '',
    state: 'IL',
    zipCode: '',
    propertyUse: '',
    alarmDateTime: '',
    arrivalDateTime: '',
    controlledDateTime: '',
    clearedDateTime: '',
    fireOrigin: '',
    heatSource: '',
    materialIgnited: '',
    estimatedLoss: '',
    civilianDeaths: 0,
    civilianInjuries: 0,
    firefighterDeaths: 0,
    firefighterInjuries: 0,
    suppressionPersonnel: '',
    emsPersonnel: '',
    otherPersonnel: ''
  });

  const handleCADImport = (cadIncident) => {
    // Map CAD data to NFIRS form
    const incidentTypeMapping = {
      'Structure Fire': '111',
      'Vehicle Fire': '131',
      'Medical Emergency': '300',
      'Hazmat Incident': '400'
    };

    setFormData({
      ...formData,
      incidentNumber: cadIncident.incidentNumber,
      incidentDate: cadIncident.dateTime.split('T')[0],
      incidentType: incidentTypeMapping[cadIncident.incidentType] || '100',
      address: cadIncident.address,
      city: cadIncident.city,
      state: cadIncident.state,
      zipCode: cadIncident.zipCode,
      alarmDateTime: cadIncident.dateTime,
      propertyUse: cadIncident.incidentType === 'Structure Fire' ? '419' : '900'
    });
    setShowCADImport(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('NFIRS Report would be submitted to FEMA. This is a demo, so no actual submission occurs.');
  };

  return (
    <div className="nfirs-container">
      <div className="nfirs-header">
        <div>
          <h2>NFIRS Reports</h2>
          <p className="text-muted">National Fire Incident Reporting System for FEMA</p>
        </div>
        <div className="flex gap-2">
          <button className="info" onClick={() => setShowCADImport(true)}>
            📥 Import from CAD
          </button>
          <button onClick={() => setFormData({
            incidentNumber: '',
            incidentDate: '',
            incidentType: '',
            address: '',
            city: '',
            state: 'IL',
            zipCode: '',
            propertyUse: '',
            alarmDateTime: '',
            arrivalDateTime: '',
            controlledDateTime: '',
            clearedDateTime: '',
            fireOrigin: '',
            heatSource: '',
            materialIgnited: '',
            estimatedLoss: '',
            civilianDeaths: 0,
            civilianInjuries: 0,
            firefighterDeaths: 0,
            firefighterInjuries: 0,
            suppressionPersonnel: '',
            emsPersonnel: '',
            otherPersonnel: ''
          })}>
            ➕ New Report
          </button>
        </div>
      </div>

      {/* CAD Import Modal */}
      {showCADImport && (
        <div className="modal-overlay" onClick={() => setShowCADImport(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Import from CAD System</h3>
              <button className="secondary" onClick={() => setShowCADImport(false)}>✕</button>
            </div>
            <div className="cad-import-list">
              {mockCADIncidents.map(incident => (
                <div key={incident.id} className="cad-import-item" onClick={() => handleCADImport(incident)}>
                  <div className="flex-between">
                    <div>
                      <div className="font-semibold">{incident.incidentNumber}</div>
                      <div className="text-muted">{incident.incidentType}</div>
                    </div>
                    <span className={`badge ${incident.status === 'Closed' ? 'success' : 'warning'}`}>
                      {incident.status}
                    </span>
                  </div>
                  <div className="text-muted mt-1">
                    {incident.address}, {incident.city}
                  </div>
                  <div className="text-muted">
                    {new Date(incident.dateTime).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="nfirs-content">
        {/* Existing Reports Sidebar */}
        <div className="reports-sidebar card">
          <h3 className="mb-2">Existing Reports</h3>
          <div className="reports-list">
            {mockNFIRSReports.map(report => (
              <div 
                key={report.id} 
                className={`report-item ${selectedReport?.id === report.id ? 'active' : ''}`}
                onClick={() => setSelectedReport(report)}
              >
                <div className="flex-between mb-1">
                  <span className="font-semibold">{report.id}</span>
                  <span className={`badge ${report.status === 'Submitted' ? 'success' : 'info'}`}>
                    {report.status}
                  </span>
                </div>
                <div className="text-muted">{report.incidentNumber}</div>
                <div className="text-muted">Type {report.incidentType}</div>
                <div className="text-muted">{new Date(report.incidentDate).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* NFIRS Form */}
        <div className="nfirs-form-container card">
          <div className="card-header">
            <h3>NFIRS Basic Incident Report</h3>
            <p className="text-muted">Department: {departmentInfo.name} (FDID: {departmentInfo.fdid})</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="form-section">
              <h4>Basic Information</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Incident Number *</label>
                  <input 
                    type="text" 
                    name="incidentNumber"
                    value={formData.incidentNumber}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Incident Date *</label>
                  <input 
                    type="date" 
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Incident Type *</label>
                  <select 
                    name="incidentType"
                    value={formData.incidentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Type</option>
                    {Object.entries(nfirsIncidentTypes).map(([code, desc]) => (
                      <option key={code} value={code}>{code} - {desc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="form-section">
              <h4>Location</h4>
              <div className="form-row">
                <div className="form-group" style={{gridColumn: '1 / -1'}}>
                  <label>Address *</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input 
                    type="text" 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    maxLength="2"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code *</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Property Use</label>
                  <select 
                    name="propertyUse"
                    value={formData.propertyUse}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Property Use</option>
                    {Object.entries(propertyUseCodes).map(([code, desc]) => (
                      <option key={code} value={code}>{code} - {desc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Time Information */}
            <div className="form-section">
              <h4>Time Information</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Alarm Date/Time</label>
                  <input 
                    type="datetime-local" 
                    name="alarmDateTime"
                    value={formData.alarmDateTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Arrival Date/Time</label>
                  <input 
                    type="datetime-local" 
                    name="arrivalDateTime"
                    value={formData.arrivalDateTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Controlled Date/Time</label>
                  <input 
                    type="datetime-local" 
                    name="controlledDateTime"
                    value={formData.controlledDateTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Cleared Date/Time</label>
                  <input 
                    type="datetime-local" 
                    name="clearedDateTime"
                    value={formData.clearedDateTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Fire Details (if fire incident) */}
            {formData.incidentType && formData.incidentType.startsWith('1') && (
              <div className="form-section">
                <h4>Fire Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Area of Fire Origin</label>
                    <input 
                      type="text" 
                      name="fireOrigin"
                      value={formData.fireOrigin}
                      onChange={handleInputChange}
                      placeholder="e.g., Kitchen, Engine compartment"
                    />
                  </div>
                  <div className="form-group">
                    <label>Heat Source</label>
                    <input 
                      type="text" 
                      name="heatSource"
                      value={formData.heatSource}
                      onChange={handleInputChange}
                      placeholder="e.g., Cooking equipment"
                    />
                  </div>
                  <div className="form-group">
                    <label>Item First Ignited</label>
                    <input 
                      type="text" 
                      name="materialIgnited"
                      value={formData.materialIgnited}
                      onChange={handleInputChange}
                      placeholder="e.g., Cooking materials"
                    />
                  </div>
                  <div className="form-group">
                    <label>Estimated Property Loss ($)</label>
                    <input 
                      type="number" 
                      name="estimatedLoss"
                      value={formData.estimatedLoss}
                      onChange={handleInputChange}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Casualties */}
            <div className="form-section">
              <h4>Casualties</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Civilian Deaths</label>
                  <input 
                    type="number" 
                    name="civilianDeaths"
                    value={formData.civilianDeaths}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Civilian Injuries</label>
                  <input 
                    type="number" 
                    name="civilianInjuries"
                    value={formData.civilianInjuries}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Firefighter Deaths</label>
                  <input 
                    type="number" 
                    name="firefighterDeaths"
                    value={formData.firefighterDeaths}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label>Firefighter Injuries</label>
                  <input 
                    type="number" 
                    name="firefighterInjuries"
                    value={formData.firefighterInjuries}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="form-section">
              <h4>Resources</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Suppression Personnel</label>
                  <input 
                    type="number" 
                    name="suppressionPersonnel"
                    value={formData.suppressionPersonnel}
                    onChange={handleInputChange}
                    placeholder="Number of personnel"
                  />
                </div>
                <div className="form-group">
                  <label>EMS Personnel</label>
                  <input 
                    type="number" 
                    name="emsPersonnel"
                    value={formData.emsPersonnel}
                    onChange={handleInputChange}
                    placeholder="Number of personnel"
                  />
                </div>
                <div className="form-group">
                  <label>Other Personnel</label>
                  <input 
                    type="number" 
                    name="otherPersonnel"
                    value={formData.otherPersonnel}
                    onChange={handleInputChange}
                    placeholder="Number of personnel"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="success">
                💾 Save Report
              </button>
              <button type="button" className="info">
                📤 Submit to FEMA
              </button>
              <button type="button" className="secondary">
                📋 Generate PDF
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NFIRSReports;
