import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const PRIMARY_COLOR = '#00B6BC';
const TEXT_COLOR = '#071A24';

// Dummy attendees for demo
const defaultAttendees = [
  { firstName: 'Jason', lastName: 'Hunt', status: 'attend' },
  { firstName: 'Chris', lastName: 'Fort', status: 'attend' },
  { firstName: 'Ben', lastName: 'Wall', status: 'attend' },
  { firstName: 'Makele', lastName: 'Briant', status: 'attend' },
  { firstName: 'Sophie', lastName: 'Clayton', status: 'attend' },
  { firstName: 'John', lastName: '', status: 'attend' },
  { firstName: 'Joan', lastName: '', status: 'attend' },
  { firstName: 'Sam', lastName: '', status: 'attend' },
];

export function AttendeesModal({ open, onClose, event, attendees = defaultAttendees }: {
  open: boolean;
  onClose: () => void;
  event: any;
  attendees?: { firstName: string; lastName: string; status: string }[];
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" PaperProps={{ sx: { borderRadius: 4, p: 2, bgcolor: '#faf9f6' } }}>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 22, color: TEXT_COLOR, pb: 0 }}>Event Details</DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Event Details Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: 2, minWidth: 320, position: 'relative' }}>
              <Typography variant="h6" sx={{ color: TEXT_COLOR, fontWeight: 700, mb: 2 }}>Event details</Typography>
              <Button
                endIcon={<EditOutlinedIcon sx={{ fontSize: 18, ml: 1 }} />}
                sx={{
                  position: 'absolute',
                  top: 18,
                  right: 18,
                  color: TEXT_COLOR,
                  fontWeight: 500,
                  fontSize: 15,
                  textTransform: 'none',
                  minWidth: 0,
                  px: 0.5,
                  py: 0,
                  background: 'none',
                  boxShadow: 'none',
                  '&:hover': { background: 'none', color: PRIMARY_COLOR },
                }}
              >
                Event Edit
              </Button>
              <Box sx={{ mt: 3 }}>
                <EventDetailRow label="Title" value={event.title} />
                <EventDetailRow label="Date" value={event.date} />
                <EventDetailRow label="Time" value={event.time} />
                <EventDetailRow label="Location" value={event.location} />
                <EventDetailRow label="Room" value={event.room} />
                <EventDetailRow label="Coach Name" value={event.host} />
                <EventDetailRow label="Event Type" value="Hybrid" />
                <EventDetailRow label="Virtual Link" value={<a href={event.link} style={{ color: PRIMARY_COLOR }} target="_blank" rel="noopener noreferrer">{event.link}</a>} />
                <EventDetailRow label="Song 1" value={<a href="#" style={{ color: PRIMARY_COLOR }}>The Boys of Summer</a>} />
              </Box>
            </Box>
          </Grid>
          {/* Attendees Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: 2, minWidth: 400 }}>
              <Typography variant="h6" sx={{ color: TEXT_COLOR, fontWeight: 700, mb: 2 }}>Attendees</Typography>
              <Box sx={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'inherit' }}>
                  <thead>
                    <tr style={{ background: '#E6F7F7' }}>
                      <th style={{ borderRadius: 20, padding: 10, color: TEXT_COLOR, fontWeight: 600, fontSize: 16 }}>First Name</th>
                      <th style={{ color: TEXT_COLOR, fontWeight: 600, fontSize: 16 }}>Last Name</th>
                      <th style={{ color: TEXT_COLOR, fontWeight: 600, fontSize: 16 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendees.map((a, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: 10 }}>{a.firstName}</td>
                        <td style={{ padding: 10 }}>{a.lastName}</td>
                        <td style={{ padding: 10 }}>
                          <Button
                            variant="contained"
                            sx={{
                              background: PRIMARY_COLOR,
                              color: '#fff',
                              borderRadius: 999,
                              px: 2.5,
                              py: 0.5,
                              fontWeight: 600,
                              fontSize: 14,
                              textTransform: 'none',
                              minWidth: 120,
                              mr: 1,
                              boxShadow: 'none',
                              '&:hover': { background: '#00969A' },
                            }}
                          >
                            ✓ Will Attend
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              background: a.status === 'attend' ? '#071A24' : '#B2B2B2',
                              color: '#fff',
                              borderRadius: 999,
                              px: 2.5,
                              py: 0.5,
                              fontWeight: 600,
                              fontSize: 14,
                              textTransform: 'none',
                              minWidth: 120,
                              boxShadow: 'none',
                              '&:hover': { background: '#071A24' },
                            }}
                          >
                            ✗ Won&apos;t Attend
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

function EventDetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', mb: 1.2 }}>
      <Typography sx={{ minWidth: 110, color: PRIMARY_COLOR, fontWeight: 500, fontSize: 15 }}>{label}</Typography>
      <Typography sx={{ color: TEXT_COLOR, fontWeight: 500, fontSize: 15, ml: 2 }}>{value}</Typography>
    </Box>
  );
} 