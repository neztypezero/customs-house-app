import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import SlideShowArrowSVG from "./SlideShowArrowSVG";

function SlideShow(props) {
	const nodeRef = React.useRef(null);
	React.useEffect(() => {
		const handleInput = (keyboardEvent) => {
			if (keyboardEvent.keyCode === 37) {
				setSlideOffset(-1);
				setSlideAnimate(true);
			} else if (keyboardEvent.keyCode === 39) {
				setSlideOffset(1);
				setSlideAnimate(true);
			}
		};
		document.addEventListener("keydown", handleInput);

		return _ => {
			document.removeEventListener("keydown", handleInput);
		};
	});
	const [slideCount] = useState(props.children.length);
	const [slideIndex, setSlideIndex] = useState(1);
	const [slideOffset, setSlideOffset] = useState(0);
	const [slideAnimate, setSlideAnimate] = useState(false);
	const isActive = (index) => {
		if (slideIndex < 1) {
			return (index === slideCount);
		}
		if (slideIndex > slideCount) {
			return (index === 1);
		}
		return (index === slideIndex);
	};

	return (
		<CSSTransition in={slideAnimate} timeout={1000}  nodeRef={nodeRef}
		classNames={"slide-show"+(slideOffset===1?"-right":(slideOffset===-1?"-left":""))} 

		onEntering={() => {
			setSlideIndex(slideIndex+slideOffset);
		}}
		onEntered={() => {
			setSlideAnimate(false);
			if (slideIndex > slideCount) {
				setSlideIndex(1);
			} else if (slideIndex < 1) {
				setSlideIndex(slideCount);
			}
		}}>
			<div ref={nodeRef} className="slide-show-container" data-loading={props['data-loading']}>
				{
					(
						props.children.length > 1?
							<>
								<div className="slide-show-viewport" data-slide-count={props.children.length} data-slide-index={slideIndex}>
									<div className="slide-container" style={{left:(-slideIndex*100)+"%"}}>
										{props.children[props.children.length-1]}
										{props.children}
										{props.children[0]}
									</div>
								</div>
								<div className="slide-show-prev slide-show-arrow" onClick={() => {
									setSlideOffset(-1);
									setSlideAnimate(true);
								}}>
									<SlideShowArrowSVG id="prev-arrow-filter" viewBox="0 0 9.2299995 23.782084" d="M 1.44,11.758753 V 12.023333 L 7.525416,22.342083 h 0.264583 V 1.44 H 7.525416 l -6.085416,10.318753 v 0" />
								</div>
								<div className="slide-show-next slide-show-arrow" onClick={() => {
									setSlideOffset(1);
									setSlideAnimate(true);
								}}>
									<SlideShowArrowSVG id="prev-arrow-filter" viewBox="0 0 9.2299995 23.782084" d="M 7.7899995,11.758753 V 12.023333 L 1.7045835,22.342083 h -0.264583 V 1.44 H 1.7045835 l 6.085416,10.318753 v 0" />
								</div>
								<div className="slide-show-dots">
								{props.children.map((child, i) => {
									let index = i + 1;
									return <div key={'dot-index-'+index} className="dot" data-dot-active={isActive(index)} onClick={() => {setSlideAnimate(true);setSlideOffset(index-slideIndex);}}></div>
								})}
								</div>
							</>
						:props.children
					)
				}
			</div>
		</CSSTransition>
	);
}

export default SlideShow;