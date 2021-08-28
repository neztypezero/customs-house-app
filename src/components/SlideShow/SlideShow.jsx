import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import SlideShowArrowSVG from "./SlideShowArrowSVG";
import slideShowTransition from "./SlideShowTransition";

function SlideShow({images}) {
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
	const [slideIndex, setSlideIndex] = useState(1);
	const [slideOffset, setSlideOffset] = useState(0);
	const [slideAnimate, setSlideAnimate] = useState(false);
	const isActive = (index) => {
		if (slideIndex < 1) {
			return (index === slideCount());
		}
		if (slideIndex > slideCount()) {
			return (index === 1);
		}
		return (index === slideIndex);
	};
	const firstImg = () => (images[0]);
	const lastImg = () => (images[images.length-1]);
	const slideCount = () => (images.length);

	return (
		<CSSTransition in={slideAnimate} timeout={slideShowTransition.duration}  nodeRef={nodeRef}
		classNames={slideShowTransition.name+(slideOffset===1?"-right":(slideOffset===-1?"-left":""))} 

		onEntering={() => {
			setSlideIndex(slideIndex+slideOffset);
		}}
		onEntered={() => {
			setSlideAnimate(false);
			if (slideIndex > slideCount()) {
				setSlideIndex(1);
			} else if (slideIndex < 1) {
				setSlideIndex(slideCount());
			}
		}}>
			<div ref={nodeRef} className="slide-show-container">
				{
					(
						<>
							<div className="slide-show-viewport" data-slide-count={slideCount()} data-slide-index={slideIndex}>
								<div className="slide-container" style={{left:(-slideIndex*100)+"%"}}>
									<img src={lastImg().src} alt={lastImg().alt} />
									{images.map(img => <img key={img.src} src={img.src} alt={img.alt} />)}
									<img src={firstImg().src} alt={firstImg().alt} />
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
							{images.map((child, i) => {
								let index = i + 1;
								return <div key={'dot-index-'+index} className="dot" data-dot-active={isActive(index)} onClick={() => {setSlideAnimate(true);setSlideOffset(index-slideIndex);}}></div>
							})}
							</div>
						</>
					)
				}
			</div>
		</CSSTransition>
	);
}

export default SlideShow;