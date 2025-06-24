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

export function AnalyticsSessionAttendees({ title = 'Session Attendees', data, categories, sx }: Props) {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: ['#D064DD'],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        borderRadius: 4,
      },
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        style: { fontSize: '10px' },
      },
    },
    yaxis: { min: 0, max: Math.max(...data) + 2 },
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
      <Chart type="bar" series={[{ name: 'Attendees', data }]} options={chartOptions} sx={{ p: 2 }} />
    </Card>
  );
}