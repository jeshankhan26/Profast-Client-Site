import React from 'react';

// Assuming brand images are inside public/assets/brands folder
const brandLogos = [
'  https://i.ibb.co/F4BYTRj9/amazon.png',
'https://i.ibb.co/QvNYvkvx/amazon-vector.png',
'https://i.ibb.co/5WChkfY2/casio.png',
'https://i.ibb.co/3yRZDKmy/moonstar.png',
'https://i.ibb.co/xSTwLb1W/randstad.png',
'https://i.ibb.co/jZBfS7Zt/start.png',
'https://i.ibb.co/PGXCKnw2/start-people-1.png'
];

const Brands = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center font-bold lg:text-3xl text-xl text-gray-800 mb-8">
          We've helped thousands of sales teams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="lg:w-full w-40 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
