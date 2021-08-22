import React from 'react';
import { Link } from 'react-router-dom';

import './MainScreen.css';

function MainScreen() {
	return (
		<div id="main-screen-container" className="full-screen-container">
			<div id="main-screen-inner">
				<div className="customs-house-logo"></div>
				<h1>Customs</h1>
				<h2>House</h2>
				<ul id="main-links-list">
					<li><Link draggable="false" to="/gallery">Gallery</Link></li>
					<li><Link draggable="false" to="/floorplans">Floorplans</Link></li>
					<li><Link draggable="false" to="/view">View</Link></li>
					<li><Link draggable="false" to="/location">Location</Link></li>
				</ul>
			</div>
		</div>
	);
}

export default MainScreen;