function SlideShowArrowSVG(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
			<defs>
				<filter id={props.id}>
					<feFlood floodOpacity="0.498039" floodColor="rgb(0,0,0)" result="flood" />
					<feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1" />
					<feGaussianBlur in="composite1" stdDeviation="0.6" result="blur" />
					<feOffset dx="0" dy="0" result="offset" />
					<feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2" />
				</filter>
			</defs>
			<g><path style={{filter:"url(#"+props.id+")"}} d={props.d} /></g>
		</svg>
	);
}

export default SlideShowArrowSVG;