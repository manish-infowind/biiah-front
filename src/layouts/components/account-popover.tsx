import type { IconButtonProps } from '@mui/material/IconButton';

import { useState, useCallback } from 'react';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'src/routes/hooks';

import { _myAccount } from 'src/_mock';

// ----------------------------------------------------------------------

export type AccountPopoverProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
};

export function AccountPopover({ data = [], sx, ...other }: AccountPopoverProps) {
  const router = useRouter();

  return (
    <IconButton
      onClick={() => router.push('/account')}
      sx={{
        p: '2px',
        width: 40,
        height: 40,
        background: (theme) =>
          `conic-gradient(${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.light})`,
        ...sx,
      }}
      {...other}
    >
      <Avatar src={_myAccount.photoURL} alt={_myAccount.displayName} sx={{ width: 1, height: 1 }}>
        {_myAccount.displayName.charAt(0).toUpperCase()}
      </Avatar>
    </IconButton>
  );
}
