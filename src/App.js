// h2 for page title

import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Navbar } from './layout';
import FixedPlugin from './layout/navbar/FixedPlugin';
import { AppRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
	if (window.performance) {
		if (performance.navigation.type == 1) {
		//   alert( "This page is reloaded" );
		window.localStorage.clear();
		} else {
		//   alert( "This page is not reloaded");
		}
	  }
	return (
		<StrictMode>
			<Router>
				<ScrollToTop>
					<Navbar />
					<AppRoutes />
					<Footer />
					<FixedPlugin />
				</ScrollToTop>
			</Router>
		</StrictMode>
	);
};

export default App;
