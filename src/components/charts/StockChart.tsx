import { Bar, BarChart, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartXAxis, ChartYAxis } from './ChartAxis';
import { ChartTooltip } from './ChartTooltip';

interface ChartData {
  date: string;
  value: number;
}

interface StockChartProps {
  symbol: string;
  data: ChartData[];
}

export function StockChart({ data }: StockChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <ChartXAxis />
        <ChartYAxis />
        <ChartTooltip />
        <Bar 
          dataKey="value" 
          fill="#8884d8"
          name="Value"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}