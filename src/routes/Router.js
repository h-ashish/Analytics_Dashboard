import { lazy } from "react";

import { Navigate } from 'react-router-dom';
//import {History} from '../History'
//import { createBrowserHistory } from "history";
const baseUrl = '/';

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const BlankLayout = lazy(() => import("../layouts/BlankLayout/BlankLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../views/Home"));

const Error = lazy(() => import("../views/error/error"));
const Login = lazy(() => import("../views/Login"));
const Trends = lazy(() => import("../views/Trends"));
const DataGrid = lazy(() => import("../views/DataGrid"));
const ProfilePage = lazy(() => import("../views/Profile"));
const Analytics = lazy(() => import("../views/Analytics"));
const MachineAnalytics = lazy(()=>import("../views/MachineAnalytics"));
const OperatorAnalytics = lazy(()=>import("../views/OperatorAnalytics"));
const CustomerAnalytics = lazy(()=>import("../views/CustomerAnalytics"));
const SampleDashboard = lazy(()=>import("../views/SampleDashboard"));
const Settings = lazy(()=>import("../views/Settings"));

/*****Routes******/
const ThemeRoutes = [
	{
	  path: baseUrl,
	  element: <FullLayout />,
	  children: [
		{ path: baseUrl, element: <Navigate to={`${baseUrl}home`} /> },
		// { path: "home", exact: true, element:<Home/>},
		{ path: "home", exact: true, element:<SampleDashboard />},
		{ path: "trends", element:<Trends />},
		{ path: "datagrid", element:<DataGrid />}, 
		{ path: "settings", element:<Settings />}, 
		{ path: "profile", element:<ProfilePage/>},
		{ path: "analytics", element:<Analytics/>}, 
		{ path: "machineanalytics", element: <MachineAnalytics/>},
		{ path: "operatoranalytics", element: <OperatorAnalytics />},
		{ path: "customeranalytics", element: <CustomerAnalytics />},
		{ path: '*', element: <Navigate to={`${baseUrl}auth/404`}/> }
	  ]
	},
	{
	  path: `${baseUrl}auth`,
	  element: <BlankLayout />,
	  children: [
		  { path: "404", element: <Error /> },
		  { path: "login", element: <Login /> },
	  ]
	}
  ];

export default ThemeRoutes;