import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-dashboard'),
  },
  {
    title: 'Members',
    path: '/members',
    icon: icon('ic-members'),
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: icon('ic-calendar')
  },
  {
    title: 'Memories',
    path: '/memories',
    icon: icon('ic-memories'),
  },
  {
    title: 'Group Details',
    path: '/group-details',
    icon: icon('ic-group-details'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  }
];
