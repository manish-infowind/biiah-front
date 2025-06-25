import React from 'react';
import {
  Box,
  Typography,
  Button,
  Link,
  Grid,
  Card,
  IconButton,
  Divider,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { DashboardContent } from 'src/layouts/dashboard';

const PRIMARY_COLOR = '#00B6BC';
const TEXT_COLOR = '#071A24';
const LABEL_COLOR = '#00B6BC';
const DATE_COLOR = '#E48DD2';

const event = {
  title: 'Singforce Weekly',
  date: 'Sat 15 March 2025',
  time: '12:00-13:30',
  location: 'Southampton City Council Civic Centre Rd',
  room: 'Conference Room 1',
  host: 'Gavin Munn',
  type: 'Hybrid',
  link: 'https://meet.google.com/mmq-sqsi-vqr',
  music: 'The Boys of Summer',
};

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

export default function EventDetailsPage() {
  return (
    <DashboardContent maxWidth="xl" sx={{ background: '#FAF9F6', minHeight: '100vh', px: { xs: 1, sm: 3, md: 5 } }}>
      {/* Top Link and Title */}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Link
          href="/calendar"
          underline="hover"
          sx={{
            color: '#d064dd',
            fontWeight: 500,
            fontSize: 16,
            mb: 1,
            display: 'inline-block',
          }}
        >
          {'< Back to Calendar Page'}
        </Link>
        <Typography variant="h4" sx={{ fontWeight: 700, color: TEXT_COLOR, mt: 1 }}>
          Calendar
        </Typography>
        <Typography variant="h6" sx={{ color: '#6c6c6c', fontWeight: 400, mt: 0.5 }}>
          Event Details
        </Typography>
      </Box>

      {/* Two-Column Layout */}
      <Grid container spacing={3}>
        {/* Event Details Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
              background: '#fff',
              overflow: 'visible',
            }}
          >
            <Box sx={{ p: 3, pb: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_COLOR }}>
                Event details
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography fontSize={13} sx={{ color: '#b2b2b2', fontWeight: 500, mr: 0.5 }}>
                  Event Edit
                </Typography>
                <IconButton sx={{ color: TEXT_COLOR, p: 0.5 }}>
                  <EditOutlinedIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            {/* Event Info */}
            <Box sx={{ px: 3, pb: 2 }}>
              <Grid container spacing={1.5}>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Title</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.title}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: DATE_COLOR, fontWeight: 600 }}>Date</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.date}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Time</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.time}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Location</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.location}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Room</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.room}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Coach Name</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.host}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Event Type</Typography>
                  <Typography fontSize={16} sx={{ color: TEXT_COLOR, fontWeight: 500 }}>{event.type}</Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Virtual Link</Typography>
                  <Link href={event.link} target="_blank" rel="noopener" underline="hover" sx={{ color: PRIMARY_COLOR, fontSize: 16, fontWeight: 500 }}>{event.link}</Link>
                </Grid>
                <Grid size={12}>
                  <Typography fontSize={13} sx={{ color: LABEL_COLOR, fontWeight: 600 }}>Song</Typography>
                  <Link href="#" underline="hover" sx={{ color: PRIMARY_COLOR, fontSize: 16, fontWeight: 500 }}>{event.music}</Link>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
        {/* Attendees Card */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
              background: '#fff',
              overflow: 'visible',
            }}
          >
            <Box sx={{ p: 3, pb: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: TEXT_COLOR }}>
                Attendees
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ px: 3, pb: 3 }}>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid size={4}><Typography sx={{ fontWeight: 600, color: TEXT_COLOR, fontSize: 15 }}>First Name</Typography></Grid>
                <Grid size={4}><Typography sx={{ fontWeight: 600, color: TEXT_COLOR, fontSize: 15 }}>Last Name</Typography></Grid>
                <Grid size={4}><Typography sx={{ fontWeight: 600, color: TEXT_COLOR, fontSize: 15 }}>Status</Typography></Grid>
              </Grid>
              {attendeesData.map((att, idx) => (
                <Grid container spacing={1} key={att.firstName + att.lastName} sx={{ borderBottom: idx !== attendeesData.length - 1 ? '1px dotted #E48DD2' : 'none', py: 1.5 }}>
                  <Grid size={4}><Typography sx={{ color: TEXT_COLOR, fontSize: 15 }}>{att.firstName}</Typography></Grid>
                  <Grid size={4}><Typography sx={{ color: TEXT_COLOR, fontSize: 15 }}>{att.lastName}</Typography></Grid>
                  <Grid size={4} sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant={att.status === 'attend' ? 'contained' : 'outlined'}
                      sx={{
                        borderRadius: 999,
                        minWidth: 110,
                        fontWeight: 500,
                        fontSize: 14,
                        background: att.status === 'attend' ? PRIMARY_COLOR : '#F2F2F2',
                        color: att.status === 'attend' ? '#fff' : TEXT_COLOR,
                        borderColor: att.status === 'attend' ? PRIMARY_COLOR : '#B2B2B2',
                        boxShadow: 'none',
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          background: att.status === 'attend' ? '#00969A' : '#F2F2F2',
                          color: att.status === 'attend' ? '#fff' : TEXT_COLOR,
                          borderColor: att.status === 'attend' ? PRIMARY_COLOR : '#B2B2B2',
                        },
                      }}
                    >
                      ✓ Will Attend
                    </Button>
                    <Button
                      variant={att.status !== 'attend' ? 'contained' : 'outlined'}
                      sx={{
                        borderRadius: 999,
                        minWidth: 110,
                        fontWeight: 500,
                        fontSize: 14,
                        background: att.status !== 'attend' ? TEXT_COLOR : '#F2F2F2',
                        color: att.status !== 'attend' ? '#fff' : TEXT_COLOR,
                        borderColor: att.status !== 'attend' ? TEXT_COLOR : '#B2B2B2',
                        boxShadow: 'none',
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          background: att.status !== 'attend' ? '#071A24' : '#F2F2F2',
                          color: att.status !== 'attend' ? '#fff' : TEXT_COLOR,
                          borderColor: att.status !== 'attend' ? TEXT_COLOR : '#B2B2B2',
                        },
                      }}
                    >
                      ✗ Won&apos;t Attend
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
} 