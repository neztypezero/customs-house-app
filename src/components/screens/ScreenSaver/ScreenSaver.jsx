import './ScreenSaver.css';

function ScreenSaver() {
	return (
		<div id="screen-saver-container" className="full-screen-container">
			<div id="screen-saver-inner" className="full-screen-inner">
				<div className="padding">
					<video id="screen-saver-movie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
						<source src="https://neilsondigital1.com/ch_touch/movie/CH_B_roll.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	);
}

export default ScreenSaver;