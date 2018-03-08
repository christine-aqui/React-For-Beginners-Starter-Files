import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();// stops form from submitting
    const storeName = this.myInput.value.value;//get text from the input
    this.props.history.push(`/store/${storeName}`);//change the page to whatever the user centers
  }
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
        <input
        type="text"
        ref={this.myInput}
        required placeholder="Store Name"
        defaultValue={getFunName()} />
				<button type="submit">Visit Store!</button>
			</form>
		);
	}
}

export default StorePicker;