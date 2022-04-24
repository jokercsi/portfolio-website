import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Login from './login';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import Customers from './customers';
import Blog from './blog';


const Main = () => (
	<Switch>
		<Route exact path="/portfolio-website" component={Landing} />	
		<Route path="/login" component={Login} />
		<Route path="/blog" component={Blog} />	
		<Route path="/projects" component={Projects} />	
		<Route path="/contact" component={Contact} />	
		<Route path="/resume" component={Resume} />	
		<Route path="/customers" component={Customers} />	
	</Switch>
)

export default Main;