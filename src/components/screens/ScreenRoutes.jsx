import MainScreen from "./MainScreen/MainScreen";
import Gallery from "./Gallery/Gallery";
import GalleryBuilding from "./Gallery/GalleryBuilding";
import GallerySuite from "./Gallery/GallerySuite";
import GalleryHistory from "./Gallery/GalleryHistory";
import GalleryMovie from "./Gallery/GalleryMovie";
import FloorPlans from "./FloorPlans/FloorPlans";
import FloorPlansUrban from "./FloorPlans/FloorPlansUrban";
import FloorPlansHarbourView from "./FloorPlans/FloorPlansHarbourView";
import FloorPlansSuite from "./FloorPlans/FloorPlansSuite";
import Location from "./Location/Location";
import View from "./View/View";
import ScreenSaver from "./ScreenSaver/ScreenSaver";

import { Link } from 'react-router-dom';


const rootRoute = {
	component:MainScreen,
	path:'/',
	text:'',
};

const galleryRoute = {
	component:Gallery,
	path:rootRoute.path+'gallery/',
	text:'gallery'
};

const floorPlansRoute = {
	component:FloorPlans,
	path:rootRoute.path+'floorplans/',
	text:'floorplans'
};

const locationRoute = {
	component:Location,
	path:rootRoute.path+'location/',
	text:'location'
};

const viewRoute = {
	component:View,
	path:rootRoute.path+'view/',
	text:'view'
};

const screenSaverRoute = {
	component:ScreenSaver,
	path:rootRoute.path+'screen-saver/',
	text:''
};

rootRoute.childRoutes = {
	galleryRoute, floorPlansRoute, locationRoute, viewRoute, screenSaverRoute
};

const navRoutes = [
	galleryRoute, floorPlansRoute, locationRoute, viewRoute
];

const screenRoutes = [
	...navRoutes,
	screenSaverRoute,
	rootRoute
];

const buildingRoute = {
	component:GalleryBuilding,
	path:galleryRoute.path+'building/',
	text: 'building',
};

const suiteRoute = {
	component:GallerySuite,
	path:galleryRoute.path+'suite/',
	text: 'suite',
};

const historyRoute = {
	component:GalleryHistory,
	path:galleryRoute.path+'history/',
	text: 'history',
};

const movieRoute = {
	component:GalleryMovie,
	path:galleryRoute.path+'movie/',
	text: 'movie',
};

galleryRoute.childRoutes = {
	buildingRoute, suiteRoute, historyRoute, movieRoute
};

const galleryRoutes = [
	buildingRoute, suiteRoute, historyRoute, movieRoute
];

const urbanRoute = {
	component:FloorPlansUrban,
	path:floorPlansRoute.path+'urban/',
	text: 'urban collection',
};

const harbourViewRoute = {
	component:FloorPlansHarbourView,
	path:floorPlansRoute.path+'harbour-view/',
	text: 'harbour view collection',
};

const suiteTypeRoute = {
	component:FloorPlansSuite,
	path:floorPlansRoute.path+'suite/',
	text: 'suite type',
};

floorPlansRoute.childRoutes = {
	urbanRoute, harbourViewRoute, suiteTypeRoute
};

const floorPlansRoutes = [
	urbanRoute, harbourViewRoute, suiteTypeRoute
];

const allRoutes = [
	...galleryRoutes,
	...floorPlansRoutes,
	...screenRoutes,
];

export {
	rootRoute,
	screenRoutes, 
	galleryRoutes, 
	floorPlansRoutes, 
	allRoutes, 
	navRoutes 
};
