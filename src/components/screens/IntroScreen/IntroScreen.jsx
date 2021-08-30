import './IntroScreen.css';

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { rootRoute } from "../ScreenRoutes";

function IntroScreen(props) {
	const history = useHistory();
	history.replace(rootRoute.path);
	return (
		<div id="intro-screen-container" className="full-screen-container">
			<div id="intro-screen-inner">
				<Link draggable="false" className="customs-house-button main" to={rootRoute.path} onClick={props.onClick}>Enter Customs House</Link>
			</div>
		</div>
	);
}

export default IntroScreen;