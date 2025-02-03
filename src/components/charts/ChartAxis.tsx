import { XAxis as RechartsXAxis, YAxis as RechartsYAxis } from 'recharts';

interface AxisProps {
  orientation?: 'horizontal' | 'vertical';
  dataKey?: string;
}

export function ChartXAxis({ dataKey = 'date' }: AxisProps) {
  return (
    <RechartsXAxis
      dataKey={dataKey}
      angle={-45}
      textAnchor="end"
      height={60}
      label={{ value: 'Date', position: 'bottom', offset: 20 }}
    />
  );
}

export function ChartYAxis({ orientation = 'vertical' }: AxisProps) {
  return (
    <RechartsYAxis
      orientation="left"
      label={{ 
        value: 'Price ($)', 
        angle: -90, 
        position: 'insideLeft',
        offset: 10
      }}
    />
  );
}