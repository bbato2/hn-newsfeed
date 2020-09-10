import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';
import history from './utils/history';
import Home from './pages/Home/Home.jsx';

import 'typeface-roboto';

const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
