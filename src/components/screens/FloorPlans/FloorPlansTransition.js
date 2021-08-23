import { createGlobalStyle } from "styled-components";

const name = "floor-plan-change";
const duration = 1000;
const tf1 = "cubic-bezier(0.7,0,0.3,1)";
const tf2 = "cubic-bezier(0.2,1,0.3,1)";
const propsList = [
	{
		cssProperty:'left',
		direction:'left',
		initialOffset:"-100%",
		initialTranslate:"100%, 0",
		kickbackTranslate:"105%, 0",
	}, {
		cssProperty:'left',
		direction:'right',
		initialOffset:"100%",
		initialTranslate:"-100%, 0",
		kickbackTranslate:"-105%, 0",
	}, {
		cssProperty:'top',
		direction:'up',
		initialOffset:"-100%",
		initialTranslate:"0, 100%",
		kickbackTranslate:"0, 105%",
	}, {
		cssProperty:'top',
		direction:'down',
		initialOffset:"100%",
		initialTranslate:"0, -100%",
		kickbackTranslate:"0, -105%",
	},
];
let css = "";

for (const props of propsList) {
	css += `
		.room-collection-container.${name}-enter-active[data-animation-direction="${props.direction}"] .room-floor-plan-container img[data-current="true"] {
			${props.cssProperty}:${props.initialOffset};
		}

		.room-collection-container.${name}-enter-active[data-animation-direction="${props.direction}"] .room-floor-plan-container img[data-next="true"] {
			${props.cssProperty}:0;
		}

		.room-collection-container.${name}-enter-active[data-animation-direction="${props.direction}"] .room-floor-plan-container img[data-current="true"],
		.room-collection-container.${name}-enter-active[data-animation-direction="${props.direction}"] .room-floor-plan-container img[data-next="true"] {
			transform: translate(${props.initialTranslate});
			animation:${duration}ms room-collection-slide-${props.direction}-animation forwards;
		}

		@keyframes room-collection-slide-${props.direction}-animation {
			25% {
				transform: translate(${(props.kickbackTranslate)});
				animation-timing-function:${tf1};
			}

			100% {
				transform: translate(0, 0);
				animation-timing-function:${tf2};
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