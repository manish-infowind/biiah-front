import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';

type Props = {
  title?: string;
  data: number[];
  categories: string[];
  height?: number; // chart height in px
  color?: string; // line and dot color
  lineWidth?: number; // line width
  dotSize?: number; // dot size
};

export function AnalyticsAttendeesPerWeek({
  title = 'Attendees per week',
  data,
  categories,
  height = 320,
  color,
  lineWidth = 3,
  dotSize = 6,
}: Props) {
  const theme = useTheme();
  const chartColor = color || theme.palette.secondary.main;

  // Defensive checks
  const isValid =
    Array.isArray(data) &&
    Array.isArray(categories) &&
    data.length > 0 &&
    categories.length > 0 &&
    data.length === categories.length;

  // Always call useChart, but provide fallback options if invalid
  const chartOptions = useChart(
    isValid
      ? {
          chart: { id: 'attendees-line', toolbar: { show: false } },
          stroke: { curve: 'smooth', width: lineWidth, colors: [chartColor] },
          markers: {
            size: dotSize,
            colors: ['#fff'],
            strokeColors: chartColor,
            strokeWidth: 2,
          },
          xaxis: { categories },
          yaxis: { min: 0, max: Math.max(...data) + 20 },
          grid: { strokeDashArray: 4 },
          tooltip: {
            y: {
              formatter: (value: number) => fNumber(value),
              title: { formatter: () => 'Attendees' },
            },
          },
        }
      : {
          chart: { id: 'attendees-line', toolbar: { show: false } },
          stroke: { curve: 'smooth', width: lineWidth, colors: [chartColor] },
          markers: {
            size: dotSize,
            colors: ['#fff'],
            strokeColors: chartColor,
            strokeWidth: 2,
          },
          xaxis: { categories: [] },
          yaxis: { min: 0, max: 10 },
          grid: { strokeDashArray: 4 },
          tooltip: {
            y: {
              formatter: (value: number) => fNumber(value),
              title: { formatter: () => 'Attendees' },
            },
          },
        }
  );

  if (!isValid) {
    return (
      <Card>
        <CardHeader title={title} />
        <div style={{ padding: 16, color: theme.palette.text.secondary }}>
          No data available for chart.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader title={title} />
      <div style={{ minHeight: height }}>
        <Chart
          type="line"
          series={[{ name: 'Attendees', data }]}
          options={chartOptions}
          sx={{ p: 2 }}
          height={height}
        />
      </div>
    </Card>
  );
}

