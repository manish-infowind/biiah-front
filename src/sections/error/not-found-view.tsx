import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import { Logo } from 'src/components/logo';


// ----------------------------------------------------------------------

export function NotFoundView() {
  const theme = useTheme();

  return (

    <>

      <Box sx={{
        py:14,
        px:4,
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>

        <Box sx={{ textAlign: 'center' }}>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: 24 }}>Oh no!</Typography>
          <Typography sx={{fontSize: 22}}>Looks like that code doesn&apos;t exist</Typography>


          <Box sx={{ width: '100%', mt: 5, textAlign: 'center' }}>
            <Button
              size="large"
              color="inherit"
              variant="contained"
              fullWidth
              sx={{ maxWidth: '262px', height: 63, borderRadius: 50, fontSize: 25, fontWeight: '400' }}
            >
              Try again
            </Button>
          </Box>
        </Box>

        {/* Don't have code / Register interest / Login */}
        <Box sx={{ textAlign: 'center', mt: 11 }}>
          <Typography variant="body1" sx={{ fontSize: 18 }}>
            Don&apos;t have a code?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18 }}>
            Register your interest{' '}
            <Link to="/" style={{ color: theme.palette.primary.main, textDecoration: 'underline' }}>here</Link>
          </Typography>

          {/* Login Button */}
          <Button
            component={Link}
            size="large"
            variant="contained"
            to="/sign-in"
            color='secondary'
            sx={{
              boxShadow: '0px 3px 6px #00000029',
              borderRadius: 50,
              px: 4,
              py: 1.2,
              lineHeight: 'normal',
              minHeight: 'auto',
              mt: 2
            }}
          >
            Login
          </Button>
        </Box>

      </Box>
    </>
  );
}
