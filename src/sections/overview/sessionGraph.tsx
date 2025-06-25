import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';

import { fNumber } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';

import type { Theme, SxProps } from '@mui/material/styles';

// data: [ [worse], [same], [better] ]
type Props = {
  title?: string;
  data: [number[], number[], number[]];
  categories: string[];
  sx?: SxProps<Theme>;
};

export function SessionImpactGraph({
  title = 'Session impact',
  data,
  categories,
  sx,
}: Props) {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: ['#FFD580', '#FFB74D', '#FF9800'], // light yellow, orange, deep orange
    chart: {
      background: 'rgba(255, 193, 7, 0.07)', // light orange background
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 4,
        dataLabels: { position: 'top' },
        horizontal: false,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '13px',
      fontWeight: 500,
      markers: { shape: 'square' },
      labels: { colors: theme.vars ? theme.vars.palette.text.primary : theme.palette.text.primary },
      itemMargin: { horizontal: 8, vertical: 8 },
    },
    xaxis: {
      categories,
      labels: {
        style: { fontSize: '12px' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: Math.max(...data.flat(), 10),
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
        title: { formatter: () => 'Count' },
      },
    },
  });

  const series = [
    { name: '1- Worse', data: data[0] },
    { name: '2- The Same', data: data[1] },
    { name: '3- Better', data: data[2] },
  ];

  return (
    <Card sx={sx}>
      <CardHeader title={title} />
      <Chart type="bar" series={series} options={chartOptions} sx={{ p: 2 }} />
    </Card>
  );
}
