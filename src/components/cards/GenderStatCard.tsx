import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { CardProps } from '@mui/material/Card';

type GenderStatCardProps = CardProps & {
  title: string;
  men: number;
  women: number;
  color?: string; // Default orange
  backgroundColor?: string;
};

export function GenderStatCard({
  title,
  men,
  women,
  color = '#FF9800',
  backgroundColor = '#FAFAF9',
  sx,
  ...other
}: GenderStatCardProps) {
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
      <Typography variant="subtitle2" sx={{ color: 'text.primary', mb: 1 }}>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, background: '#F4F1ED', borderRadius: 2, boxShadow: '5px 5px 10px #0000000F' }}>
        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color }}
          >
            {men}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Men
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color }}
          >
            {women}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Women
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
