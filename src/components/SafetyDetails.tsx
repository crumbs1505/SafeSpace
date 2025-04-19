import React from 'react';
import { SafetyData } from '../types';
import { ShieldCheck, Sun, Users, Shield } from 'lucide-react';

interface Props {
  data: SafetyData | null;
  locationName: string;
}

export const SafetyDetails: React.FC<Props> = ({ data, locationName }) => {
  if (!data) return null;

  const getSafetyColor = (score: number) => {
    if (score >= 5000) return 'text-green-600';
    if (score >= 3000) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Safety Analysis for {locationName}</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Sun className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-600">Lighting Condition</p>
            <p className="font-semibold">{data.lighting.toLocaleString()} kWh</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Population Density</p>
            <p className="font-semibold">{data.populationDensity.toLocaleString()} people/sq km</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-red-500" />
          <div>
            <p className="text-sm text-gray-600">Crime Rate</p>
            <p className="font-semibold">{(data.crimeRate).toFixed(2)}%</p>
          </div>
        </div>


        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center gap-3">
            <ShieldCheck className={`w-6 h-6 ${getSafetyColor(data.safetyScore)}`} />
            <div>
              <p className="text-sm text-gray-600">Safety Score</p>
              <p className="font-bold text-lg">
                <span className={getSafetyColor(data.safetyScore)}>
                  {data.safetyLabel}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
