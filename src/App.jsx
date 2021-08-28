import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {screenRoutes} from "./components/screens/ScreenRoutes";
import {screenSaverRoute} from "./components/screens/ScreenRoutes";
import IntroScreen from "./components/screens/IntroScreen/IntroScreen";

import NavOverlay from "./components/nav/NavOverlay";
import screenTransition from "./components/screens/ScreenTransition";

const client = new ApolloClient({
	uri:"https://customs-house-server-b08tz4al8-neztypezero.vercel.app/graphql",
	cache: new InMemoryCache(),
});

const AnimatedScreenSwitch = withRouter(({ location }) => {
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames={screenTransition.name} timeout={screenTransition.duration}>
				<Switch location={location}>
					<Route path={screenSaverRoute.path} component={screenSaverRoute.component} />
					{screenRoutes.map((route) => (
						<Route key={route.path} path={route.path} component={route.component} />
					))}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
});

const requestFullScreen = (queryString) => {
	let element = document.querySelector(queryString);
	if (element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.webkitRequestFullscreen) { /* Old Safari */
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) { /* IE11 */
			element.msRequestFullscreen();
		} else if (element.mozRequestFullscreen) { /* Old Firefox */
			element.mozRequestFullscreen();
		}
	}
}

function App() {
	React.useEffect(() => {
		const handleResize = () => {
			const root = document.getElementById('root');
			const main = document.getElementById('main');
			if (main) {
				let { height } = root.getBoundingClientRect();
				if (height > window.innerHeight) {
					let scale = window.innerHeight/height;
					main.style.transform = "scale("+scale+")";
				} else {
					main.style.transform = "none";
				}
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return _ => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const [introLoaded, setIntroLoaded] = useState(false);
	if(introLoaded) {
		return (
			<ApolloProvider client={client}>
				<BrowserRouter>
					<div id="main">
						<div className="mainScreenWrapper">
							<screenTransition.style />
							<AnimatedScreenSwitch />
							<NavOverlay />
						</div>
					</div>
				</BrowserRouter>
			</ApolloProvider>
		);
	} else {
		return (
			<BrowserRouter>
				<div id="main">
					<div className="mainScreenWrapper">
						<IntroScreen onClick={
							(e) => {
								e.preventDefault();
								if (!e.shiftKey) {
									requestFullScreen("#root");
								}
								setIntroLoaded(true);
							}
						} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
