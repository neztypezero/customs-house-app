import './NavOverlay.css';

import React from 'react';
import { Link, Route, Switch, withRouter, useHistory } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavLogoSVG from './NavLogoSVG';
import navTransition from "./NavTransition";
import NavOverlayBreadCrumb from "./NavOverlayBreadCrumb";

import {rootRoute, allRoutes, navRoutes} from "../screens/ScreenRoutes";

const AnimatedNavOverlay = withRouter(({ location }) => {
	const history = useHistory();

	React.useEffect(() => {
		let timeSinceLastInput = 1;

		const unload = () => {
			if (timeout > 0) {
				document.removeEventListener("mousemove", handleInput);
				document.removeEventListener("keypress", handleInput);
				clearInterval(timeout);
				timeout = 0;
			}
		}
		const handleInput = () => {
			timeSinceLastInput = 0;
			if (location.pathname.startsWith(rootRoute.childRoutes.screenSaverRoute.path)) {
				unload();
				history.goBack();
			}
		};
		let timeout = setInterval(() => {
			if (!location.pathname.startsWith(rootRoute.childRoutes.screenSaverRoute.path)) {
				if (timeSinceLastInput >= 300) {
					history.push(rootRoute.childRoutes.screenSaverRoute.path);
				}
			}
			timeSinceLastInput += 1;
		}, 1000);

		document.addEventListener("mousemove", handleInput);
		document.addEventListener("keypress", handleInput);

		return _ => {
			unload();
		};
	});
	const isActive = (buttonLocation) => {
		return location.pathname.startsWith(buttonLocation);
	};

	return <div id="nav-overlay-container" data-location={location.pathname}>
		<div id="nav-overlay-inner">
			<div className="header-container">
				<navTransition.style />
				<div className="customs-house-logo"><Link draggable="false" to={rootRoute.path}><NavLogoSVG /></Link></div>
				<div className="customs-house-text"><Link draggable="false" to={rootRoute.path}></Link></div>
				<div className="location-text">
					<TransitionGroup>
						<CSSTransition key={location.key} classNames={navTransition.name} timeout={navTransition.duration}>
							<Switch location={location}>
								{allRoutes.map((route) => (
									<Route key={route.path} path={route.path}>
										<NavOverlayBreadCrumb path={route.path} />
									</Route>
								))}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
			<div className="bottom-nav-container">
				<ul id="nav-links-list">
				{navRoutes.map((route) => (
					<li key={"bnav-"+route.path}><Link draggable="false" className="customs-house-button" to={route.path} data-is-active={isActive(route.path)}>{route.text}</Link></li>
				))}
				</ul>
				</div>
		</div>
	</div>
});

function NavOverlay() {
	return (
		<AnimatedNavOverlay />
	);
}

export default NavOverlay;