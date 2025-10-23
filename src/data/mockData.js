// Mock CAD (Computer-Aided Dispatch) Data
export const mockCADIncidents = [
  {
    id: 'CAD-2025-001234',
    incidentNumber: '2025-001234',
    dateTime: '2025-01-15T14:23:00',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    incidentType: 'Structure Fire',
    alarmLevel: '2nd Alarm',
    units: ['Engine 1', 'Engine 2', 'Ladder 1', 'Battalion 1'],
    dispatchNotes: 'Caller reports smoke visible from 2nd floor, possible occupants trapped',
    status: 'Closed',
    priority: 'Emergency'
  },
  {
    id: 'CAD-2025-001235',
    incidentNumber: '2025-001235',
    dateTime: '2025-01-15T16:45:00',
    address: '1234 Oak Street',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62702',
    incidentType: 'Medical Emergency',
    alarmLevel: 'Standard',
    units: ['Medic 1', 'Engine 3'],
    dispatchNotes: 'Male patient, 65 years old, chest pain',
    status: 'Closed',
    priority: 'Emergency'
  },
  {
    id: 'CAD-2025-001236',
    incidentNumber: '2025-001236',
    dateTime: '2025-01-16T09:12:00',
    address: '555 Industrial Park Drive',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62703',
    incidentType: 'Hazmat Incident',
    alarmLevel: 'Hazmat Level 2',
    units: ['Engine 1', 'Hazmat 1', 'Battalion 2'],
    dispatchNotes: 'Chemical spill reported in warehouse, unknown substance',
    status: 'In Progress',
    priority: 'Emergency'
  },
  {
    id: 'CAD-2025-001237',
    incidentNumber: '2025-001237',
    dateTime: '2025-01-16T11:30:00',
    address: '789 Maple Avenue',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    incidentType: 'Vehicle Fire',
    alarmLevel: 'Standard',
    units: ['Engine 2', 'Engine 4'],
    dispatchNotes: 'Vehicle fully involved, no injuries reported',
    status: 'Closed',
    priority: 'Emergency'
  }
];

// NFIRS Incident Types
export const nfirsIncidentTypes = {
  '100': 'Fire, other',
  '111': 'Building fire',
  '112': 'Fires in structures other than in a building',
  '113': 'Cooking fire, confined to container',
  '114': 'Chimney or flue fire, confined to chimney or flue',
  '115': 'Incinerator overload or malfunction, fire confined',
  '116': 'Fuel burner/boiler malfunction, fire confined',
  '117': 'Commercial Compactor fire, confined to rubbish',
  '118': 'Trash or rubbish fire, contained',
  '120': 'Fire in mobile property used as a fixed structure, other',
  '121': 'Fire in mobile home used as fixed residence',
  '122': 'Fire in motor home, camper, recreational vehicle',
  '123': 'Fire in portable building, fixed location',
  '130': 'Mobile property (vehicle) fire, other',
  '131': 'Passenger vehicle fire',
  '132': 'Road freight or transport vehicle fire',
  '133': 'Rail vehicle fire',
  '134': 'Water vehicle fire',
  '135': 'Aircraft fire',
  '136': 'Self-propelled motor home or recreational vehicle',
  '137': 'Camper or recreational vehicle (RV) fire',
  '138': 'Off-road vehicle or heavy equipment fire',
  '140': 'Natural vegetation fire, other',
  '141': 'Forest, woods or wildland fire',
  '142': 'Brush or brush-and-grass mixture fire',
  '143': 'Grass fire',
  '150': 'Outside rubbish, trash or waste fire',
  '160': 'Special outside fire, other',
  '161': 'Outside storage fire',
  '162': 'Outside equipment fire',
  '163': 'Outside gas or vapor combustion explosion',
  '164': 'Outside mailbox fire'
};

// Property Use Codes
export const propertyUseCodes = {
  '419': 'One- or two-family dwelling',
  '429': 'Multifamily dwelling',
  '439': 'Boarding/rooming house, residential hotels',
  '449': 'Hotel/motel, commercial',
  '459-460': 'Residential board and care',
  '500': 'Mercantile, business',
  '511-571': 'Various business types',
  '700': 'Manufacturing, processing',
  '800': 'Storage',
  '900': 'Outside or special property'
};

