import React, { Component } from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
   // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log(this.props.value+" was just clicked!");
  }
  render() {

    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export default Card;
