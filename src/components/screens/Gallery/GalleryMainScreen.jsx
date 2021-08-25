import { Link } from 'react-router-dom';

let ctx = require.context('../../../assets/img/backgrounds', true);

const linkList = [
	{
		to:"/gallery/building",
		src:ctx('./SC1Buttons_1.jpg').default,
		alt:'Building Gallery',
		label:'Building'
	},{
		to:"/gallery/suite",
		src:ctx('./SC1Buttons_2.jpg').default,
		alt:'Suite Gallery',
		label:'Suite'
	},{
		to:"/gallery/history",
		src:ctx('./SC1Buttons_3.jpg').default,
		alt:'History Gallery',
		label:'History'
	},{
		to:"/gallery/movie",
		src:ctx('./SC1Buttons_4.jpg').default,
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
			{linkList.map((link) => (
				<GalleryLink key={link.to} to={link.to} src={link.src} alt={link.alt} label={link.label}/>
			))}
		</>
	);
}

export default GalleryMainScreen;
