"use client";

import { ViewMoreButton } from './view-more-buttons';
import { ViewMoreModal } from './ui/view-more-modal';
import { useState } from 'react';

export function TechNews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const news = [
    {
      title: "CEO of Google Decides to Poison All Employees",
      excerpt: "In an unexpected turn of events...",
    },
    {
      title: "New Data Chip Company Coming For the Top Spot",
      excerpt: "A revolutionary new semiconductor company...",
    },
    {
      title: "Mars Now Has A Successful Atmosphere After Continuous Bombing",
      excerpt: "Scientists confirm the success of...",
    },
    // Additional data for pagination
    {
      title: "AI Achieves Breakthrough in Quantum Computing",
      excerpt: "Researchers announce a major advancement...",
    },
    {
      title: "SpaceX Launches First Commercial Space Hotel",
      excerpt: "Elon Musk's company reaches new heights...",
    },
    {
      title: "Revolutionary Battery Technology Triples Phone Life",
      excerpt: "A startup unveils groundbreaking energy storage...",
    },
    {
      title: "Flying Cars Finally Ready for Mass Production",
      excerpt: "After decades of development...",
    },
    {
      title: "World's First Brain-Computer Interface Goes Live",
      excerpt: "Neuralink announces successful human trials...",
    },
    {
      title: "Underwater Cities Become Reality",
      excerpt: "Construction begins on first subsea metropolis...",
    },
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg border border-gray-300/20 relative">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Blog</h3>
      <ViewMoreButton onClick={() => setIsModalOpen(true)} />
      <div className="space-y-4">
        {news.slice(0, 3).map((item) => (
          <div key={item.title} className="bg-white/10 p-4 rounded-lg">
            <h4 className="text-lg text-gray-200 mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.excerpt}</p>
          </div>
        ))}
      </div>
      <ViewMoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Blog"
        data={news}
      />
    </div>
  );
}