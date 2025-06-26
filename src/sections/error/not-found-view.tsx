import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

export function NotFoundView() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      {/* Logo at the top center */}
      <Box sx={{ pt: 6, pb: 2 }}>
        <Logo sx={{ mx: 'auto', display: 'block', height: 64 }} />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center', color: 'grey.800' }}>
          Oh no!
        </Typography>
        <Typography sx={{ color: 'grey.600', mb: 4, textAlign: 'center' }}>
          Looks like that code doesn&apos;t exist
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => window.location.reload()}
          size="large"
          sx={{ px: 5, borderRadius: 999, fontWeight: 500, bgcolor: 'grey.800', '&:hover': { bgcolor: 'grey.800' } }}
        >
          Try again
        </Button>
      </Box>

      {/* Bottom section */}
      <Box sx={{ pb: 4, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'grey.600', mb: 0.5 }}>
          Don&apos;t have a code?
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.600', mb: 2 }}>
          Register your interest{' '}
          <Link href="#" underline="always" sx={{ color: '#C684FF', fontWeight: 500 }}>
            here
          </Link>
        </Typography>
        <Button
          component={RouterLink}
          href="/"
          variant="contained"
          color="info"
          sx={{ borderRadius: 999, minWidth: 100, fontWeight: 500 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
