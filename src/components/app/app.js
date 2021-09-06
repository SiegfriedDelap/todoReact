import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { LoginPage, PeoplePage, PlanetsPage, StarshipsPage, SecretPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

	state = {
		swapiService: new SwapiService(),
		isLoggedIn: false
	};

	onLogin = () => {
		this.setState({
			isLoggedIn: true
		});
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService ?
				DummySwapiService : SwapiService;
			return {
				swapiService: new Service()
			};
		});
	};

	render() {
		const {isLoggedIn} = this.state;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService} >
					<Router>
						<div className="stardb-app">
							<div className="container">
								<Header onServiceChange={this.onServiceChange} />

								<RandomPlanet />

								<Route path='/' render={() => <h2>Den dobry!</h2>} exact />
								<Route path='/people/:id?' component={PeoplePage} />
								<Route path='/planets' component={PlanetsPage} />
								<Route path='/starships' exact component={StarshipsPage} />
								<Route path='/starships/:id' render={({ match }) => {
									const { id } = match.params;
									return <StarshipDetails itemId={id} />

								}} />
								<Route path='/login'
									render={() => (
										<LoginPage
											isLoggedIn={isLoggedIn}
											onLogin={this.onLogin} />
									)} />
								<Route path='/secret'
									render={() => (
										<SecretPage isLoggedIn={isLoggedIn} />
									)} />

							</div>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}