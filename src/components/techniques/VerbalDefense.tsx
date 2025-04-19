import React from 'react';
import { ArrowLeft, Shield, MessageCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function VerbalDefense() {
  const strategies = [
    {
      title: "Set Clear Boundaries",
      description: "Use a firm, confident voice to clearly state your boundaries. Example: 'Stop right there. Do not come any closer.'",
    },
    {
      title: "Command Presence",
      description: "Stand tall, maintain eye contact, and use authoritative body language. Your non-verbal communication should match your verbal message.",
    },
    {
      title: "De-escalation Techniques",
      description: "Use calm but firm language, acknowledge their perspective without agreeing, and look for ways to defuse the situation without confrontation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/self-defense" className="flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Self Defense
          </Link>
        </div>

        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verbal Defense Strategies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn powerful verbal techniques to defuse potentially dangerous situations before they become physical.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {strategies.map((strategy, index) => (
            <div key={index} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-2xl font-semibold">{strategy.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{strategy.description}</p>
              </div>
            </div>
          ))}

          {/* Embedded YouTube Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Watch Video Tutorial</h2>
              <div className="aspect-w-16 aspect-h-9">
                {/* Embedded YouTube Video */}
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/BUg0zlNcxFY"
                  title="Verbal Defense Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerbalDefense;
