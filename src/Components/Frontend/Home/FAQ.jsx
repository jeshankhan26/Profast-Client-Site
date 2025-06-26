import React, { useEffect, useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/Json/faq.json')
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error('Error loading FAQs:', err));
  }, []);

  return (
    <div className="p-6 lg:p-12">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map(({ _id, question, answer }) => (
          <div key={_id} className="collapse collapse-arrow border border-base-300 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium text-indigo-600">
              {question}
            </div>
            <div className="collapse-content text-gray-700">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
