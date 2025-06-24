import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';

import type { SxProps, Theme } from '@mui/material/styles';

type Props = {
  title?: string;
  data: number[];
  categories: string[];
  sx?: SxProps<Theme>;
};

export function AnalyticsAttendeesPerWeek({ title = 'Attendees per week', data, categories, sx }: Props) {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: ['#D064DD'],
    chart: {
      background: 'rgba(208, 100, 221, 0.07)', // light pink background
      toolbar: { show: false },
    },
    stroke: { width: 2.5, curve: 'straight', colors: ['#D064DD'] },
    markers: {
      size: 7,
      colors: ['#fff'],
      strokeColors: '#D064DD',
      strokeWidth: 3,
      hover: { size: 9 },
    },
    xaxis: {
      categories,
      labels: {
        style: { fontSize: '12px' },
      },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    yaxis: {
      min: 0,
      max: Math.max(...data, 50),
      tickAmount: 5,
      labels: { style: { fontSize: '12px' } },
    },
    grid: {
      borderColor: theme.vars ? theme.vars.palette.divider : theme.palette.divider,
      strokeDashArray: 3,
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
    },
    tooltip: {
      y: {
        formatter: (value: number) => fNumber(value),
        title: { formatter: () => 'Attendees' },
      },
    },
  });

  return (
    <Card sx={sx}>
      <CardHeader title={title} />
      <Chart type="line" series={[{ name: 'Attendees', data }]} options={chartOptions} sx={{ p: 2 }} />
    </Card>
  );
}
