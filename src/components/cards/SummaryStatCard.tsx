

import Box from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


type SummaryStatCardProps = CardProps & {
  title: string;
  total: number | string;
  subtitle?: string;
  valueColor?: string; // e.g. '#00CFE8'
  backgroundColor?: string; // optional override
};

export function SummaryStatCard({
  title,
  total,
  subtitle,
  valueColor = '#00CFE8',
  backgroundColor = '#FAFAF9',
  sx,
  ...other
}: SummaryStatCardProps) {
  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: 3,
        boxShadow: '0px 4px 12px rgba(140, 152, 164, 0.08)',
        backgroundColor,
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="subtitle2" sx={{ color: 'text.primary', mb: 0.5 }}>
        {title}
      </Typography>

      <Box>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: valueColor, fontWeight: 600 }}
        >
          {total}
        </Typography>
        {subtitle && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
