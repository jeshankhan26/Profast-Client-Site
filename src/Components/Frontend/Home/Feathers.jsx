import React, { useEffect, useState } from 'react';

const Feathers = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/Json/feather.json') // Make sure feather.json is inside the public/ folder
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setFeatures(data))
      .catch(err => console.error('Error loading data:', err));
  }, []);

  return (
    <div className="p-6 bg-[#EAECED] lg:mx-15">
      <h1 className="text-3xl font-bold mb-6 text-center">How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(feature => (
          <div
            key={feature._id}
            className="p-6 bg-gray-50 hover:bg-[#f0fdf4] shadow-lg rounded-xl text-center transition duration-300"
          >
            <img
              src={feature.icon_url}
              alt={feature.header}
              className="mx-auto w-16 h-16 mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{feature.header}</h2>
            <p className="text-sm text-gray-600">{feature.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feathers;
