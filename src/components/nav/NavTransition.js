import { createGlobalStyle } from "styled-components";

import { rootRoute } from "../screens/ScreenRoutes";

const name = "nav-ani-text";
const duration = 1000;
const transition = {
	name,
	duration,
	style:createGlobalStyle`
		#nav-overlay-inner > .header-container > .location-text label {
			transition:opacity ${duration/2.0}ms, letter-spacing ${duration}ms;
		}

		#nav-overlay-inner > .header-container > .location-text label.${name}-enter,
		#nav-overlay-inner > .header-container > .location-text label.${name}-exit-active,
		#nav-overlay-inner > .header-container > .location-text label.${name}-exit {
			opacity:0;
			letter-spacing:-0.4em;
		}

		#nav-overlay-inner > .header-container > .location-text label.${name}-enter-active,
		#nav-overlay-inner > .header-container > .location-text label.${name}-enter-done {
			opacity:1;
			letter-spacing:inherit;
		}

		#nav-overlay-container[data-location="${rootRoute.path}"] > #nav-overlay-inner > .header-container,
		#nav-overlay-container[data-location^="${rootRoute.childRoutes.galleryRoute.childRoutes.movieRoute.path}"] > #nav-overlay-inner > .header-container,
		#nav-overlay-container[data-location^="${rootRoute.childRoutes.screenSaverRoute.path}"] > #nav-overlay-inner > .header-container {
			transform:translate(0, -100%);
		}

		#nav-overlay-container[data-location="${rootRoute.path}"] > #nav-overlay-inner > .bottom-nav-container,
		#nav-overlay-container[data-location^="${rootRoute.childRoutes.galleryRoute.childRoutes.movieRoute.path}"] > #nav-overlay-inner > .bottom-nav-container,
		#nav-overlay-container[data-location^="${rootRoute.childRoutes.screenSaverRoute.path}"] > #nav-overlay-inner > .bottom-nav-container {
			transform:translate(0, 100%);
		}
	`
}

export default transition;