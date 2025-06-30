import { useState, useCallback } from 'react';
import { Box, Button, colors, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';


import { useRouter } from 'src/routes/hooks';
import { themeConfig } from 'src/theme';

// ----------------------------------------------------------------------


const validationSchema = yup.object({
    code: yup
        .string()
        .required('Code is required'),
    first_name: yup
        .string()
        .required('First name is required'),
    last_name: yup
        .string()
        .required('Last name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    create_password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export function SignUpView() {
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
            code: '',
            first_name: '',
            last_name: '',
            email: '',
            create_password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // For now, just log the values
            console.log('Form values:', values);
            // You can add your sign-up logic here
        },
    });

    const handleSignIn = useCallback(() => {
        router.push('/');
    }, [router]);


    return (
        <Box>
            <Box
                sx={{
                    mb: 7,
                    color: theme.palette.primary.main,
                    textAlign: 'center'
                }}
            >
                <Typography sx={{ fontWeight: '400' }} variant="h3">Welcome!</Typography>
            </Box>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 2
                }}
                noValidate
                autoComplete="off"
            >
                {/* Enter Code */}
                <Box sx={{ width: '100%', maxWidth: '320px' }}>
                    <TextField
                        name="code"
                        placeholder="Enter your code"
                        fullWidth
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.code && Boolean(formik.errors.code)}
                        helperText={formik.touched.code && formik.errors.code}
                        sx={styleTextField}
                    />
                </Box>

                {/* First / Last Name */}
                <Box sx={{ width: '100%', maxWidth: '297px' }}>
                    <TextField
                        name="first_name"
                        placeholder="First/Preferred Name"
                        fullWidth
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                        helperText={formik.touched.first_name && formik.errors.first_name}
                        sx={styleTextField}
                    />
                </Box>
                <Box sx={{ width: '100%', maxWidth: '297px' }}>
                    <TextField
                        name="last_name"
                        placeholder="Last Name"
                        fullWidth
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                        helperText={formik.touched.last_name && formik.errors.last_name}
                        sx={styleTextField}
                    />
                </Box>

                {/* Email */}
                <Box sx={{ width: '100%', maxWidth: '400px' }}>
                    <TextField
                        name="email"
                        placeholder="Email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={styleTextField}
                    />
                </Box>

                {/* Password */}
                <Box sx={{ width: '100%', maxWidth: '350px' }}>
                    <TextField
                        name="create_password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create Password"
                        fullWidth
                        value={formik.values.create_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.create_password && Boolean(formik.errors.create_password)}
                        helperText={formik.touched.create_password && formik.errors.create_password}
                        sx={styleTextField}
                    />
                </Box>

                {/* Let's go! Button */}
                <Box sx={{ width: '100%', mt: 5, textAlign: 'center' }}>
                    <Button
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        fullWidth
                        sx={{ maxWidth: '262px', height: 63, borderRadius: 50, fontSize: 25, fontWeight: '400' }}
                    >
                        Let&apos;s go!
                    </Button>
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
        </Box>
    );
}
