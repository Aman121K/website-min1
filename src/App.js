// h2 for page title

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import FixedPlugin from "./layout/navbar/FixedPlugin";
import { AppRoutes } from "./routes";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
            <Footer />
            <FixedPlugin />
        </Router>
    );
};

export default App;
