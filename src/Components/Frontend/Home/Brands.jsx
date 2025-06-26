import React from 'react';

// Assuming brand images are inside public/assets/brands folder
const brandLogos = [
  '../../../../public/assets/brands/amazon.png',
  '../../../../public/assets/brands/amazon_vector.png',
  '../../../../public/assets/brands/moonstar.png',
  '../../../../public/assets/brands/randstad.png',
  '../../../../public/assets/brands/start-people 1.png',
  '../../../../public/assets/brands/start.png',
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
