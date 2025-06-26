import React, { useEffect, useState } from 'react';

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('/Json/service.json') // Make sure feather.json is inside the public folder under /Json/
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setService(data))
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  return (
    <section className="py-12 bg-[#03373D] text-white rounded-lg lg:px-20 lg:mx-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className=" max-w-2xl mx-auto mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item) => (
            <div
              key={item._id}
              className="bg-[#F7F9FC] p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 text-center"
            >
              <img
                src={item.icon_url}
                alt={item.header}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.header}
              </h2>
              <p className="text-gray-600 text-sm">{item.short_description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
