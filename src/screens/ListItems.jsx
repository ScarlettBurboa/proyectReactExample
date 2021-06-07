import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}
function OldSchoolMenuLink({ label, to, activeOnlyWhenExact, icon }) {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact
	});
	
	return (
		<ListItem button>
			<ListItemIcon>
				{icon}
			</ListItemIcon>
			<div className={match ? "active" : ""}>
				{match && "> "}
				<Link to={to}>{label}</Link>
			</div>
		</ListItem>
		
	);
}
export const mainListItems = (
	<Router>
			<hr />
		<OldSchoolMenuLink
			activeOnlyWhenExact={true}
			to="/"
			label="Home"
			icon={<DashboardIcon />}
		/>
		<OldSchoolMenuLink to="/about" label="About" icon={<PeopleIcon />} />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
	</Router>
	
);

