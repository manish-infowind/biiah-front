import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import EditAccountModal from '../EditAccountModal';
import DeleteAccountModal from '../DeleteAccountModal';
import { useRouter } from 'src/routes/hooks';

export default function AccountInfoView() {
  const [fields, setFields] = useState({
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'Female',
    pronouns: 'She/Her',
    email: 'janesmith@gmail.com',
    password: '***************',
  });

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteOption, setDeleteOption] = useState('personal-email');

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setEditOpen(false);
    // Add save logic here if needed
  };

  const handleDeleteOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteOption(e.target.value);
  };

  const handleDeleteSave = () => {
    setDeleteOpen(false);
    // Add delete logic here if needed
  };

  const handleLogout = () => {
    router.push('/sign-in');
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: '#FAF9F6',
        px: { xs: 1, sm: 3, md: 5 },
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Card for Account Info */}
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)',
          background: '#fff',
          minWidth: 700,
          maxWidth: 900,
          px: 4,
          py: 3,
          mb: 4,
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Account Info
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => setEditOpen(true)}>
            <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
              Edit Account Info
            </Typography>
            <span role="img" aria-label="edit" style={{ fontSize: 18, color: '#888' }}>✏️</span>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box sx={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              name="firstName"
              value={fields.firstName}
              onChange={handleChange}
              placeholder="First/Preferred Name:"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
            <TextField
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              placeholder="Last Name:"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
            <TextField
              name="gender"
              value={fields.gender}
              onChange={handleChange}
              placeholder="Gender:"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
            <TextField
              name="pronouns"
              value={fields.pronouns}
              onChange={handleChange}
              placeholder="Pronouns:"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
          </Box>
          <Box sx={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="Email:"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
            <TextField
              name="password"
              value={fields.password}
              onChange={handleChange}
              placeholder="Password:"
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  borderRadius: 999,
                  background: '#fff',
                  '& fieldset': { borderColor: '#00CFE8', borderWidth: 1.5 },
                  fontSize: 15,
                  px: 2,
                },
              }}
              size="small"
            />
            <Link href="#" underline="hover" sx={{ color: '#00CFE8', fontSize: 14, mt: 1, ml: 1 }}>
              Do you want to reset your password?
            </Link>
          </Box>
        </Box>
      </Card>

      {/* Bottom Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, width: '100%', maxWidth: 700 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 999,
            borderColor: '#00CFE8',
            color: '#00CFE8',
            px: 4,
            py: 1.2,
            fontWeight: 500,
            fontSize: 16,
            minWidth: 160,
            '&:hover': { borderColor: '#00bcd4', color: '#00bcd4' },
          }}
          onClick={() => setDeleteOpen(true)}
        >
          Delete account
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: 999,
            background: '#00CFE8',
            color: '#fff',
            fontWeight: 500,
            fontSize: 16,
            px: 4,
            py: 1.2,
            minWidth: 160,
            boxShadow: 'none',
            '&:hover': { background: '#00bcd4' },
          }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Box>

      {/* Delete org account note */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, width: '100%', maxWidth: 700 }}>
        <Typography variant="caption" sx={{ color: '#232b2b', fontSize: 13 }}>
          To delete organisation account please email info@bitah.com
        </Typography>
      </Box>

      {/* Edit Account Modal */}
      <EditAccountModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        fields={{
          firstName: fields.firstName,
          lastName: fields.lastName,
          gender: fields.gender,
          pronouns: fields.pronouns,
        }}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />

      {/* Delete Account Modal */}
      <DeleteAccountModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        selectedOption={deleteOption}
        onOptionChange={handleDeleteOptionChange}
        onSave={handleDeleteSave}
      />
    </Box>
  );
} 