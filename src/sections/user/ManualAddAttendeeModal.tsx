import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

export type ManualAddAttendee = {
  firstName?: string;
  lastName?: string;
  voicePart?: string;
  singerNotes?: string;
  attendedTerm?: string;
  attendedAll?: string;
  email?: string;
};

type ManualAddAttendeeModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (attendee: ManualAddAttendee) => void;
};

export default function ManualAddAttendeeModal({ open, onClose, onAdd }: ManualAddAttendeeModalProps) {
  const [form, setForm] = useState<ManualAddAttendee>({});

  const handleChange = (field: keyof ManualAddAttendee) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleAdd = () => {
    onAdd(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: '#fff',
          boxShadow: '0px 8px 40px 0px #d064dd33',
          p: 0,
          minWidth: 700,
        },
      }}
    >
      <Box sx={{ position: 'absolute', right: 24, top: 24, zIndex: 1 }}>
        <IconButton
          onClick={onClose}
          sx={{
            color: '#d064dd',
            '&:hover': {
              background: '#f3e6fa',
              color: '#fff',
              bgcolor: '#d064dd',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: 22,
          color: '#222',
          textAlign: 'left',
          pb: 0,
          pt: 4,
          pl: 4,
          pr: 4,
          background: 'transparent',
        }}
      >
        Manual Add
      </DialogTitle>
      <DialogContent sx={{ p: 4, pt: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="First/Preferred Name"
            value={form.firstName || ''}
            onChange={handleChange('firstName')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
          <TextField
            label="Attended (this term)"
            value={form.attendedTerm || ''}
            onChange={handleChange('attendedTerm')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Last Name"
            value={form.lastName || ''}
            onChange={handleChange('lastName')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
          <TextField
            label="Attended (all time)"
            value={form.attendedAll || ''}
            onChange={handleChange('attendedAll')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Voice Part"
            value={form.voicePart || ''}
            onChange={handleChange('voicePart')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
          <TextField
            label="Email"
            value={form.email || ''}
            onChange={handleChange('email')}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': { borderColor: '#d064dd' },
                '&:hover fieldset': { borderColor: '#d064dd' },
                '&.Mui-focused fieldset': { borderColor: '#d064dd' },
              },
            }}
            InputLabelProps={{ sx: { color: '#d064dd' } }}
          />
        </Box>
        <TextField
          label="Singer Notes"
          value={form.singerNotes || ''}
          onChange={handleChange('singerNotes')}
          fullWidth
          multiline
          minRows={3}
          sx={{
            mb: 4,
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              '& fieldset': { borderColor: '#d064dd' },
              '&:hover fieldset': { borderColor: '#d064dd' },
              '&.Mui-focused fieldset': { borderColor: '#d064dd' },
            },
          }}
          InputLabelProps={{ sx: { color: '#d064dd' } }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              background: '#d064dd',
              color: '#fff',
              borderRadius: 99,
              px: 6,
              py: 1.5,
              fontWeight: 600,
              fontSize: 18,
              boxShadow: '0px 2px 8px #d064dd33',
              textTransform: 'none',
              '&:hover': {
                background: '#b94fc6',
              },
            }}
            size="large"
          >
            Add Attendee
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
} 