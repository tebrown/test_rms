import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CADIncidents from './components/CADIncidents';
import NFIRSReports from './components/NFIRSReports';
import Apparatus from './components/Apparatus';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} />;
      case 'cad':
        return <CADIncidents />;
      case 'nfirs':
        return <NFIRSReports />;
      case 'apparatus':
        return <Apparatus />;
      default:
        return <Dashboard setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="app">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
