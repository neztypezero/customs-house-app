import { Link } from 'react-router-dom';

import buildingImage from "../../../assets/img/backgrounds/SC1Buttons_1.jpg";
import suiteImage from "../../../assets/img/backgrounds/SC1Buttons_2.jpg";
import historyImage from "../../../assets/img/backgrounds/SC1Buttons_3.jpg";
import movieImage from "../../../assets/img/backgrounds/SC1Buttons_4.jpg";

function GalleryMainScreen() {
	return (
		<>
			<Link draggable="false" className="large-gallery-button" to="/gallery/building">
				<img src={buildingImage} alt="Building Gallery" />
				<label>Building</label>
			</Link>
			<Link draggable="false" className="large-gallery-button" to="/gallery/suite">
				<img src={suiteImage} alt="Suite Gallery" />
				<label>Suite</label>
			</Link>
			<Link draggable="false" className="large-gallery-button" to="/gallery/history">
				<img src={historyImage} alt="History Gallery" />
				<label>History</label>
			</Link>
			<Link draggable="false" className="large-gallery-button" to="/gallery/movie">
				<img src={movieImage} alt="Customs House Promo Video" />
				<label>Movie</label>
			</Link>
		</>
	);
}

export default GalleryMainScreen;