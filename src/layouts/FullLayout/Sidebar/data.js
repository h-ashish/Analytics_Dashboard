import { HomeTwoTone, LockOpenTwoTone, ErrorTwoTone, AccountCircleTwoTone, BallotTwoTone} from '@material-ui/icons';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

const Menuitems = [
    {
      href: '/home',
      icon: HomeTwoTone,
      title: "Dashboard"
    },
    // {
    //   href: '/sampledashboard',
    //   icon: DashboardIcon,
    //   title: "Concept Dashboard (WIP)"
    // },
    {
      href: '/analytics',
      icon: DateRangeIcon,
      title: 'Monthly Production'
    },
    {
      href: '/machineanalytics',
      icon: AssessmentIcon,
      title: 'Analytics'
    },
    {
      href: '/settings',
      icon: SettingsIcon,
      title: 'Settings'
    },
    // {
    //   href: '/trends',
    //   icon: TimelineIcon,
    //   title: 'RealTime Tracker'
    // }, 
    // {
    //   href: '/profile',
    //   icon: AccountCircleTwoTone,
    //   title: 'Profile'
    // },    
    // // {
    // //   href: '/auth/404',
    // //   icon: ErrorTwoTone,
    // //   title: 'Error'
    // // },
    // {
    //   href: '/auth/login',
    //   icon: LockOpenTwoTone,
    //   title: 'Login'
    // }
 
 ];

 export default Menuitems;