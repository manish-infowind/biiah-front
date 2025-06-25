import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const groupInfo = {
  name: 'Quilter',
  displayName: 'Quilter Choir',
  appCode: 'O55LFN',
  logo: '/assets/workspaces/logo-1.webp', // adjust path as needed
};

const terms = {
  cadence: 'Annual',
  frequency: 'Weekly',
  startOfCadence: 'September',
};

const songCatalogue = [
  { song: 'Everywhere', artist: 'Fleetwood Mac', status: true },
  { song: 'Give It Up', artist: 'KC & the Sunshine Band', status: true },
  { song: 'Rhythm of the Night', artist: 'DeBarge', status: true },
  { song: 'Rule The World', artist: 'Take That', status: false },
  { song: 'Seasons of Love', artist: 'Rent the Musical', status: true },
  { song: 'Shut Up & Dance', artist: 'Walk The Moon', status: false },
  { song: 'Walking on Sunshine', artist: 'Katrina & the Waves', status: false },
  { song: ",Ain't Giving Up", artist: 'Craig David', status: false },
  { song: 'Are You Ready For Love', artist: 'Elton John', status: false },
  { song: 'Love Me Now', artist: 'John Legend', status: false },
  { song: 'Mamma Mia', artist: 'Abba The Script', status: false },
  { song: 'Superheroes', artist: 'Maroon 5', status: false },
];

export default function GroupDetailsView() {
  const [catalogue, setCatalogue] = useState(songCatalogue);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleToggle = (idx: number, value: boolean) => {
    setCatalogue((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, status: value } : item
      )
    );
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', background: '#FAF7F2', px: { xs: 1, md: 4 }, py: 3 }}>
      {/* Large faded logo at top right */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          right: 40,
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      >
        <img src="/assets/workspaces/logo-1.webp" alt="Quilter" style={{ width: 220, height: 'auto' }} />
      </Box>


      {/* Info Cards */}
      <Grid container spacing={3} sx={{ mb: 4, zIndex: 1, position: 'relative' }}>
        {/* Group Info Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 1, p: 2, background: '#fff' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Group Info
              </Typography>
              <Button size="small" startIcon={<EditIcon />} sx={{ fontSize: 12, textTransform: 'none', color: '#222', background: '#F5F5F5', borderRadius: 2, px: 1.5, py: 0.5 }}
                onClick={() => setEditModalOpen(true)}
              >
                Edit Group Info
              </Button>
            </Box>
            <CardContent sx={{ pt: 0 }}>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ color: '#E040FB' }}>
                  Name: <span style={{ color: '#222' }}>{groupInfo.name}</span>
                </Typography>
                <Typography variant="body2" sx={{ color: '#EC407A' }}>
                  Display Name: <span style={{ color: '#222' }}>{groupInfo.displayName}</span>
                </Typography>
                <Typography variant="body2" sx={{ color: '#BA68C8' }}>
                  App Code: <span style={{ color: '#222' }}>{groupInfo.appCode}</span>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 0.5 }}>
                  Logo:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 1 }}>
                  <CardMedia
                    component="img"
                    image={groupInfo.logo}
                    alt="logo"
                    sx={{ width: 140, height: 70, objectFit: 'contain', borderRadius: 2, boxShadow: 1, background: '#fff', mb: 1 }}
                  />
                  <Button size="small" sx={{ fontSize: 11, color: '#666', background: '#F5F5F5', borderRadius: 2, px: 2, py: 0.5 }}>
                    Edit Logo
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {/* Terms Card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 1, p: 2, background: '#fff' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Terms
            </Typography>
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ background: '#F9F3FB', borderRadius: 3, p: 2 }}>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    <span style={{ color: '#E040FB' }}>Cadence:</span> <span style={{ color: '#222' }}>{terms.cadence}</span>
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ color: '#EC407A' }}>Frequency:</span> <span style={{ color: '#222' }}>{terms.frequency}</span>
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ color: '#BA68C8' }}>Start of Cadence:</span> <span style={{ color: '#222' }}>{terms.startOfCadence}</span>
                  </Typography>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Song Catalogue */}
      <Box sx={{ mt: 2, zIndex: 1, position: 'relative' }}>
        <Card sx={{ borderRadius: 4, boxShadow: 1, background: '#fff', p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            Song Catalogue
          </Typography>
          <Box sx={{ background: '#F9F3FB', borderRadius: 3, p: 2 }}>
            <Grid container sx={{ borderBottom: '2px solid #F3D1F7', pb: 1, mb: 1 }}>
              <Grid size={{ xs: 5, sm: 5, md: 5 }}>
                <Typography variant="body2" sx={{ color: '#E040FB', fontWeight: 600 }}>
                  Song
                </Typography>
              </Grid>
              <Grid size={{ xs: 4, sm: 4, md: 4 }}>
                <Typography variant="body2" sx={{ color: '#E040FB', fontWeight: 600 }}>
                  Artist
                </Typography>
              </Grid>
              <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                <Typography variant="body2" sx={{ color: '#E040FB', fontWeight: 600 }}>
                  Status
                </Typography>
              </Grid>
            </Grid>
            {catalogue.map((row, idx) => (
              <Grid
                container
                key={row.song}
                alignItems="center"
                sx={{ py: 0.5, borderBottom: idx !== catalogue.length - 1 ? '1px dashed #F3D1F7' : 'none' }}
              >
                <Grid size={{ xs: 5, sm: 5, md: 5 }}>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#222' }}>
                    {row.song}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 4 }}>
                  <Typography variant="body2" sx={{ color: '#222' }}>
                    {row.artist}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, sm: 3, md: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button
                      size="small"
                      variant={row.status ? 'contained' : 'outlined'}
                      sx={{
                        minWidth: 36,
                        height: 28,
                        fontSize: 13,
                        px: 1.5,
                        background: row.status ? '#F06292' : '#fff',
                        color: row.status ? '#fff' : '#222',
                        borderColor: '#F06292',
                        borderRadius: 2,
                        boxShadow: row.status ? 1 : 0,
                        mr: 1,
                        '&:hover': {
                          background: row.status ? '#EC407A' : '#fff',
                        },
                      }}
                      onClick={() => handleToggle(idx, true)}
                    >
                      On
                    </Button>
                    <Button
                      size="small"
                      variant={!row.status ? 'contained' : 'outlined'}
                      sx={{
                        minWidth: 36,
                        height: 28,
                        fontSize: 13,
                        px: 1.5,
                        background: !row.status ? '#263238' : '#fff',
                        color: !row.status ? '#fff' : '#222',
                        borderColor: '#263238',
                        borderRadius: 2,
                        boxShadow: !row.status ? 1 : 0,
                        '&:hover': {
                          background: !row.status ? '#222' : '#fff',
                        },
                      }}
                      onClick={() => handleToggle(idx, false)}
                    >
                      Off
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
