import './ImageScreen.css';

function ImageScreen(props) {
	return (
		<div className="image-screen-container full-screen-container">
			<div className="image-screen-inner full-screen-inner">
				<div className="padding">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default ImageScreen;