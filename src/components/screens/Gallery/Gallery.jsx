import './Gallery.css';
import '../../SlideShow/SlideShow.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import GalleryMainScreen from "./GalleryMainScreen";
import { galleryRoutes } from "../../screens/ScreenRoutes";

const Gallery = withRouter(({ location }) => {
	return (
		<div id="gallery-screen-container" className="full-screen-container">
			<div id="gallery-screen-inner" className="full-screen-inner">
				<div className="padding">
					<Switch location={location}>
						{galleryRoutes.map((route) => (
							<Route key={route.path} path={route.path} component={route.component} />
						))}
						<Route key='/gallery' path='/gallery' component={GalleryMainScreen} />
					</Switch>
				</div>
			</div>
		</div>
	);
});

export default Gallery;
