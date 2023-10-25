import React from 'react';
import { useNavigate } from 'react-router';

// Здесь собирается страница PostsList

const PostsList = () => {
	const navigate = useNavigate();

	return (
		<div>
			PostsList
			<div>
				<button onClick={() => navigate('/1')}>post 1</button>
			</div>
		</div>
	);
};

export default PostsList;
