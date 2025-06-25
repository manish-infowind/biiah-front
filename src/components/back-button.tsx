import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

export type BackButtonProps = {
  text: string;
  to?: string;
  sx?: any;
};

export function BackButton({ text, to, sx }: BackButtonProps) {
  const navigate = useNavigate();
  const handleClick = React.useCallback(() => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  }, [navigate, to]);

  return (
    <Button
      sx={{ color: '#e05fd6', mb: 2, textTransform: 'none', fontWeight: 500, ...sx }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
} 