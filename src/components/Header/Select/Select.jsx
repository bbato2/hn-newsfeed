import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	select: {
		margin: theme.spacing(2)
	}
}));

export default function PointsSelect(props) {
	const classes = useStyles();
	const { onRefresh } = props;
	const [ points, setPoints ] = React.useState(200);

	const handleChange = (event) => {
		setPoints(event.target.value);
		onRefresh(event.target.value);
	};

	return (
		<div>
			<Select value={points} onChange={handleChange} className={classes.select}>
				<MenuItem value={50}>50 Points</MenuItem>
				<MenuItem value={100}>100 Points</MenuItem>
				<MenuItem value={200}>200 Points</MenuItem>
			</Select>
		</div>
	);
}
