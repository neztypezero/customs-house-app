import './MainScreen.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from "../ScreenRoutes";

function MainScreen() {
	return (
		<div id="main-screen-container" className="full-screen-container">
			<div id="main-screen-inner">
				<div className="customs-house-logo"></div>
				<h1>Customs</h1>
				<h2>House</h2>
				<ul id="main-links-list">
					{navRoutes.map((route) => (
						<li key={route.path}><Link draggable="false" to={route.path}>{route.text}</Link></li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MainScreen;