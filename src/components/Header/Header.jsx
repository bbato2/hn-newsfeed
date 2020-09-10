import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Select from './Select/Select';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbarTitle: {
		flex: 1
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { onRefresh } = props;

	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<img alt="HN Logo" src={require('../../assets/head.png')} style={{ maxWidth: '40px' }} />
				<div className={classes.toolbarTitle} />

				<Select onRefresh={onRefresh} />
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string
};
