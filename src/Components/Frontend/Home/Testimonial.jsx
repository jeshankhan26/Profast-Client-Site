import React, { useEffect, useState } from 'react';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetching data from local or server file
    fetch('/Json/testimonial.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error fetching testimonials:', err));
  }, []);

  return (
    <div className="p-6 lg:p-12">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ _id, comment, user }) => (
          <div key={_id} className="p-6 border rounded-lg shadow-md bg-white">
            <p className="text-gray-700 mb-4 italic">“{comment}”</p>
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full border-2"
              />
              <div>
                <h4 className="text-lg font-semibold">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
