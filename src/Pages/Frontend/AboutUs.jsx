import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const tabs = [
  { label: "Story", key: "story" },
  { label: "Mission", key: "mission" },
  { label: "Success", key: "success" },
  { label: "Team & Others", key: "team" }
];

const tabContents = {
  story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service 
has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business 
delivery, we ensure it reaches its destination — on time, every time.`,

  mission: `Our mission is to revolutionize the logistics industry through innovation, speed, and trust. 
We strive to create seamless delivery experiences for individuals and businesses worldwide.`,

  success: `With millions of successful deliveries, thousands of loyal clients, and a team that never 
gives up — our story is one of relentless growth and customer satisfaction.`,

  team: `Fast-Track is powered by a passionate team of logistics professionals, developers, and support 
staff. Our collaborative culture and dedication fuel our excellence every day.`
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <>
    <Helmet>
        <title>
            Fast-Track | About Page
        </title>
    </Helmet>
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-[#EAECED]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral">About Us</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Enjoy <span className="italic font-medium">fast, reliable parcel delivery</span> with real-time tracking and zero hassle. From personal packages to business shipments — <span className="italic">we deliver on time, every time</span>.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 border-b pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.key
                ? "text-green-700 font-semibold border-b-2 border-green-700"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-gray-700">
        <p>{tabContents[activeTab]}</p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
