import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


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

  render(){
    return <div className="catch-of-the-day">
				<div className="menu">
					<Header tagline='Fresh Seafood Market' />
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>;
  }
}

export default App;