import React from 'react';
import { ArrowLeft, Shield, MoveRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function EscapeTechniques() {
  const techniques = [
    {
      title: "Wrist Grab Escape",
      description: "When someone grabs your wrist, quickly rotate your arm in the direction of their thumb (the weakest point of their grip). As you rotate, pull your arm sharply towards your body.",
      video: "https://www.youtube.com/embed/9hfV1BUuq7w", // Wrist Grab Defense
    },
    {
      title: "Bear Hug Defense",
      description: "If grabbed from behind, immediately lower your center of gravity by bending your knees. Create space by using your elbows to strike sensitive areas, then turn and escape.",
      video: "https://www.youtube.com/embed/PId_nKcLOwM", // Bear Hug Defenses
    },
    {
      title: "Choke Hold Response",
      description: "Turn your head to protect your airway, use both hands to grab one of their arms, step to the side while turning to face them, then use your body weight to break their grip.",
      video: "https://www.youtube.com/embed/-V4vEyhWDZ0", // Choke Hold Defenses
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Escape Techniques</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn effective methods to break free from common holds and grabs while maintaining your safety.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {techniques.map((technique, index) => (
            <div key={index} className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <MoveRight className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-2xl font-semibold">{technique.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{technique.description}</p>
                {technique.video && (
                  <div className="aspect-w-16 aspect-h-9 mt-4">
                    <iframe
                      width="100%"
                      height="315"
                      src={technique.video}
                      title={technique.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EscapeTechniques;
