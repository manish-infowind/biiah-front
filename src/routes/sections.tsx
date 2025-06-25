import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { BackButton } from 'src/components/back-button';

// ----------------------------------------------------------------------

export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/calendar'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const SignUpView = lazy(()=> import('src/pages/sign-up'))
export const AttendancePage = lazy(() => import('src/pages/attendance'));
export const InviteMembersPage = lazy(() => import('src/pages/invite-members'));
export const EventDetailsPage = lazy(() => import('src/pages/event-details'));
export const GroupDetailsPage = lazy(() => import('src/pages/group-details'));
export const AccountPage = lazy(() => import('src/pages/account'));

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

// Map route paths to page names
const PAGE_NAME_MAP: Record<string, string> = {
  '/': 'Dashboard',
  '/members': 'Members',
  '/calendar': 'Calendar',
  '/memories': 'Memories',
  '/attendance': 'Attendance',
  '/invite-members': 'Invite Members',
  '/event-details': 'Event Details',
  '/group-details': 'Group Details',
  '/account': 'Account',
  '/settings': 'Settings',
  };

function DashboardLayoutWithPageName({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  // Find the best match for the current path
  const path = Object.keys(PAGE_NAME_MAP).find((key) =>
    location.pathname === key || location.pathname.startsWith(key + '/')
  ) || '/';
  const pageName = PAGE_NAME_MAP[path] || 'Dashboard';

  // Determine if a back button is needed for this route
  let backButton: React.ReactNode = undefined;
  if (path === '/attendance') {
    backButton = <BackButton text="< Back to Members Page" to="/members" sx={{ mb: 0, pl: 0, color: '#d064dd', fontWeight: 500, fontSize: 16 }} />;
  } else if (path === '/event-details') {
    backButton = <BackButton text="< Back to Calendar Page" to="/calendar" sx={{ mb: 0, pl: 0, color: '#d064dd', fontWeight: 500, fontSize: 16 }} />;
  } else if (path === '/invite-members') {
    backButton = <BackButton text="< Back to Members Page" to="/members" sx={{ mb: 0, pl: 0, color: '#d064dd', fontWeight: 500, fontSize: 16 }} />;
  }

  return (
    <DashboardLayout slotProps={{ header: { pageName, backButton } }}>
      {children}
    </DashboardLayout>
  );
}

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayoutWithPageName>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayoutWithPageName>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'members', element: <UserPage /> },
      { path: 'calendar', element: <ProductsPage /> },
      { path: 'memories', element: <BlogPage /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'invite-members', element: <InviteMembersPage /> },
      { path: 'event-details', element: <EventDetailsPage /> },
      { path: 'group-details', element: <GroupDetailsPage /> },
      { path: 'account', element: <AccountPage /> },
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout
        slotProps={{
          content: {
            sx: {
              backgroundColor: 'transparent'
            },
          },
        }}
      >
        <SignInPage />
      </AuthLayout>

    ),
  },
   {
    path: 'sign-up',
    element: (
      <AuthLayout
        slotProps={{
          content: {
            sx: {
              backgroundColor: 'transparent'
            },
          },
        }}
      >
        <SignUpView />
      </AuthLayout>

    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
