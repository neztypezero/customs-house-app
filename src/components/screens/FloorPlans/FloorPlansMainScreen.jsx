import { Link } from 'react-router-dom';
import { rootRoute } from "../ScreenRoutes";
import mainFloorPlanImg from "../../../assets/img/backgrounds/FloorPlanBaseImage.png";

function FloorPlansMainScreen() {
	return (
		<>
			<img className="full-size" src={mainFloorPlanImg} alt="The Customs House main floorplan." />
			<Link draggable="false" className="customs-house-button urban" to={rootRoute.childRoutes.floorPlansRoute.childRoutes.urbanRoute.path}>Urban Collection</Link>
			<Link draggable="false" className="customs-house-button harbour-view" to={rootRoute.childRoutes.floorPlansRoute.childRoutes.harbourViewRoute.path}>Harbour View Collection</Link>
			<Link draggable="false" className="customs-house-button suite-type" to={rootRoute.childRoutes.floorPlansRoute.childRoutes.suiteTypeRoute.path}>Browse By Suite Type</Link>
		</>
	);
}

export default FloorPlansMainScreen;