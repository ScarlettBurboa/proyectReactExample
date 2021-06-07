import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {useStyles} from "../styles/dashboard";
import AppBarInitial from "../components/AppBar";
import {Route, Switch, Router} from "react-router-dom";


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
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


export default function Dashboard() {
	const classes = useStyles();
	
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBarInitial />
			
		</div>
	);
}
