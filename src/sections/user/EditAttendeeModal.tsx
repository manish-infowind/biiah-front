import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

const voiceParts = ['High', 'Middle', 'Low'];

export type Attendee = {
  firstName?: string;
  lastName?: string;
  voicePart?: string;
  email?: string;
  singerNotes?: string;
  [key: string]: any;
};

type EditAttendeeModalProps = {
  open: boolean;
  onClose: () => void;
  attendee?: Attendee;
  onSave: (attendee: Attendee) => void;
};

export default function EditAttendeeModal({
  open,
  onClose,
  attendee,
  onSave,
}: EditAttendeeModalProps) {
  const [form, setForm] = useState<Attendee>(attendee || {});

  useEffect(() => {
    setForm(attendee || {});
  }, [attendee]);

  const handleChange =
    (field: keyof Attendee) => (e: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  const handleSave = () => {
    onSave(form);
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
          minWidth: 500,
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
        Edit Attendee
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
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Select
            value={form.voicePart || ''}
            onChange={(event) => {
              const value =
                event.target && typeof event.target.value === 'string'
                  ? event.target.value
                  : '';
              handleChange('voicePart')({
                target: { value, name: 'voicePart' },
              } as any);
            }}
            fullWidth
            displayEmpty
            sx={{
              borderRadius: 3,
              background: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d064dd',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d064dd',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d064dd',
              },
            }}
            renderValue={(selected) =>
              selected ? selected : <span style={{ color: '#aaa' }}>Voice Part</span>
            }
          >
            {voiceParts.map((part) => (
              <MenuItem
                key={part}
                value={part}
                sx={{
                  background: form.voicePart === part ? '#f3e6fa' : '#fff',
                  color: '#d064dd',
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                {part}
              </MenuItem>
            ))}
          </Select>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleSave}
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
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
} 