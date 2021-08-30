import { Link } from 'react-router-dom';

import buildingSrc from "../../../assets/img/backgrounds/SC1Buttons_1.jpg";
import suiteSrc from "../../../assets/img/backgrounds/SC1Buttons_2.jpg";
import historySrc from "../../../assets/img/backgrounds/SC1Buttons_3.jpg";
import movieSrc from "../../../assets/img/backgrounds/SC1Buttons_4.jpg";

import { galleryRoutes } from "../ScreenRoutes";

const linkList = [
	{
		src:buildingSrc,
		alt:'Building Gallery',
		label:'Building'
	},{
		src:suiteSrc,
		alt:'Suite Gallery',
		label:'Suite'
	},{
		src:historySrc,
		alt:'History Gallery',
		label:'History'
	},{
		src:movieSrc,
		alt:'Customs House Promo Video',
		label:'Movie'
	},
];

function GalleryLink({to, src, alt, label}) {
	return (
		<Link draggable="false" className="large-gallery-button" to={to}>
			<img src={src} alt={alt} />
			<label>{label}</label>
		</Link>
	);
}

function GalleryMainScreen() {
	return (
		<>
			{linkList.map((link, i) => (
				<GalleryLink key={galleryRoutes[i].path} to={galleryRoutes[i].path} src={link.src} alt={link.alt} label={link.label}/>
			))}
		</>
	);
}

export default GalleryMainScreen;
