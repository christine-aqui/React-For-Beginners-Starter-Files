import React from 'react';
import {formatPrice} from "../helpers"

class Fish extends React.Component{
  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name;
    // es6-ing it next line
    const { image, name, price, desc, status } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
        {name}
        <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p> {desc} </p>
        <button>Add to Cart</button>
      </li>
    );
  }
}

export default Fish;

//