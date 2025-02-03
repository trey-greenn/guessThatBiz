"use client";

import { ViewMoreButton } from './view-more-buttons';
import { ViewMoreModal } from './ui/view-more-modal';
import { useState } from 'react';

export function Startup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = [
    { title: "Murder Data By State", value: "View detailed statistics" },
    { title: "Wealth Per Capita", value: "Economic indicators" },
    { title: "Computers Per 1000", value: "Technology adoption rates" },
    { title: "Available Jobs By State", value: "Employment statistics" },
    { title: "Crime Statistics By State", value: "Safety metrics" },
    // Additional data for pagination
    { title: "Education Levels By Region", value: "Academic achievements" },
    { title: "Healthcare Access Index", value: "Medical facility distribution" },
    { title: "Income Inequality Metrics", value: "Economic disparity" },
    { title: "Public Transportation Usage", value: "Transit statistics" },
    { title: "Environmental Quality Scores", value: "Pollution metrics" },
    { title: "Housing Affordability Index", value: "Real estate analysis" },
    { title: "Social Mobility Rates", value: "Economic opportunity" },
    { title: "Digital Literacy Rates", value: "Tech proficiency" },
    { title: "Mental Health Statistics", value: "Wellness indicators" },
    { title: "Cultural Diversity Index", value: "Demographics data" },
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg border border-gray-300/20 relative">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Startup Directory</h3>
      <ViewMoreButton onClick={() => setIsModalOpen(true)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.slice(0, 5).map((category) => (
          <div key={category.title} className="bg-white/10 p-4 rounded-lg">
            <h4 className="text-gray-200 mb-2">{category.title}</h4>
            <div className="h-32 flex items-center justify-center">
              <span className="text-gray-400">{category.value}</span>
            </div>
          </div>
        ))}
      </div>
      <ViewMoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Socioeconomic Indicators"
        data={categories}
      />
    </div>
  );
}