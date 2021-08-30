import './Gallery.css';
import '../../SlideShow/SlideShow.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import GalleryMainScreen from "./GalleryMainScreen";
import { rootRoute, galleryRoutes } from "../ScreenRoutes";
import slideShowTransition from "../../SlideShow/SlideShowTransition";

const Gallery = withRouter(({ location }) => {
	return (
		<div id="gallery-screen-container" className="full-screen-container">
			<div id="gallery-screen-inner" className="full-screen-inner">
				<div className="padding">
					<slideShowTransition.style />
					<Switch location={location}>
						{galleryRoutes.map((route) => (
							<Route key={route.path} path={route.path} component={route.component} />
						))}
						<Route key={rootRoute.childRoutes.galleryRoute.path} path={rootRoute.childRoutes.galleryRoute.path} component={GalleryMainScreen} />
					</Switch>
				</div>
			</div>
		</div>
	);
});

export default Gallery;
