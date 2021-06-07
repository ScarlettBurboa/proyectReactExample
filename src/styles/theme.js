import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#f73378',
			main: '#f50057',
			dark: '#ab003c',
			contrastText: '#fff',
		},
		secondary: {
			light: '#339ba5',
			main: '#00838f',
			dark: '#005b64',
			contrastText: '#fff',
		},
	},
});

export default theme;