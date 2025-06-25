import React from 'react';
import { DateCalendar, PickersDay, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { PickersDayProps } from '@mui/x-date-pickers/PickersDay';

interface CalendarProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  highlightDays: number[];
  primaryColor: string;
  textColor: string;
}

export function Calendar({ selectedDate, onChange, highlightDays, primaryColor, textColor }: CalendarProps) {
  const CustomDay = (props: PickersDayProps) => {
    const date = props.day;
    const isHighlighted = date.getMonth() === (selectedDate ? selectedDate.getMonth() : new Date().getMonth()) && highlightDays.includes(date.getDate());
    return (
      <PickersDay
        {...props}
        sx={{
          ...(isHighlighted && {
            bgcolor: primaryColor,
            color: '#fff',
            '&:hover': { bgcolor: '#00969A' },
          }),
          fontWeight: 600,
          borderRadius: '50%',
          width: 28,
          height: 28,
          fontSize: 15,
          m: '6px',
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar
        value={selectedDate}
        onChange={onChange}
        views={["day"]}
        showDaysOutsideCurrentMonth={false}
        disableFuture={false}
        sx={{
          bgcolor: '#fff',
          borderRadius: 3,
          boxShadow: 2,
          p: 1,
          minWidth: 380,
          maxWidth: 380,
          minHeight: 390,
          maxHeight: 390,
          '& .MuiPickersCalendarHeader-root': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 0,
            pt: 2,
            pb: 0,
            mb: 0,
            minHeight: 40,
            position: 'relative',
          },
          '& .MuiPickersCalendarHeader-labelContainer': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          },
          '& .MuiPickersCalendarHeader-label': {
            color: primaryColor,
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
            flex: 1,
            pointerEvents: 'auto',
          },
          '& .MuiPickersArrowSwitcher-root': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            position: 'static',
            pointerEvents: 'auto',
          },
          '& .MuiPickersArrowSwitcher-button': {
            color: '#B2B2B2',
            background: 'none',
            border: 'none',
            boxShadow: 'none',
            minWidth: 0,
            p: 0,
            mx: 0,
            fontSize: 22,
            '&:hover': { color: primaryColor, background: 'none' },
          },
          '& .MuiPickersDay-root': {
            color: textColor,
            fontWeight: 500,
            borderRadius: '50%',
            width: 28,
            height: 28,
            fontSize: 15,
            m: '6px',
          },
          '& .MuiPickersDay-today': {
            border: `1.5px solid ${primaryColor}`,
          },
          '& .MuiPickersDay-root.Mui-selected': {
            bgcolor: primaryColor,
            color: '#fff',
          },
        }}
        slots={{ day: CustomDay }}
      />
    </LocalizationProvider>
  );
} 