import { useState, useEffect } from 'react';

function useAPI(props) {
	const [ posts, setPosts ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		triggerRefresh();
	}, []);

	function triggerRefresh(newPoints = null) {
		setLoading(true);

		let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
		let seconds = yesterday.getTime() / 1000;
		let points = newPoints ? newPoints : 200;

		fetch(
			`https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${seconds},points>${points}`
		)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setLoading(false);
			})
			.catch(console.log);
	}

	return [ posts, loading, triggerRefresh ];
}

export default useAPI;
