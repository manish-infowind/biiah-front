import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';
import { GenderStatCard } from '../GenderStatCard';
import { SummaryStatCard } from '../SummaryStatCard';
import { AnalyticsSessionAttendees } from '../AnalyticsSessionAttendees';
import { AnalyticsAttendeesPerWeek } from '../AnalyticsAttendeesPerWeek';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <SummaryStatCard
            title="Total Members"
            total={75}
            subtitle="56 Active"
            valueColor="#00CFE8"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GenderStatCard
            title="Gender"
            men={67}
            women={75}
            color="#FF9800"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsSessionAttendees
            data={[5, 4, 6, 4, 6, 5, 4, 6, 7, 10, 8, 8, 10, 9, 8, 6]}
            categories={[
              'Oct 16', 'Oct 30', 'Nov 6', 'Nov 13', 'Nov 20', 'Nov 27',
              'Dec 4', 'Dec 11', 'Dec 18', 'Jan 8', 'Jan 15', 'Jan 22',
              'Jan 29', 'Feb 5', 'Feb 12', 'Mar 5'
            ]}
          />
        </Grid>
        {/* <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsAttendeesPerWeek
            data={[120, 130, 110, 115, 108, 125, 115]}
            categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          />
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
