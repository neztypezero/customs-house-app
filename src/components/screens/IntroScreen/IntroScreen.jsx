import './IntroScreen.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from "../../screens/ScreenRoutes";

function IntroScreen(props) {
	return (
		<div id="intro-screen-container" className="full-screen-container">
			<div id="intro-screen-inner">
				<Link className="customs-house-button main" to="/" onClick={props.onClick}>Enter Customs House</Link>
			</div>
			<div className="preloaderContainer">
				{navRoutes.map((route) => {
					if (route.path.indexOf("movie") === -1 && route.path !== '/gallery' && route.path !== '/floorplans') {
						return route.component();
					} else {
						return <></>;
					}
				})}
			</div>
		</div>
	);
}

export default IntroScreen;