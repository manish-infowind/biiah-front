
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { Theme, SxProps } from '@mui/material/styles';

export type NextEventCardProps = {
  eventName?: string;
  date?: string;
  time?: string;
  details?: string;
  location?: string;
  address?: string;
  room?: string;
  sx?: SxProps<Theme>;
};

export function NextEventCard({
  eventName = 'Singforce Weekly',
  date = 'Wednesday 29 April 2024',
  time = '17:00 - 19:00',
  details = 'Event Details: Hybrid',
  location = 'The Civic Center',
  address = 'Civic Center Rd, Southampton > SO14 7LY',
  room = 'Room 304',
  sx,
}: NextEventCardProps) {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
        Next Event
      </Typography>
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          background: '#fff',
          boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
          minWidth: 260,
          ...sx,
        }}
      >
        <Typography variant="h6" sx={{ color: '#00CFE8', fontWeight: 700, mb: 2 }}>
          {eventName}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <CalendarMonthIcon sx={{ color: '#00CFE8', fontSize: 20 }} />
          <Typography variant="body1" sx={{ color: 'text.primary' }}>{date}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <AccessTimeIcon sx={{ color: '#00CFE8', fontSize: 20 }} />
          <Typography variant="body1" sx={{ color: 'text.primary' }}>{time}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <PeopleAltIcon sx={{ color: '#00CFE8', fontSize: 20 }} />
          <Typography variant="body1" sx={{ color: 'text.primary' }}>{details}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LocationOnIcon sx={{ color: '#00CFE8', fontSize: 20 }} />
          <Box>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>{location}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>{address}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>{room}</Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
