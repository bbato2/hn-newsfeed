import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			contained: {
				borderRadius: '20px'
			},
			outlined: {
				borderRadius: '15px'
			}
		}
	}
});

export default theme;
