import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

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

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'invite-members', element: <InviteMembersPage /> },
      { path: 'event-details', element: <EventDetailsPage /> },
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
