import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { GenderStatCard } from '../../../components/cards/GenderStatCard';
import { SummaryStatCard } from '../../../components/cards/SummaryStatCard';
import { AnalyticsSessionAttendees } from '../AnalyticsSessionAttendees';
import { AnalyticsAttendeesPerWeek } from '../AnalyticsAttendeesPerWeek';
import { SessionImpactGraph } from '../sessionGraph';
import { NextEventCard } from 'src/components/cards/NextEventCard';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl" sx={{ background: '#FAF9F6', minHeight: '100vh', position: 'relative', px: { xs: 1, sm: 3, md: 5 } }}>
 
      {/* Group Stats Section */}
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700, mb: 1, ml: 0.5 }}>
        Group Stats
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
          <SummaryStatCard
            title="Total Members"
            total={75}
            subtitle="56 Active"
            valueColor="#00CFE8"
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
          <GenderStatCard
            title="Gender"
            men={67}
            women={75}
            color="#FF9800"
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
      </Grid>

      {/* Attendance Section */}
      <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700, mb: 1, ml: 0.5 }}>
        Attendance
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <AnalyticsAttendeesPerWeek
            data={[10, 30, 10, 15, 25, 15, 10]}
            categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <AnalyticsSessionAttendees
            data={[5, 4, 6, 4, 6, 5, 4, 6, 7, 10, 8, 8, 10, 9, 8, 6]}
            categories={[
              'Oct 16', 'Oct 30', 'Nov 6', 'Nov 13', 'Nov 20', 'Nov 27',
              'Dec 4', 'Dec 11', 'Dec 18', 'Jan 8', 'Jan 15', 'Jan 22',
              'Jan 29', 'Feb 5', 'Feb 12', 'Mar 5'
            ]}
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <NextEventCard
            eventName="Singforce Weekly"
            date="Wednesday 29 April 2024"
            time="17:00 - 19:00"
            details="Event Details: Hybrid"
            location="The Civic Center"
            address="Civic Center Rd, Southampton > SO14 7LY"
            room="Room 304"
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <SessionImpactGraph
            data={[
              [1, 2, 1, 2], // Worse
              [5, 6, 3, 4], // The Same
              [2, 10, 4, 7], // Better
            ]}
            categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            sx={{ boxShadow: '0px 4px 24px rgba(140, 152, 164, 0.10)', borderRadius: 3, background: '#fff' }}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
