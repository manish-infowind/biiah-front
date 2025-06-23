// import { useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';
// //import { Iconify } from 'src/components/iconify';

// // ----------------------------------------------------------------------

// export function SignUpView() {
//     const router = useRouter();
//     const [showPassword, setShowPassword] = useState(false);

//     const handleSignIn = useCallback(() => {
//         router.push('/');
//     }, [router]);

//  const renderForm = (
//   <Box
//     sx={{
//       display: 'flex',
//       alignItems: 'center',
//       flexDirection: 'column',
//     }}
//   >
//     {/* Enter Code - medium width */}
//     <TextField
//       name="code"
//       placeholder="Enter your code"
//       sx={{
//         mb: 3,
//         width: '294px',
//         '& .MuiOutlinedInput-root': {
//           '& fieldset': { borderColor: 'black' },
//           '&:hover fieldset': { borderColor: 'black' },
//           '&.Mui-focused fieldset': { borderColor: 'black' },
//         },
//       }}
//       InputProps={{
//         sx: {
//           borderRadius: 99,
//           height: '63px', // 👈 Set fixed height
//         },
//       }}
//     />

//     {/* First / Last Name */}
//     <Box sx={{ display: 'flex', gap: 2, width: '659px', mb: 3 }}>
//       <TextField
//         name="first_name"
//         placeholder="First/Preferred Name"
//         fullWidth
//         sx={{
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': { borderColor: 'black' },
//             '&:hover fieldset': { borderColor: 'black' },
//             '&.Mui-focused fieldset': { borderColor: 'black' },
//           },
//         }}
//         InputProps={{
//           sx: {
//             borderRadius: 99,
//             height: '63px',
//           },
//         }}
//       />
//       <TextField
//         name="last_name"
//         placeholder="Last Name"
//         fullWidth
//         sx={{
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': { borderColor: 'black' },
//             '&:hover fieldset': { borderColor: 'black' },
//             '&.Mui-focused fieldset': { borderColor: 'black' },
//           },
//         }}
//         InputProps={{
//           sx: {
//             borderRadius: 99,
//             height: '63px',
//           },
//         }}
//       />
//     </Box>

//     {/* Email */}
//     <TextField
//       name="email"
//       placeholder="Email"
//       sx={{
//         mb: 3,
//         width: '402px',
//         '& .MuiOutlinedInput-root': {
//           '& fieldset': { borderColor: 'black' },
//           '&:hover fieldset': { borderColor: 'black' },
//           '&.Mui-focused fieldset': { borderColor: 'black' },
//         },
//       }}
//       InputProps={{
//         sx: {
//           borderRadius: 99,
//           height: '63px',
//         },
//       }}
//     />

//     {/* Password */}
//     <TextField
//       name="create_password"
//       type="password"
//       placeholder="Create Password"
//       sx={{
//         mb: 3,
//         width: '342px',
//         '& .MuiOutlinedInput-root': {
//           '& fieldset': { borderColor: 'black' },
//           '&:hover fieldset': { borderColor: 'black' },
//           '&.Mui-focused fieldset': { borderColor: 'black' },
//         },
//       }}
//       InputProps={{
//         sx: {
//           borderRadius: 99,
//           height: '63px',
//         },
//       }}
//     />

//     {/* Button - smaller */}
//     <Button
//       size="large"
//       type="submit"
//       color="inherit"
//       variant="contained"
//       onClick={handleSignIn}
//       sx={{
//         width: '262px',
//         height:'63px',
//         borderRadius: 99,
//         mb: 2,
//         textTransform: 'none',
//         alignSelf: 'center',
//       }}
//     >
//       Let&apos;s go!
//     </Button>
// {/* Don't have a code & Register interest - separate line */}
// <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
//   <Typography variant="body2" sx={{ color: 'black' }}>
//     Don&apos;t have a code?
//   </Typography>
//   <Typography variant="body2" sx={{ color: 'black' }}>
//     Register your interest{' '}
//     <Link
//       href="#"
//       sx={{
//         color: '#d064dd',
//         textDecoration: 'none',
//         fontWeight: 500,
//         '&:hover': {
//           textDecoration: 'underline',
//         },
//       }}
//     >
//       here
//     </Link>

//   </Typography>
// </Box>

//   </Box>
// );



//     return (
//         <>
//             <Box
//                 sx={{
//                     gap: 1.5,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     mb: 5,
//                     color: '#d064dd',
//                 }}
//             >
//                 <Typography variant="h5">Welcome!</Typography>
//             </Box>
//             {renderForm}
//         </>
//     );
// }

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function SignUpView() {
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
            {/* Enter Code */}
            <TextField
                name="code"
                placeholder="Enter your code"
                sx={{
                    mb: 3,
                    width: '294px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                }}
                InputProps={{
                    sx: {
                        borderRadius: 99,
                        height: '63px',
                    },
                }}
            />

            {/* First / Last Name */}
            <Box sx={{ display: 'flex', gap: 2, width: '659px', mb: 3 }}>
                <TextField
                    name="first_name"
                    placeholder="First/Preferred Name"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'black' },
                            '&:hover fieldset': { borderColor: 'black' },
                            '&.Mui-focused fieldset': { borderColor: 'black' },
                        },
                    }}
                    InputProps={{
                        sx: {
                            borderRadius: 99,
                            height: '63px',
                        },
                    }}
                />
                <TextField
                    name="last_name"
                    placeholder="Last Name"
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'black' },
                            '&:hover fieldset': { borderColor: 'black' },
                            '&.Mui-focused fieldset': { borderColor: 'black' },
                        },
                    }}
                    InputProps={{
                        sx: {
                            borderRadius: 99,
                            height: '63px',
                        },
                    }}
                />
            </Box>

            {/* Email */}
            <TextField
                name="email"
                placeholder="Email"
                sx={{
                    mb: 3,
                    width: '402px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                }}
                InputProps={{
                    sx: {
                        borderRadius: 99,
                        height: '63px',
                    },
                }}
            />

            {/* Password */}
            <TextField
                name="create_password"
                type="password"
                placeholder="Create Password"
                sx={{
                    mb: 3,
                    width: '342px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: 'black' },
                        '&.Mui-focused fieldset': { borderColor: 'black' },
                    },
                }}
                InputProps={{
                    sx: {
                        borderRadius: 99,
                        height: '63px',
                    },
                }}
            />

            {/* Let’s go! Button */}
            <Button
                size="large"
                type="submit"
                color="inherit"
                variant="contained"
                onClick={handleSignIn}
                sx={{
                    width: '262px',
                    height: '63px',
                    borderRadius: 99,
                    mb: 2,
                    textTransform: 'none',
                    alignSelf: 'center',
                }}
            >
                Let&apos;s go!
            </Button>

            {/* Don't have code / Register interest / Login */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 12,
                }}
            >
                <Typography variant="body2" sx={{ color: 'black' }}>
                    Don&apos;t have a code?
                </Typography>
                <Typography variant="body2" sx={{ color: 'black' }}>
                    Register your interest{' '}
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

                {/* Login Button */}
                <Button
                    size="large"
                    variant="outlined"
                    onClick={() => router.push('/login')}
                    sx={{
                        mt: 2,
                        width: '107px',
                        height: '39px',
                        borderRadius: 99,
                        textTransform: 'none',
                        color: '#F4F1ED',
                        background: "#00B6BC"

                    }}
                >
                    Login
                </Button>
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
                    color: '#d064dd',
                }}
            >
                <Typography variant="h5">Welcome!</Typography>
            </Box>
            {renderForm}
        </>
    );
}
