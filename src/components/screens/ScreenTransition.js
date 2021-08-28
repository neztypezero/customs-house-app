import { createGlobalStyle } from "styled-components";

const name = "customs-house-screen-fade";
const duration = 1000;
const transition = {
	name,
	duration,
	style:createGlobalStyle`
		.full-screen-container {
			transition:opacity ${duration}ms;
		}

		.full-screen-container.${name}-exit {
			opacity:0;
		}

		.full-screen-container.${name}-enter {
			opacity:0;
		}

		.full-screen-container.${name}-enter-active {
			opacity:1;
		}
	`
}

export default transition;