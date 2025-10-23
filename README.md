# Fire RMS - Records Management System

A comprehensive demonstration of a Fire Department Records Management System with NFIRS reporting, CAD integration, and apparatus management.

## 🔥 Live Demo

**https://tebrown.github.io/test_rms/**

## Features

### 📊 Dashboard
- Real-time statistics (active incidents, personnel, apparatus)
- Recent CAD incidents overview
- NFIRS reports summary
- Apparatus status tracking
- Quick action buttons

### 📝 NFIRS Reports
- Complete NFIRS Basic Incident Report form
- Import from CAD functionality (auto-fills form)
- All standard NFIRS fields including:
  - Basic incident information
  - Location details
  - Time information (alarm, arrival, controlled, cleared)
  - Fire-specific details
  - Casualties tracking
  - Resources deployed

### 🚨 CAD Incidents
- Computer-Aided Dispatch integration
- Filter by status (All, In Progress, Closed)
- Detailed incident views with:
  - Full incident information
  - Location details
  - Responding units
  - Dispatch notes

### 🚒 Apparatus Management
- Fleet overview with statistics
- Status tracking (Available, On Scene, Out of Service)
- Detailed unit information including:
  - Equipment specifications
  - Maintenance status
  - Personnel assignments

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool
- **CSS** - Custom dark mode theme
- **Mock Data** - No backend required

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tebrown/test_rms.git

# Navigate to project directory
cd test_rms

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/test_rms/`

## Build & Deploy

### Build for production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## GitHub Pages Setup

If the site isn't showing at https://tebrown.github.io/test_rms/, ensure GitHub Pages is configured:

1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

The site should then be live at: https://tebrown.github.io/test_rms/

## Features Showcase

### Dark Mode Theme 🌙
Professional dark color scheme with high contrast for readability

### Mock Data 📦
All data is demonstration data - no database required
- 4 CAD incidents
- 2 NFIRS reports
- 7 apparatus units
- Department information

### Responsive Design 📱
Works on desktop, tablet, and mobile devices

## Project Structure

```
test_rms/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── CADIncidents.jsx    # CAD system
│   │   ├── NFIRSReports.jsx    # NFIRS forms
│   │   └── Apparatus.jsx       # Fleet management
│   ├── data/
│   │   └── mockData.js         # All demo data
│   ├── App.jsx                 # Main app component
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## License

MIT

## Demo Notice

This is a demonstration site with mock data. It does not connect to any real systems or databases.
