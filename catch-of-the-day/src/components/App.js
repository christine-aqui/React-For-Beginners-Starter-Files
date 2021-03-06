import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import samplesFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component {
	state = {
		fishes: {},
		order:{}
};
addFish = fish =>{
	//take a copy of the exiting state. you never want to directly mod a state.
	const fishes = {...this.state.fishes}; /// ... is called an object spread [look it up]
	//
	//next add a new fish to the fishes variable
	fishes[`fish${Date.now()}`] = fish;
	//
	//set the new fishes object to state. setState is built in
	this.setState({ // pass the setState the date you want to update.
		fishes: fishes });
};
loadSamplesFishes = () => { // this is a customer function, when button is clicked will push data out
	this.setState({ fishes : samplesFishes});
	// fishes is the state being updates
	// updating fishes with samplesFIshes.
}

  render(){
    return <div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
					{Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
					</ul>
					</div>
					<Order />
					<Inventory
					addFish={this.addFish}
					loadSamplesFishes={this.loadSamplesFishes} />
					</div>;
				}
			}

			export default App;
			// notes
			// Object.keys(obj) - returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually. src via MDN