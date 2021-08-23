import { createGlobalStyle } from "styled-components";

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
	`
}

export default transition;