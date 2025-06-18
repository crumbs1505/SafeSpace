import React from 'react';

const SOSButton: React.FC = () => {
  const handleSOS = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Location:', latitude, longitude);
        // TODO: Send this location to backend or external API
        alert(`SOS Sent! Location: ${latitude}, ${longitude}`);
      },
      (error) => {
        console.error(error);
        alert('Unable to retrieve your location.');
      }
    );
  };

  return (
    <button
      onClick={handleSOS}
      className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-red-700 transition-all"
    >
      🚨 Send SOS
    </button>
  );
};

export default SOSButton;
