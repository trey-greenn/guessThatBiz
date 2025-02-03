import React, { useState } from 'react';
import { MiniCharts } from './components/mini-charts';
import { SocioEconomicData } from './components/socio-economic';
import { TechNews } from './components/tech-news';
import {Startup} from './components/startup';
import { lazy, Suspense } from 'react';


const MultipleChoice = lazy(() => import('./components/MultipleChoice').then(module => ({ default: module.MultipleChoice })));
const ImageQuiz = lazy(() => import('./components/ImageQuiz').then(module => ({ default: module.ImageQuiz })));
const ScrabbleQuiz = lazy(() => import('./components/ScrableQuiz').then(module => ({ default: module.ScrabbleQuiz })));

function App() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index : any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-black">
      <header className=" shadow-sm">
      <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Title */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">ECONERD</h1>
          </div>
          
          {/* Navigation Links */}
          <div className="relative flex hidden md:flex space-x-8">
          <button
                onClick={() => toggleDropdown(0)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Games
              </button>
              {openDropdown === 0 && (
                <div className="absolute mt-2 w-48 bg-gray-800 shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Multiple Choice
                    {/* business, entreprenuers, innovations/products */}
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Image Guesser
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Scramble
                  </a>
                </div>
              )}
            <button
                onClick={() => toggleDropdown(0)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Finance
              </button>
              {openDropdown === 0 && (
                <div className="absolute mt-2 w-48 bg-gray-800 shadow-lg rounded-md">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Data
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Company Research
                  </a>
                </div>
              )}
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
              Startup Directory
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex grids-col justify-center items-center mt-10">
        <div className=" space-y-8 ">
          <div className="bg-gray-500 rounded-lg p-6 relative space-y-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Games</h2>
              <button className="view-more-button text-blue-600 hover:text-blue-800 font-medium">
                View More →
              </button>
            </div>
            <div className="space-y-8 flex flex-col items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                <MultipleChoice />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <ImageQuiz />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <ScrabbleQuiz />
              </Suspense>
            </div>
          </div>
          <MiniCharts/>
          <SocioEconomicData/>
          <Startup/>
          <TechNews/>
        </div>
      </main>
    </div>
  );
}

export default App;