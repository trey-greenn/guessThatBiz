import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ViewMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: any[];
  itemsPerPage?: number;
}

export function ViewMoreModal({ isOpen, onClose, title, data, itemsPerPage = 9 }: ViewMoreModalProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl bg-gray-900/95 border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-200 flex justify-between items-center">
            {title}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
            >
              {/* Render content based on data type */}
              {typeof item === 'object' ? (
                <div className="space-y-2">
                  {Object.entries(item).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-400">{key}: </span>
                      <span className="text-gray-200">{String(value)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-gray-200">{String(item)}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-4 py-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-gray-200">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}