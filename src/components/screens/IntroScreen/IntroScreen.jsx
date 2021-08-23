import './IntroScreen.css';

import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function IntroScreen(props) {
	const history = useHistory();
	history.replace('/');
	return (
		<div id="intro-screen-container" className="full-screen-container">
			<div id="intro-screen-inner">
				<Link draggable="false" className="customs-house-button main" to="/" onClick={props.onClick}>Enter Customs House</Link>
			</div>
		</div>
	);
}

export default IntroScreen;