import React from 'react';
import AllCards from './pages/allCards';
import Card from './pages/cardInfo';
import NotFound from './pages/error';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path={"/"} component={AllCards} exact/>
					<Route path={"/cardInfo"} component={Card}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