// Mock NFIRS Reports
export const mockNFIRSReports = [
  {
    id: 'NFIRS-2025-001',
    incidentNumber: '2025-001234',
    incidentDate: '2025-01-15',
    incidentType: '111',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    propertyUse: '419',
    alarmDateTime: '2025-01-15T14:23:00',
    arrivalDateTime: '2025-01-15T14:28:00',
    controlledDateTime: '2025-01-15T15:45:00',
    clearedDateTime: '2025-01-15T17:30:00',
    actions: ['Extinguishment', 'Search and rescue', 'Salvage'],
    resources: {
      suppression: 12,
      ems: 2,
      other: 3
    },
    casualties: {
      civilian: { deaths: 0, injuries: 2 },
      firefighter: { deaths: 0, injuries: 1 }
    },
    fireOrigin: 'Kitchen',
    heatSource: 'Cooking equipment',
    materialIgnited: 'Cooking materials',
    estimatedLoss: 75000,
    status: 'Submitted'
  },
  {
    id: 'NFIRS-2025-002',
    incidentNumber: '2025-001237',
    incidentDate: '2025-01-16',
    incidentType: '131',
    address: '789 Maple Avenue',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    propertyUse: '961',
    alarmDateTime: '2025-01-16T11:30:00',
    arrivalDateTime: '2025-01-16T11:35:00',
    controlledDateTime: '2025-01-16T11:50:00',
    clearedDateTime: '2025-01-16T12:15:00',
    actions: ['Extinguishment', 'Exposure protection'],
    resources: {
      suppression: 8,
      ems: 0,
      other: 2
    },
    casualties: {
      civilian: { deaths: 0, injuries: 0 },
      firefighter: { deaths: 0, injuries: 0 }
    },
    fireOrigin: 'Engine compartment',
    heatSource: 'Electrical equipment',
    materialIgnited: 'Fuel',
    estimatedLoss: 15000,
    status: 'Draft'
  }
];

// Department Information
export const departmentInfo = {
  fdid: '12345',
  name: 'Springfield Fire Department',
  state: 'IL',
  stateCode: '17',
  address: '123 Fire Station Road',
  city: 'Springfield',
  zipCode: '62701',
  phone: '(217) 555-FIRE',
  chief: 'Chief Michael Rodriguez'
};

// Action Taken Codes
export const actionTakenCodes = {
  '10': 'Extinguishment by fire service personnel',
  '11': 'Extinguishment by fire service personnel with equipment',
  '12': 'Extinguishment by other personnel',
  '13': 'Extinguishment by other equipment',
  '14': 'Extinguishment by automatic fire suppression system',
  '20': 'Search and rescue',
  '30': 'Emergency medical care',
  '40': 'Hazardous materials response',
  '50': 'Investigation',
  '60': 'Assistance to other agencies',
  '70': 'Public service',
  '80': 'Fire prevention/inspection',
  '90': 'Other action taken'
};

// Mock apparatus/units
export const mockApparatus = [
  {
    id: 'E1',
    name: 'Engine 1',
    type: 'Engine',
    station: 'Station 1',
    status: 'Available',
    personnel: 4
  },
  {
    id: 'E2',
    name: 'Engine 2',
    type: 'Engine',
    station: 'Station 2',
    status: 'Available',
    personnel: 4
  },
  {
    id: 'E3',
    name: 'Engine 3',
    type: 'Engine',
    station: 'Station 3',
    status: 'On Scene',
    personnel: 4
  },
  {
    id: 'L1',
    name: 'Ladder 1',
    type: 'Ladder',
    station: 'Station 1',
    status: 'Available',
    personnel: 3
  },
  {
    id: 'M1',
    name: 'Medic 1',
    type: 'Medic',
    station: 'Station 2',
    status: 'Available',
    personnel: 2
  },
  {
    id: 'B1',
    name: 'Battalion 1',
    type: 'Command',
    station: 'Station 1',
    status: 'Available',
    personnel: 1
  },
  {
    id: 'HM1',
    name: 'Hazmat 1',
    type: 'Hazmat',
    station: 'Station 3',
    status: 'Available',
    personnel: 4
  }
];

// Stats for dashboard
export const dashboardStats = {
  totalIncidents: 1247,
  totalIncidentsThisMonth: 89,
  activeIncidents: 3,
  nfirsReportsSubmitted: 1156,
  nfirsReportsPending: 23,
  averageResponseTime: '4:23',
  personnelOnDuty: 48,
  apparatusAvailable: 12,
  apparatusOutOfService: 2
};
