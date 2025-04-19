export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  crimeData: number;
}

export interface SafetyData {
  lighting: number;
  populationDensity: number;
  crimeRate: number;
  safetyScore: number;
  safetyLabel: string;
}