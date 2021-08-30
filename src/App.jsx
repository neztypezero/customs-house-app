import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {screenRoutes} from "./components/screens/ScreenRoutes";
import IntroScreen from "./components/screens/IntroScreen/IntroScreen";

import NavOverlay from "./components/nav/NavOverlay";
import screenTransition from "./components/screens/ScreenTransition";

const client = new ApolloClient({
	uri:"https://customs-house-server-b08tz4al8-neztypezero.vercel.app/graphql",
	cache: new InMemoryCache(),
});

const MainRouter = (props) => (
	<BrowserRouter>
		<div id="main">
			<div className="mainScreenWrapper">
				{props.children}
			</div>
		</div>
	</BrowserRouter>
);

const AnimatedScreenSwitch = withRouter(({ location }) => {
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames={screenTransition.name} timeout={screenTransition.duration}>
				<Switch location={location}>
					{screenRoutes.map((route) => (
						<Route key={route.path} path={route.path} component={route.component} />
					))}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
});

function App() {
	React.useEffect(() => {
		const handleResize = () => {
			const main = document.getElementById('main');
			if (main) {
				let { height } = main.parentNode.getBoundingClientRect();
				if (height > window.innerHeight && height > 0) {
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

	const enterCustomsHouse = (e) => {
		e.preventDefault();
		if (!e.shiftKey) {
			let main = document.getElementById("main");
			if (main) {
				let element = main.parentNode;
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
		setIntroLoaded(true);
	};

	if(introLoaded) {
		return (
			<ApolloProvider client={client}>
				<MainRouter>
					<screenTransition.style />
					<AnimatedScreenSwitch />
					<NavOverlay />
				</MainRouter>
			</ApolloProvider>
		);
	} else {
		return (
			<MainRouter>
				<IntroScreen onClick={(e) => { enterCustomsHouse(e); }} />
			</MainRouter>
		);
	}
}

export default App;
