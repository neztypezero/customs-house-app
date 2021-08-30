import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { useQuery } from "@apollo/client";

import floorPlansTransition from "./FloorPlansTransition";
import LoadingSVG from "../../LoadingSVG/LoadingSVG";
let ctx = require.context('../../../assets/img/floorplans', true);

function FloorPlansContainer(props) {
	const nodeRef = React.useRef(null);
	const [levels, setLevels] = useState([]);
	const [startTransition, setStartTransition] = useState(false);
	const [currentLevelId, setCurrentLevelId] = useState("");
	const [currentFloorPlanId, setCurrentFloorPlanId] = useState("");
	const [nextLevelId, setNextLevelId] = useState("");
	const [nextDirection, setNextDirection] = useState("");
	const [nextFloorPlanId, setNextFloorPlanId] = useState("");
	const { loading, error } = useQuery(props.query, {
			variables:props.variables,
			onCompleted:(data) => {
				let roomCollection = null;
				if (data.roomCollections && data.roomCollections.length > 0) {
					roomCollection = data.roomCollections[0];
				} else {
					roomCollection = data;
				}
				if (roomCollection.levels && roomCollection.levels.length > 0) {
					let level = roomCollection.levels[0];
					if (level.floorPlans && level.floorPlans.length > 0) {
						let floorPlan = level.floorPlans[0];
						setLevels(roomCollection.levels);
						setCurrentLevelId(level.id);
						setCurrentFloorPlanId(floorPlan.id);
					}
				}
			}
		}
	);

	if (error) return <div>error</div>;

	return (
		<CSSTransition nodeRef={nodeRef} in={startTransition} timeout={floorPlansTransition.duration} classNames={floorPlansTransition.name} 
		onEntered={() => {
			if (nextLevelId !== '') {
				setCurrentLevelId(nextLevelId);
			}
			if (nextFloorPlanId !== '') {
				setCurrentFloorPlanId(nextFloorPlanId);
			}
			setNextLevelId("");
			setNextFloorPlanId("");
			setNextDirection("");
			setStartTransition(false);
		}}>
			<div ref={nodeRef} className="room-collection-container" data-loading={loading} data-animation-direction={nextDirection}>
				{(loading?<LoadingSVG mainColor="#10273b" accentColor="#c78e71" />:<></>)}
				<div className="room-collection-nav">
					<ul className="level-list">
					{levels.map((level, i) => (
						<li key={level.id}>
							<Link draggable="false" data-current={level.id===currentLevelId} data-next={level.id===nextLevelId} to="#" onClick={(e) => {
								e.preventDefault();
								if (!startTransition && level.id !== currentLevelId) {
									setNextLevelId(level.id);
									setNextFloorPlanId(level.floorPlans[0].id);
									if (level.id > currentLevelId) {
										setNextDirection('up');
									} else {
										setNextDirection('down');
									}
									setStartTransition(true);
								}
							}}>{(level.level?'Level'+level.level:level.count+' Bed')}</Link>
						</li>
					))}
					</ul>
					<div className="room-container">
					{levels.map((level, i) => {
						let floorPlanObj = {};
						return <div key={level.id} className="room-list-container"><ul className="room-list" data-current={level.id===currentLevelId} data-next={level.id===nextLevelId}>
						{level.floorPlans.map((floorPlan, j) => {
							if (!floorPlanObj[floorPlan.name]) {
								floorPlanObj[floorPlan.name] = floorPlan;
								return <li key={floorPlan.id}>
									<Link draggable="false" data-current={floorPlan.id===currentFloorPlanId} data-next={floorPlan.id===nextFloorPlanId} to="#" onClick={(e) => {
										e.preventDefault();
										if (!startTransition && floorPlan.id !== currentFloorPlanId) {
											setNextFloorPlanId(floorPlan.id);
											if (floorPlan.id > currentFloorPlanId) {
												setNextDirection('left');
											} else {
												setNextDirection('right');
											}
											setStartTransition(true);
										}
									}}>{floorPlan.name}</Link>
								</li>
							} else {
								return <li key={floorPlan.id} className="no-name"></li>
							}
						})}
						</ul></div>
					})}
					</div>
				</div>
				<div className="room-floor-plan-container">
					{levels.map((level, i) => {
						return level.floorPlans.map((floorPlan, j) => (
							<img key={'img-'+floorPlan.id} data-img-index={j} data-current={floorPlan.id===currentFloorPlanId} data-next={floorPlan.id===nextFloorPlanId} src={ctx('./'+floorPlan.img).default} alt="floorPlan" />
						))
					})}
				</div>
			</div>
		</CSSTransition>
	);
}

export default FloorPlansContainer;