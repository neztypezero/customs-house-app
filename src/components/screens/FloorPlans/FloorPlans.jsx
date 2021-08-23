import './FloorPlans.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import FloorPlansMainScreen from "./FloorPlansMainScreen";
import {floorPlanRoutes} from "../../screens/ScreenRoutes";
import floorPlansTransition from "./FloorPlansTransition";

const FloorPlans = withRouter(({ location }) => {
	return (
		<div id="floor-plans-screen-container" className="full-screen-container">
			<div id="floor-plans-screen-inner" className="full-screen-inner">
				<div className="padding">
					<floorPlansTransition.style />
					<Switch location={location}>
						{floorPlanRoutes.map((route) => (
							<Route key={route.path} path={route.path} component={route.component} />
						))}
						<Route key='/floorplans' path='/floorplans' component={FloorPlansMainScreen} />
					</Switch>
				</div>
			</div>
		</div>
	);
});

export default FloorPlans;