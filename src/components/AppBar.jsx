import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './../assets/logo.png';
import {useStyles} from "../styles/dashboard";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems, secondaryListItems} from "../screens/ListItems";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

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
const AppBarInitial = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
			<>
				<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
					<Toolbar className={classes.toolbar}>
						<img src={logo} className={classes.logo} alt={'logo'} />
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							Dashboard
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
					}}
					open={open}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
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
					<Divider />
				</Drawer>
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
						
						</Grid>
						<Box pt={4}>
							Hola
						</Box>
					</Container>
				</main>
			</>
	);
}
export default AppBarInitial;