import React from 'react';
import { ArrowLeft, Shield, MoveRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function BasicStance() {
  const steps = [
    {
      title: "Proper Stance",
      description: "Stand with feet shoulder-width apart, knees slightly bent. Keep your weight evenly distributed and stay on the balls of your feet for quick movement."
    },
    {
      title: "Hand Position",
      description: "Keep your hands up at chest level, protecting your face and vital organs. Make fists with your thumbs outside, not tucked inside."
    },
    {
      title: "Movement",
      description: "Practice side-stepping and moving backward while maintaining your stance. Never cross your feet when moving."
    }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Basic Stance and Movement</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the fundamental defensive stance and movement techniques that form the foundation of self-defense.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <MoveRight className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{step.description}</p>
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
                  src="https://www.youtube.com/embed/JGTTFlp0RLk"
                  title="Basic Stance Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Practice Tips Section */}
          <div className="bg-purple-100 rounded-xl p-8 mt-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-bold">Practice Tips</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Practice these movements slowly at first, focusing on proper form</li>
              <li>Gradually increase speed as you become more comfortable</li>
              <li>Practice in front of a mirror to check your form</li>
              <li>Always maintain awareness of your surroundings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicStance;
