import React from 'react';
import { useNavigate } from 'react-router';

// здесь собирается страница PostDetail

const PostDetail = () => {
	const navigate = useNavigate();

	return (
		<div>
			PostDetail
			<div>
				<button onClick={() => navigate('/')}>back</button>
			</div>
		</div>
	);
};

export default PostDetail;
