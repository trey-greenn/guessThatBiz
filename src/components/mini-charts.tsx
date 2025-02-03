"use client";

import { useState } from 'react';
import { StockChart } from './charts/StockChart';
import { ExternalLink } from 'lucide-react';
import { ViewMoreButton } from './view-more-buttons';
import { ViewMoreModal } from './ui/view-more-modal';

const chartData = {
  QQQ: { name: "QQQ", data: [30, 40, 45, 50, 49, 60, 70, 91] },
  SPY: { name: "SPY", data: [45, 52, 49, 55, 58, 62, 65, 70] },
  BTC: { name: "BTC", data: [65, 59, 80, 81, 56, 55, 48, 60] },
  USD: { name: "USD", data: [20, 25, 30, 35, 38, 40, 42, 45] }
};

const marketStats = [
  { advancing: 762, declining: 235 },
  { advancing: 762, declining: 235 },
  { advancing: 762, declining: 235 },
  { advancing: 762, declining: 235 },
  { advancing: 762, declining: 235 },
];

export function MiniCharts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white/5 p-6 rounded-lg border border-gray-300/20 relative">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Financial</h2>
      <ViewMoreButton onClick={() => setIsModalOpen(true)} />
      
      <div className="space-y-8">
        {/* Stock Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(chartData).map(([symbol, item]) => (
            <div key={symbol} className="bg-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">{item.name}</h3>
              <div className="h-32">
                <StockChart 
                  symbol={symbol} 
                  data={item.data.map((value, index) => ({
                    date: `D${index + 1}`,
                    value
                  }))} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg">
              <div className="flex justify-between text-sm text-gray-200">
                <span>Advancing ({stat.advancing})</span>
                <span>Declining ({stat.declining})</span>
              </div>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-red-500"
                  style={{
                    width: "100%",
                    backgroundSize: `${(stat.advancing / (stat.advancing + stat.declining)) * 100}% 100%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ViewMoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Financial Statistics"
        data={[...Object.entries(chartData), ...marketStats]}
      />
    </div>
  );
}