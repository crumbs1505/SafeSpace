import React from 'react';
import { Shield, ArrowLeft, Dumbbell, Brain, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function SelfDefense() {
  const techniques = [
    {
      title: "Basic Stance and Movement",
      description: "Learn the fundamental defensive stance and quick movement techniques.",
      link: "/basic-stance"
    },
    {
      title: "Escape Techniques",
      description: "Master effective methods to break free from common holds and grabs.",
      link: "/escape-techniques"
    },
    {
      title: "Verbal De-escalation",
      description: "Learn how to defuse potentially dangerous situations through communication.",
      link: "/verbal-defense"
    }
  ];

  const tips = [
    {
      icon: <Dumbbell className="w-8 h-8 text-purple-600" />,
      title: "Physical Preparedness",
      description: "Stay fit and maintain awareness of your surroundings at all times."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Mental Readiness",
      description: "Trust your instincts and stay calm under pressure."
    },
    {
      icon: <Users2 className="w-8 h-8 text-purple-600" />,
      title: "Buddy System",
      description: "Whenever possible, travel with a friend or in groups."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Self Defense Techniques & Safety Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower yourself with essential self-defense knowledge and practical safety techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <Link key={index} to={technique.link} className="transform transition-transform hover:scale-105">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full p-6">
                <h3 className="text-xl font-semibold mb-2">{technique.title}</h3>
                <p className="text-gray-600">{technique.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Essential Safety Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            These self-defense techniques are for educational purposes only. We recommend taking professional self-defense classes for hands-on training and practice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelfDefense;