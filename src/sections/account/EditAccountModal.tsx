import React from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface EditAccountModalProps {
  open: boolean;
  onClose: () => void;
  fields: {
    firstName: string;
    lastName: string;
    gender: string;
    pronouns: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdate: () => void;
}

export default function EditAccountModal({ open, onClose, fields, onChange, onUpdate }: EditAccountModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          minWidth: 400,
          maxWidth: 420,
          width: '90vw',
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" align="center" sx={{ fontWeight: 700, mb: 3 }}>
          Edit Account Info
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="firstName"
            value={fields.firstName}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 999,
            background: '#00CFE8',
            color: '#fff',
            fontWeight: 500,
            fontSize: 16,
            px: 4,
            py: 1.2,
            mt: 3,
            boxShadow: 'none',
            '&:hover': { background: '#00bcd4' },
          }}
          onClick={onUpdate}
        >
          Update your account
        </Button>
      </Box>
    </Modal>
  );
} 