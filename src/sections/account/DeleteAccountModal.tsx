import React from 'react';
import { Modal, Box, Typography, Radio, RadioGroup, FormControlLabel, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
  selectedOption: string;
  onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

export default function DeleteAccountModal({ open, onClose, selectedOption, onOptionChange, onSave }: DeleteAccountModalProps) {
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
        <Typography variant="h6" align="center" sx={{ fontWeight: 500, mb: 3, fontSize: 22 }}>
          What would you like to delete?
        </Typography>
        <RadioGroup value={selectedOption} onChange={onOptionChange}>
          <FormControlLabel
            value="personal-email"
            control={<Radio sx={{ color: '#00CFE8', '&.Mui-checked': { color: '#00CFE8' } }} />}
            label={<Typography sx={{ fontSize: 15 }}>Only my personal email and name associated to my account</Typography>}
          />
          <FormControlLabel
            value="personal-data"
            control={<Radio sx={{ color: '#00CFE8', '&.Mui-checked': { color: '#00CFE8' } }} />}
            label={<Typography sx={{ fontSize: 15 }}>All of my personal data associated to my account</Typography>}
          />
          <FormControlLabel
            value="org-deletion"
            control={<Radio sx={{ color: '#00CFE8', '&.Mui-checked': { color: '#00CFE8' } }} />}
            label={<Typography sx={{ fontSize: 15 }}>Request full deletion of my organisation account from Biiah administration</Typography>}
          />
        </RadioGroup>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 999,
            background: '#232b2b',
            color: '#fff',
            fontWeight: 500,
            fontSize: 16,
            px: 4,
            py: 1.2,
            mt: 3,
            boxShadow: 'none',
            '&:hover': { background: '#232b2bcc' },
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
} 