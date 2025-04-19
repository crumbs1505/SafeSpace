export const calculateSafetyScore = (
  lighting: number,
  populationDensity: number,
  crimeProbability: number
): { score: number; label: string } => {
  // New weights based on provided model
  const weights = {
    lighting: 0.2800,
    populationDensity: 0.3908,
    crimeProbability: 0.3292,
  };

  // Calculate weighted score
  const score = (
    lighting * weights.lighting +
    populationDensity * weights.populationDensity -
    (crimeProbability * weights.crimeProbability)
  );

  // Determine safety label
  let label = '';
  if (score >= 5000) label = 'Safe';
  else if (score >= 3000) label = 'Moderate';
  else label = 'Unsafe';

  return { score: Math.round(score), label };
};

export const generateRandomData = (crimeRate: number) => {
  // Generate random values in 1000s range
  const lighting = Math.round(Math.random() * 10000);
  const populationDensity = Math.round(Math.random() * 10000);

  const { score, label } = calculateSafetyScore(lighting, populationDensity, crimeRate);

  return {
    lighting,
    populationDensity,
    crimeRate,
    safetyScore: score,
    safetyLabel: label
  };
};
