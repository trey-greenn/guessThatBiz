import { ExternalLink } from 'lucide-react';

interface ViewMoreButtonProps {
  onClick: () => void;
}

export function ViewMoreButton({ onClick }: ViewMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
    >
      <span>View More</span>
      <ExternalLink size={14} />
    </button>
  );
}