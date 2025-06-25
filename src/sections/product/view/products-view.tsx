import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Link,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import LinkIcon from '@mui/icons-material/Link';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PersonIcon from '@mui/icons-material/Person';
import { Calendar } from 'src/components/calendar/calendar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import { EventEditModal } from 'src/components/calendar/EventEditModal';

// Dummy data for demonstration
const events = [
  {
    id: 1,
    title: 'Singforce Weekly',
    date: 'Sat 15 March 2025',
    time: '12:00-13:30',
    details: 'Event Details: Hybrid',
    location: 'Southampton City Council Civic Centre Rd',
    room: 'Conference Room 1',
    link: 'https://meet.google.com/mmq-sqsi-vqr',
    host: 'Gavin Munn',
    music: 'The Boys of Summer',
    attendees: 100,
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'Singforce Weekly',
    date: 'Sat 22 March 2025',
    time: '12:00-13:30',
    details: 'Event Details: Hybrid',
    location: 'Southampton City Council Civic Centre Rd',
    room: 'Conference Room 1',
    link: 'https://meet.google.com/mmq-sqsi-vqr',
    host: 'Gavin Munn',
    music: 'The Boys of Summer',
    attendees: 100,
    status: 'Complete',
  },
  {
    id: 3,
    title: 'Singforce Weekly',
    date: 'Sat 29 March 2025',
    time: '12:00-13:30',
    details: 'Event Details: Hybrid',
    location: 'Southampton City Council Civic Centre Rd',
    room: 'Conference Room 1',
    link: 'https://meet.google.com/mmq-sqsi-vqr',
    host: 'Gavin Munn',
    music: 'The Boys of Summer',
    attendees: 100,
    status: 'Complete',
  },
];

const attendeesData = [
  { firstName: 'Jason', lastName: 'Hunt', status: 'attend' },
  { firstName: 'Chris', lastName: 'Fort', status: 'attend' },
  { firstName: 'Ben', lastName: 'Wall', status: 'attend' },
  { firstName: 'Makele', lastName: 'Briant', status: 'attend' },
  { firstName: 'Sophie', lastName: 'Clayton', status: 'attend' },
  { firstName: 'John', lastName: '', status: 'attend' },
  { firstName: 'Joan', lastName: '', status: 'attend' },
  { firstName: 'Sam', lastName: '', status: 'attend' },
];

// Color constants
const PRIMARY_COLOR = '#00B6BC';
const TEXT_COLOR = '#071A24';

