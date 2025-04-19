import React, { useState } from 'react';

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    relationship: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.relationship) return;

    setContacts((prev) => [...prev, formData]);
    setFormData({ name: '', phone: '', relationship: '' });
  };

  const handleDelete = (indexToRemove) => {
    setContacts((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-16">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Emergency Contacts</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Add your trusted contacts who will be alerted during an emergency SOS situation.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-purple-50 p-6 rounded-xl shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="9999999999"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-700 mb-1">Relationship</label>
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Friend / Parent / Roommate"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Add Contact
        </button>
      </form>

      {contacts.length > 0 && (
        <div className="mt-10 w-full max-w-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Emergency Contacts</h2>
          <ul className="space-y-3">
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="bg-purple-100 p-4 rounded-xl shadow flex justify-between items-start"
              >
                <div>
                  <p><span className="font-semibold">Name:</span> {contact.name}</p>
                  <p><span className="font-semibold">Phone:</span> {contact.phone}</p>
                  <p><span className="font-semibold">Relationship:</span> {contact.relationship}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm text-red-600 hover:underline mt-1"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmergencyContacts;
