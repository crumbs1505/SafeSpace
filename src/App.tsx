import React from 'react';
import { Shield, MapPin, Bell, Users } from 'lucide-react';
import { Route, Routes, Link } from 'react-router-dom';
import MapInterface from './mapInterface';
import SelfDefense from './components/SelfDefense';
import BasicStance from './components/techniques/BasicStance';
import EscapeTechniques from './components/techniques/EscapeTechniques';
import VerbalDefense from './components/techniques/VerbalDefense';
import SOSButton from './components/SOS';
import EmergencyContacts from './components/EmergencyContacts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map-interface" element={<MapInterface />} />
      <Route path="/self-defense" element={<SelfDefense />} />
      <Route path="/basic-stance" element={<BasicStance />} />
      <Route path="/escape-techniques" element={<EscapeTechniques />} />
      <Route path="/verbal-defense" element={<VerbalDefense />} />
      <Route path="/emergency-contacts" element={<EmergencyContacts />} />
    </Routes>

    
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="w-full flex justify-end items-center p-4">
  <Link
    to="/emergency-contacts"
    className="text-purple-800 font-semibold hover:underline hover:text-purple-800"
  >
    Emergency Contacts
  </Link>
</div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SafeSpace-Your Personal Safety Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered safety analysis to help you navigate public spaces with confidence
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/map-interface">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-200">
                Get Safety Score
              </button>
            </Link>
            <Link to="/self-defense">
              <button className="bg-white hover:bg-gray-100 text-purple-600 font-semibold py-4 px-8 rounded-lg text-lg transition duration-200 border-2 border-purple-600">
                Self Defense Tips
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4"></h2>
            <SOSButton />
          </div>
        </div>
      </div>
            
    


      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <MapPin className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Real-time Analysis</h3>
            <p className="text-gray-600">
              Get instant safety scores based on lighting, crime data, and population density
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Bell className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Emergency Alerts</h3>
            <p className="text-gray-600">
              Receive immediate notifications about safety concerns in your area
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Community Insights</h3>
            <p className="text-gray-600">
              Access crowd-sourced safety tips and real experiences from the community
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Trusted by Communities</h2>
              <p className="text-gray-600">Join thousands of users making safer decisions</p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'SafeSpace helps me feel more confident when exploring new areas.' },
              { name: 'Emily R.', text: 'The real-time alerts have been incredibly helpful during my evening commutes.' },
              { name: 'Jessica K.', text: 'A must-have app for anyone concerned about personal safety.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-purple-600">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;