function NextEventCard({ event }: { event: typeof events[0] }) {
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: '#fff',
        boxShadow: 2,
        minWidth: 350,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mb: 1, gap: 0.5 }}>
        <Button
          onClick={() => setOpenEdit(true)}
          endIcon={<EditOutlinedIcon sx={{ fontSize: 20, ml: 1 }} />}
          sx={{
            color: '#071A24',
            fontWeight: 500,
            fontSize: 16,
            textTransform: 'none',
            minWidth: 0,
            px: 0,
            py: 0,
            justifyContent: 'flex-end',
            background: 'none',
            boxShadow: 'none',
            '&:hover': { background: 'none', color: PRIMARY_COLOR },
          }}
        >
          Event Edit
        </Button>
        <Button
          onClick={() => navigate('/event-details')}
          endIcon={<CheckCircleOutlineIcon sx={{ fontSize: 20, ml: 1 }} />}
          sx={{
            color: '#071A24',
            fontWeight: 500,
            fontSize: 16,
            textTransform: 'none',
            minWidth: 0,
            px: 0,
            py: 0,
            justifyContent: 'flex-end',
            background: 'none',
            boxShadow: 'none',
            '&:hover': { background: 'none', color: PRIMARY_COLOR },
          }}
        >
          Attendance
        </Button>
      </Box>
      <EventEditModal open={openEdit} onClose={() => setOpenEdit(false)} event={event} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography fontSize={14} color="#B2B2B2">Next event</Typography>
        <Box>
          <IconButton size="small" sx={{ color: PRIMARY_COLOR }}><EditIcon fontSize="small" /></IconButton>
          <IconButton size="small" sx={{ color: PRIMARY_COLOR }}><PersonIcon fontSize="small" /></IconButton>
        </Box>
      </Box>
      <Typography variant="h6" sx={{ color: PRIMARY_COLOR, fontWeight: 600, mb: 1 }}>{event.title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <CalendarMonthIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.date}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <AccessTimeIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.time}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <span style={{ fontSize: 18, color: PRIMARY_COLOR }}>🎫</span> {event.details}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <RoomIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.location}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <span style={{ fontSize: 18, color: PRIMARY_COLOR }}>🏢</span> {event.room}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <LinkIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} />
        <Link href={event.link} target="_blank" rel="noopener" underline="hover" sx={{ color: PRIMARY_COLOR }}>
          {event.link}
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <PersonIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.host}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
        <MusicNoteIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} />
        <Link href="#" underline="hover" sx={{ color: PRIMARY_COLOR }}>{event.music}</Link>
      </Box>
      <Button
        variant="outlined"
        sx={{
          mt: 2,
          borderRadius: 999,
          width: 140,
          alignSelf: 'flex-end',
          color: PRIMARY_COLOR,
          borderColor: PRIMARY_COLOR,
          fontWeight: 600,
          textTransform: 'none',
          fontSize: 16,
          '&:hover': { background: PRIMARY_COLOR, color: '#fff', borderColor: PRIMARY_COLOR },
        }}
      >
        {event.status}
      </Button>
    </Box>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 3,
        mb: 3,
        bgcolor: '#fafbfa',
        boxShadow: 2,
        position: 'relative',
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Typography variant="h6" sx={{ color: PRIMARY_COLOR, fontWeight: 600, mb: 1 }}>{event.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <CalendarMonthIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.date}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <AccessTimeIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.time}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <span style={{ fontSize: 18, color: PRIMARY_COLOR }}>🎫</span> {event.details}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <RoomIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.location} | {event.room}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <LinkIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} />
            <Link href={event.link} target="_blank" rel="noopener" underline="hover" sx={{ color: PRIMARY_COLOR }}>
              {event.link}
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <PersonIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} /> {event.host}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 15, color: TEXT_COLOR }}>
            <MusicNoteIcon fontSize="small" sx={{ color: PRIMARY_COLOR }} />
            <Link href="#" underline="hover" sx={{ color: PRIMARY_COLOR }}>{event.music}</Link>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
          <Typography fontSize={14} sx={{ color: '#B2B2B2', mb: 0.5 }}>
            Total Attendees
          </Typography>
          <Typography variant="h4" fontWeight={600} sx={{ color: PRIMARY_COLOR }}>
            {event.attendees}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
            <Typography fontSize={12} sx={{ color: '#B2B2B2' }}>
              Attendees Edit
            </Typography>
            <IconButton size="small" sx={{ color: PRIMARY_COLOR }}><EditIcon fontSize="small" /></IconButton>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: 999,
              width: 120,
              background: PRIMARY_COLOR,
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 16,
              boxShadow: 'none',
              '&:hover': { background: '#00969A' },
            }}
          >
            {event.status === 'Upcoming' ? 'Upcoming' : 'Complete'}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function CalendarOverview() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 2, 7)); // March 7, 2025

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, bgcolor: '#f8f8f8', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: -1, color: TEXT_COLOR }}>
            Calendar
          </Typography>
          <Typography fontSize={18} sx={{ color: '#4B5C6B' }}>Overview</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 999,
            px: 3,
            py: 1.2,
            fontWeight: 500,
            background: PRIMARY_COLOR,
            color: '#fff',
            textTransform: 'none',
            fontSize: 16,
            boxShadow: 'none',
            '&:hover': { background: '#00969A' },
          }}
        >
          Add Event
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Calendar
            selectedDate={selectedDate}
            onChange={setSelectedDate}
            highlightDays={[6, 7, 8, 9, 10, 11, 12, 17, 18, 19, 24, 25, 26, 27, 28]}
            primaryColor={PRIMARY_COLOR}
            textColor={TEXT_COLOR}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <NextEventCard event={events[0]} />
          </Grid>
      </Grid>
      <Typography variant="h6" fontWeight={600} mb={2} sx={{ color: TEXT_COLOR }}>
        All Events
      </Typography>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Box>
  );
}
