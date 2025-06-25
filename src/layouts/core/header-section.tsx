import type { AppBarProps } from '@mui/material/AppBar';
import type { ContainerProps } from '@mui/material/Container';
import type { Theme, SxProps, CSSObject, Breakpoint } from '@mui/material/styles';

import { useScrollOffsetTop } from 'minimal-shared/hooks';
import { varAlpha, mergeClasses } from 'minimal-shared/utils';

import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Logo } from 'src/components/logo/logo';
import Box from '@mui/material/Box';

import { layoutClasses } from './classes';

// ----------------------------------------------------------------------

export type HeaderSectionProps = AppBarProps & {
  layoutQuery?: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  slots?: {
    leftArea?: React.ReactNode;
    rightArea?: React.ReactNode;
    topArea?: React.ReactNode;
    centerArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  slotProps?: {
    container?: ContainerProps;
    centerArea?: React.ComponentProps<'div'> & { sx?: SxProps<Theme> };
  };
  logo?: React.ReactNode;
  pageName?: string;
  backButton?: React.ReactNode;
};

export function HeaderSection({
  sx,
  slots,
  slotProps,
  className,
  disableOffset,
  disableElevation,
  layoutQuery = 'md',
  logo,
  pageName,
  backButton,
  ...other
}: HeaderSectionProps) {
  const { offsetTop: isOffset } = useScrollOffsetTop();
  const displayPageName = pageName || slots?.centerArea || 'Dashboard';
  const displayLogo = logo !== undefined ? logo : <Logo isSingle sx={{ width: 40, height: 40 }} />;

  return (
    <HeaderRoot
      position="sticky"
      color="transparent"
      isOffset={false}
      disableOffset
      disableElevation
      className={mergeClasses([layoutClasses.header, className])}
      sx={[
        { background: 'transparent', boxShadow: 'none' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <HeaderContainer layoutQuery={layoutQuery} {...slotProps?.container} sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', display: 'flex', alignItems: 'center', px: { xs: 2, md: 5 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '0 0 auto', minHeight: 64, py: 1 }}>
          {backButton ? (
            <Box sx={{ mb: 0.2, display: 'flex', alignItems: 'center', minHeight: 28 }}>
              {backButton}
            </Box>
          ) : (
            <Box sx={{ mb: 0.2, minHeight: 28 }} />
          )}
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', fontSize: { xs: 24, md: 32 } }}>
            {displayPageName}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} />
        {displayLogo}
      </HeaderContainer>
    </HeaderRoot>
  );
}

// ----------------------------------------------------------------------

type HeaderRootProps = Pick<HeaderSectionProps, 'disableOffset' | 'disableElevation'> & {
  isOffset: boolean;
};

const HeaderRoot = styled(AppBar, {
  shouldForwardProp: (prop: string) =>
    !['isOffset', 'disableOffset', 'disableElevation', 'sx'].includes(prop),
})<HeaderRootProps>(({ isOffset, disableOffset, disableElevation, theme }) => {
  const pauseZindex = { top: -1, bottom: -2 };

  const pauseStyles: CSSObject = {
    opacity: 0,
    content: '""',
    visibility: 'hidden',
    position: 'absolute',
    transition: theme.transitions.create(['opacity', 'visibility'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
  };

  const bgStyles: CSSObject = {
    ...pauseStyles,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: pauseZindex.top,
    backdropFilter: `blur(6px)`,
    WebkitBackdropFilter: `blur(6px)`,
    backgroundColor: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
    ...(isOffset && {
      opacity: 1,
      visibility: 'visible',
    }),
  };

  const shadowStyles: CSSObject = {
    ...pauseStyles,
    left: 0,
    right: 0,
    bottom: 0,
    height: 24,
    margin: 'auto',
    borderRadius: '50%',
    width: `calc(100% - 48px)`,
    zIndex: pauseZindex.bottom,
    boxShadow: theme.vars.customShadows.z8,
    ...(isOffset && { opacity: 0.48, visibility: 'visible' }),
  };

  return {
    boxShadow: 'none',
    zIndex: 'var(--layout-header-zIndex)',
    ...(!disableOffset && { '&::before': bgStyles }),
    ...(!disableElevation && { '&::after': shadowStyles }),
  };
});

const HeaderContainer = styled(Container, {
  shouldForwardProp: (prop: string) => !['layoutQuery', 'sx'].includes(prop),
})<Pick<HeaderSectionProps, 'layoutQuery'>>(({ layoutQuery = 'md', theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'var(--color)',
  height: 'var(--layout-header-mobile-height)',
  [theme.breakpoints.up(layoutQuery)]: { height: 'var(--layout-header-desktop-height)' },
}));

const HeaderCenterArea = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  justifyContent: 'center',
}));
