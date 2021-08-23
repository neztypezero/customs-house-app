import { createGlobalStyle } from "styled-components";

const name = "customs-house-slide-show";
const duration = 1000;
const propsList = [
	{
		direction:'left',
		initialTranslate:"-100vw, 0",
		kickbackTranslate:"-105vw, 0",
	}, {
		direction:'right',
		initialTranslate:"100vw, 0",
		kickbackTranslate:"105vw, 0",
	},
];

let css = `
	.slide-show-container.${name}-enter > .slide-show-viewport > .slide-container {
		transition: left ${duration}ms;
	}
`;
for (const props of propsList) {
	css += `
		.slide-show-container.${name}-${props.direction}-enter > .slide-show-viewport > .slide-container {
			transform: translate(${props.initialTranslate});
			animation: ${duration}ms ${name}-${props.direction}-animation forwards;
		}

		@keyframes ${name}-${props.direction}-animation {
			25% {
				animation-timing-function:var(--customs-house-animation-tf1);
				transform: translate(${props.kickbackTranslate});
			}

			100% {
				transform: translate(0, 0);
				animation-timing-function:var(--customs-house-animation-tf2);
			}
		}
	`;
}

const transition = {
	name,
	duration,
	style:createGlobalStyle`
		${css}
	`
}

export default transition;
