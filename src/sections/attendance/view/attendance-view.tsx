import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DashboardContent } from 'src/layouts/dashboard';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from '@mui/material/Link';
import { BackButton } from 'src/components/back-button';

const attendanceDates = ['20/05', '27/05', '03/06', '12/06', '20/06', '27/06', '3/07'];

const attendees = [
  { firstName: 'Makele', lastName: 'Briant', voicePart: 'Soprano', attendance: [1, 1, 1, 0, 1, 1, 1] },
  { firstName: 'Sophie', lastName: 'Clayton', voicePart: 'Bass', attendance: [1, 1, 1, 1, 0, 1, 1] },
  { firstName: 'John', lastName: '', voicePart: 'High', attendance: [1, 1, 1, 1, 1, 0, 1] },
  { firstName: 'Joan', lastName: '', voicePart: 'Low', attendance: [1, 1, 1, 1, 1, 1, 0] },
  { firstName: 'Bob', lastName: 'Builder', voicePart: 'Bass', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Caren', lastName: 'Corey', voicePart: 'Soprano', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'David', lastName: 'Davidson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Eric', lastName: 'Ericson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Fiona', lastName: 'Furd', voicePart: 'Alto', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Makele', lastName: 'Briant', voicePart: 'Soprano', attendance: [1, 1, 1, 0, 1, 1, 1] },
  { firstName: 'Sophie', lastName: 'Clayton', voicePart: 'Bass', attendance: [1, 1, 1, 1, 0, 1, 1] },
  { firstName: 'John', lastName: '', voicePart: 'High', attendance: [1, 1, 1, 1, 1, 0, 1] },
  { firstName: 'Joan', lastName: '', voicePart: 'Low', attendance: [1, 1, 1, 1, 1, 1, 0] },
  { firstName: 'Bob', lastName: 'Builder', voicePart: 'Bass', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Caren', lastName: 'Corey', voicePart: 'Soprano', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'David', lastName: 'Davidson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Eric', lastName: 'Ericson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Fiona', lastName: 'Furd', voicePart: 'Alto', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Makele', lastName: 'Briant', voicePart: 'Soprano', attendance: [1, 1, 1, 0, 1, 1, 1] },
  { firstName: 'Sophie', lastName: 'Clayton', voicePart: 'Bass', attendance: [1, 1, 1, 1, 0, 1, 1] },
  { firstName: 'John', lastName: '', voicePart: 'High', attendance: [1, 1, 1, 1, 1, 0, 1] },
  { firstName: 'Joan', lastName: '', voicePart: 'Low', attendance: [1, 1, 1, 1, 1, 1, 0] },
  { firstName: 'Bob', lastName: 'Builder', voicePart: 'Bass', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Caren', lastName: 'Corey', voicePart: 'Soprano', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'David', lastName: 'Davidson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Eric', lastName: 'Ericson', voicePart: 'Tenor', attendance: [1, 1, 1, 1, 1, 1, 1] },
  { firstName: 'Fiona', lastName: 'Furd', voicePart: 'Alto', attendance: [1, 1, 1, 1, 1, 1, 1] },
];

const eventSummaries = [
  { name: 'Singforce', date: '10 June 2025', attendees: 100 },
  { name: 'Singforce', date: '20 June 2025', attendees: 114 },
];

export function AttendanceView() {
  return (
    <DashboardContent
      maxWidth="xl"
      sx={{
        background: '#FAF9F6',
        minHeight: '100vh',
        px: { xs: 1, sm: 3, md: 5 },
      }}
    >
      {/* Attendance Table */}
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
          background: '#fff',
          mb: 4,
          mt: 2,
          overflowX: 'auto',
        }}
      >
        <Box sx={{ p: 3, pb: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Attendees
          </Typography>
        </Box>

        <Box sx={{ overflowX: 'auto' }}>
          <TableContainer
            sx={{
              minWidth: 900,
              width: 'max-content',
              maxHeight: 420, // approx 8 rows
              overflowY: 'auto',
              scrollbarWidth: 'thin',
            }}
          >
            <Table
              stickyHeader
              sx={{
                borderCollapse: 'separate',
                borderSpacing: 0,
                width: 'max-content',
              }}
            >
              <TableBody>
                {/* Header */}
                <TableRow>
                  {['First Name', 'Last Name', 'Voice Part'].map((label, idx) => (
                    <TableCell
                      key={label}
                      sx={{
                        position: 'sticky',
                        left: idx * 150,
                        zIndex: 2,
                        background: '#F8EFFF',
                        fontWeight: 700,
                        minWidth: 150,
                        py: 1,
                        borderRight: '2px dotted #E1BEE7',
                        ...(idx === 0 && {
                          borderTopLeftRadius: 24,
                          borderBottomLeftRadius: 24,
                        }),
                      }}
                    >
                      {label}
                    </TableCell>
                  ))}
                  {attendanceDates.map((date, idx) => (
                    <TableCell
                      key={date}
                      sx={{
                        fontWeight: 700,
                        background: '#F8EFFF',
                        textAlign: 'center',
                        minWidth: 100,
                        py: 1,
                        borderRight:
                          idx !== attendanceDates.length - 1 ? '2px dotted #E1BEE7' : undefined,
                        ...(idx === attendanceDates.length - 1 && {
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                        }),
                      }}
                    >
                      {date}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Rows */}
                {attendees.map((row, idx) => (
                  <TableRow key={idx}>
                    {[row.firstName, row.lastName, row.voicePart].map((value, i) => (
                      <TableCell
                        key={i}
                        sx={{
                          position: 'sticky',
                          left: i * 150,
                          background: '#fff',
                          zIndex: 1,
                          minWidth: 150,
                          py: 1,
                          fontWeight: 500,
                          color: '#232b2b',
                          borderRight: '2px dotted #E1BEE7',
                        }}
                      >
                        {value}
                      </TableCell>
                    ))}
                    {row.attendance.map((present, i) => (
                      <TableCell
                        key={i}
                        sx={{
                          minWidth: 100,
                          textAlign: 'center',
                          py: 1,
                          borderRight:
                            i !== row.attendance.length - 1 ? '2px dotted #E1BEE7' : undefined,
                        }}
                      >
                        {present ? (
                          <FiberManualRecordIcon sx={{ color: '#D064DD', fontSize: 18 }} />
                        ) : null}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>

      {/* Event Summary Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Member Attendance per event
        </Typography>
        <Grid container spacing={2}>
          {eventSummaries.map((event, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
                  background: '#fff',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  minHeight: 120,
                  mt: 0,
                  mb: 0,
                  mx: 1,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {event.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5, mb: 1 }}>
                  <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: '#888' }}>
                    <svg width="18" height="18" fill="none"><path d="M6.75 1.5v2.25M11.25 1.5v2.25M2.25 6.75h13.5M3.75 3.75h10.5a2.25 2.25 0 0 1 2.25 2.25v8.25a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 14.25V6a2.25 2.25 0 0 1 2.25-2.25Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#888' }}>{event.date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mt: 1 }}>
                  <Typography variant="h4" sx={{ color: '#D064DD', fontWeight: 700, lineHeight: 1 }}>
                    {event.attendees}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#D064DD', fontWeight: 500, ml: 0.5 }}>
                    Total Attendees
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardContent>
  );
}
