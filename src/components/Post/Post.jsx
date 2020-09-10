import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	post: {
		padding: '20px'
	},
	title: {
		cursor: 'pointer'
	}
}));

export default function Post(props) {
	const classes = useStyles();
	const { title, points, url } = props;

	return (
		<Grid container direction="row" justify="space-between" className={classes.post}>
			<Grid item className={classes.title}>
				<Link href={url} rel="noreferrer" target="_blank">
					{title}
				</Link>
			</Grid>
			<Grid item>{points}</Grid>
		</Grid>
	);
}