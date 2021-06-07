import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import  useStyles  from '../styles/loginStyles';
import {useDispatch} from "react-redux";
import {login} from "../services/auth";

const LoginScreen = () => {
	const classes = useStyles();
	const dispatch = useDispatch()
	const [userName, setUsername] = useState('')
	const [password, setPassword] = useState('')
	
	//Redux
	
	
	const handleDescription = (callback, e) =>{
		callback(e)
	}
	
	const handleSesionData = (e) =>{
		e.preventDefault();
		dispatch(login(userName, password))
	}

	 /* if (token || isAuthenticated) {

             } */
	
	
	
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Iniciar Sesión
					</Typography>
					<form className={classes.form} onSubmit={handleSesionData} noValidate autoComplete="off"  >
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Correo electrónico"
							onChange={(e) => handleDescription(setUsername, e.target.value)}
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							onChange={(e) => handleDescription(setPassword, e.target.value)}
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Recuerda mis datos de sesión"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Iniciar Sesión
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Olvidó su contraseña?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"No tienes una cuenta? Registrate"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

export default LoginScreen;
