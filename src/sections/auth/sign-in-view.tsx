import { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';
//import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export function SignInView() {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const styleTextField = {
    '& .MuiInputBase-root': {
        boxShadow: '7px 7px 10px #0000000F',
        borderRadius: 50,
        height: 63,
        '& input': {
            padding: '0 25px'
        },
        '& fieldset': { borderColor: `${theme.palette.grey[900]}` },
        '&:hover fieldset': { borderColor: `${theme.palette.grey[900]}` },
        '&.Mui-focused fieldset': { borderColor: `${theme.palette.grey[900]}` },
    }
};

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // For now, just log the values
      console.log('Sign in values:', values);
      // You can add your sign-in logic here
    },
  });

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);


  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
      <Box
        sx={{
          mb: 7,
          textAlign: 'center'
        }}
      >
        <Typography sx={{ fontWeight: '400' }} variant="h3">Login</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={styleTextField}
        />

        <TextField
          fullWidth
          name="password"
          placeholder="Enter password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={styleTextField}
        />

        <Button
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          fullWidth
          sx={{ width: '100%', height: 63, borderRadius: 50, fontSize: 25, fontWeight: '400' }}
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
    </Box>
  );
}
