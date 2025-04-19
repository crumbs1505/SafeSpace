import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MapPin } from 'lucide-react';
import { landmarks } from './data/landmarks';
import { generateRandomData } from './utils/safetyCalculator';
import { SafetyDetails } from './components/SafetyDetails';
import { SafetyData } from './types';
import 'leaflet/dist/leaflet.css';

function MapInterface() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [safetyData, setSafetyData] = useState<SafetyData | null>(null);
  const [cachedValues, setCachedValues] = useState<{ lighting: number; populationDensity: number } | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const REFRESH_THRESHOLD = 2;

  const getSafetyLabel = (score: number) => {
    if (score >= 5000) return 'Safe';
    if (score >= 3000) return 'Moderate';
    return 'Unsafe';
  };

  const handleLocationClick = useCallback((locationId: string, crimeRate: number) => {
    let lighting, populationDensity;

    if (cachedValues && clickCount < REFRESH_THRESHOLD) {
      ({ lighting, populationDensity } = cachedValues);
    } else {
      const newData = generateRandomData(crimeRate);
      lighting = newData.lighting;
      populationDensity = newData.populationDensity;
      setCachedValues({ lighting, populationDensity });
      setClickCount(0);
    }

    const safetyScore = (0.2800 * lighting) + (0.3908 * populationDensity) - (0.3292 * crimeRate);
    const data: SafetyData = {
      lighting,
      populationDensity,
      crimeRate,
      safetyScore,
      safetyLabel: getSafetyLabel(safetyScore)
    };

    setSafetyData(data);
    setSelectedLocation(landmarks.find(l => l.id === locationId)?.name || '');
    setClickCount((prev) => prev + 1);
  }, [cachedValues, clickCount]);

  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Safety Score Calculator</h1>
            <p className="text-gray-600">Click on landmarks to analyze their safety scores</p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
              <MapContainer
                center={[12.9128, 79.09]}
                zoom={12}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {landmarks.map((location) => (
                  <Marker
                    key={location.id}
                    position={[location.lat, location.lng]}
                    icon={customIcon}
                    eventHandlers={{
                      click: () => handleLocationClick(location.id, location.crimeData),
                    }}
                  >
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            <div className="flex justify-center items-start">
              {safetyData ? (
                <SafetyDetails data={safetyData} locationName={selectedLocation} />
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                    <p className="text-gray-600">Select a landmark on the map to view its safety analysis</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapInterface;
