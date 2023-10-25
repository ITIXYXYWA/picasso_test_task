import React from 'react';

import { Routing } from '@pages/index';

import { withProviders } from './providers';

const App = () => {
	return (
		<div>
			<Routing />
		</div>
	);
};

export default withProviders(App);
