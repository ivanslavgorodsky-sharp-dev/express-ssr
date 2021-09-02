import React from 'react';
import User from './user';

var isFirstRun = true;

const App = (props) => {
	let done = false;

	if (props.isPreloadedFromServer && isFirstRun) {
		isFirstRun = false;
		setTimeout(props.fetchData, 0);
	}

	if (!props.users.length) {
		setTimeout(props.fetchData, 0);
	}
	else {
		done = true;
	}

	return <User done={done} users={props.users} />
}

export default App;