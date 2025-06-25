import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PRIMARY_COLOR = '#00B6BC';

const editFieldSx = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    borderRadius: 999,
    background: '#fafbfa',
    fontWeight: 500,
    fontSize: 16,
    color: '#071A24',
    '& fieldset': {
      borderColor: PRIMARY_COLOR,
      borderWidth: 2,
    },
    '&:hover fieldset': {
      borderColor: PRIMARY_COLOR,
    },
    '&.Mui-focused fieldset': {
      borderColor: PRIMARY_COLOR,
      borderWidth: 2,
    },
  },
  '& .MuiInputLabel-root': {
    color: '#071A24',
    fontWeight: 500,
    fontSize: 15,
    left: 10,
  },
};
const editInputProps = { style: { paddingLeft: 18, paddingRight: 18, height: 44 } };

export function EventEditModal({ open, onClose, event }: { open: boolean; onClose: () => void; event: any }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" PaperProps={{ sx: { borderRadius: 4, p: 2, bgcolor: '#faf9f6' } }}>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 22, color: '#071A24', pb: 0 }}>Event Edit</DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 4, boxShadow: 2, maxWidth: 700, mx: 'auto' }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Title" value={event.title} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Event Type" value="Hybrid" fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Date" value={event.date} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Virtual Link" value={event.link} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <TextField label="Time" value={event.time.split('-')[0]} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <TextField label="" value={event.time.split('-')[1]} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Location" value={event.location} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Room" value={event.room} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Coach Name" value={event.host} fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Song 1" value="Song 1" fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Song 2" value="Song 2" fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Song 3" value="Song 3" fullWidth variant="outlined" sx={editFieldSx} InputProps={editInputProps} />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                background: PRIMARY_COLOR,
                color: '#fff',
                borderRadius: 999,
                px: 6,
                py: 1.5,
                fontWeight: 600,
                fontSize: 18,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': { background: '#00969A' },
              }}
              onClick={onClose}
            >
              Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
} 