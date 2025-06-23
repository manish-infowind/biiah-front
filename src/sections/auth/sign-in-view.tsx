import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';
//import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <TextField
        fullWidth
        name="email"
         placeholder="Email"
        sx={{ mb: 3, width: '402px', }}
        InputProps={{
          sx: { borderRadius: 99, height: '63px' },
        }}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        fullWidth
        name="password"
         placeholder="Enter password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          sx: { borderRadius: 99, height: '63px' },
        }}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3, width: '402px', }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
        sx={{
          width: '402px',
          height: '63px',
          borderRadius: 99,
          mb: 2,
          textTransform: 'none',
        }}
      >
        Let&apos;s go!
      </Button>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Typography variant="body2" sx={{ color: 'black' }}>
          Password Reset{' '}
          <Link
            href="#"
            sx={{
              color: '#d064dd',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            here
          </Link>
        </Typography>
      </Box>

    </Box>
  );

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h5">Login</Typography>
      </Box>
      {renderForm}
    </>
  );
}
