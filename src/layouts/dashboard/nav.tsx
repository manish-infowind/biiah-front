import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useEffect } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { usePathname, useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';

import { WorkspacesPopover } from '../components/workspaces-popover';

import type { NavItem } from '../nav-config-dashboard';
import type { WorkspacesPopoverProps } from '../components/workspaces-popover';

// ----------------------------------------------------------------------

export type NavContentProps = {
  data: NavItem[];
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  workspaces: WorkspacesPopoverProps['data'];
  sx?: SxProps<Theme>;
};

export function NavDesktop({
  sx,
  data,
  slots,
  workspaces,
  layoutQuery,
}: NavContentProps & { layoutQuery: Breakpoint }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 2.5,
        px: 2.5,
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        zIndex: 'var(--layout-nav-zIndex)',
        width: 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function NavMobile({
  sx,
  data,
  open,
  slots,
  onClose,
  workspaces,
}: NavContentProps & { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          pt: 2.5,
          px: 2.5,
          overflow: 'unset',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Drawer>
  );
}

// ----------------------------------------------------------------------

export function NavContent({ data, slots, workspaces, sx }: NavContentProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Define highlight colors for each nav item by title
  const navActiveColors: Record<string, string> = {
    Dashboard: '#19232C', // dark blue/black
    Members: '#E96CE8',  // pink
    Calendar: '#1DD6DB', // cyan/teal
    Memories: '#FFC36A', // orange/peach
    'Group Details': '#E96CE8', // pink
    Settings: '#E96CE8', // pink
  };

  return (
    <Box
      sx={{
        bgcolor: '#FCF8F7', // soft light background
        borderRadius: 4,
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        ...sx,
      }}
    >
      <Box sx={{ pt: 4, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo />
      </Box>

      {slots?.topArea}

      <Box sx={{ px: 2.5, mb: 2 }}>
        {/* Removed WorkspacesPopover ("Team 1 Free") section */}
      </Box>

      <Scrollbar fillContent>
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            px: 2.5,
          }}
        >
          <Box
            component="ul"
            sx={{
              gap: 0.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {data.map((item) => {
              const isActived = item.path === pathname;
              const activeColor = navActiveColors[item.title] || '#E96CE8'; // fallback to pink

              return (
                <ListItem disableGutters disablePadding key={item.title}>
                  <ListItemButton
                    disableGutters
                    component={RouterLink}
                    href={item.path}
                    sx={[
                      (theme) => ({
                        pl: 2,
                        py: 1,
                        gap: 2,
                        pr: 1.5,
                        borderRadius: 2,
                        typography: 'body2',
                        fontWeight: 'fontWeightMedium',
                        color: theme.vars.palette.text.secondary,
                        minHeight: 44,
                        transition: 'background 0.2s, color 0.2s',
                        '&:hover': {
                          color: '#fff',
                          bgcolor: activeColor,
                        },
                        ...(isActived && {
                          fontWeight: 'fontWeightSemiBold',
                          color: '#fff',
                          bgcolor: activeColor,
                        }),
                      }),
                    ]}
                  >
                    <Box component="span" sx={{ width: 24, height: 24 }}>
                      {item.icon}
                    </Box>

                    <Box component="span" sx={{ flexGrow: 1 }}>
                      {item.title}
                    </Box>

                    {item.info && item.info}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Box>
      </Scrollbar>

      {slots?.bottomArea}

      {/* Account section at the bottom */}
      <Box sx={{ mt: 'auto', px: 2.5, pb: 3 }}>
        <Box
          sx={{
            bgcolor: '#F8EAFB',
            borderRadius: 2,
            px: 2,
            py: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            // Use router to navigate to /account
            router.push('/account');
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              component="span"
              sx={{
                width: 24,
                height: 24,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E96CE8',
                mr: 1,
              }}
            >
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5c2.485 0 7.5 1.243 7.5 3.75V18H2.5v-1.75c0-2.507 5.015-3.75 7.5-3.75Zm0-1.25A3.75 3.75 0 1 1 10 3.75a3.75 3.75 0 0 1 0 7.5Z" stroke="#E96CE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Box>
            <Box sx={{ color: '#E96CE8', fontWeight: 500, fontSize: 16 }}>Account</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
