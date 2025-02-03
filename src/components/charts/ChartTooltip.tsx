import { Tooltip } from 'recharts';

export function ChartTooltip() {
  return (
    <Tooltip 
      contentStyle={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        borderRadius: '4px',
        color: 'white'
      }}
    />
  );
}