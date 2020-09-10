import React from 'react';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import useAPI from '../../utils/useAPI';
import Post from '../../components/Post/Post';
import Divider from '@material-ui/core/Divider';
const Home = (props) => {
	const [ posts, loading, triggerRefresh ] = useAPI();

	return (
		<div>
			<Header title="Top Submissions" onRefresh={triggerRefresh} />
			<Featured
				post={{
					title: loading ? '...' : posts.hits[0].title,
					description: loading
						? '...'
						: 'Submitted by ' + posts.hits[0].author + ' - ' + posts.hits[0].points + ' points',
					image: 'https://source.unsplash.com/random',
					imgText: 'main image description',
					linkText: 'Continue reading…',
					url: loading ? '' : posts.hits[0].url
				}}
			/>
			<div style={{ margin: '0 50px' }}>
				{loading ? (
					<div>...</div>
				) : (
					<div>
						{posts.hits.map((hit, index) => (
							<div key={index}>
								{index !== 0 && (
									<div>
										<Post title={hit.title} points={hit.points} url={hit.url} /> <Divider />{' '}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
