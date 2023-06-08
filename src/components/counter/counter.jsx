import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addGoodFeedback(evt) {
    console.log('Increment button was clicked!', evt); // działa
    console.log('this.props: ', this.state.good); // Error: cannot read props of undefined
    this.setState({ good: this.state.good + 1 });
    this.setState({ total: this.state.total + 1 });
    // this.setState({
    //   percentage: this.state.good + this.state.neutral + this.state.bad,
    // });
  }

  addBadFeedback(evt) {
    console.log('Decrement button was clicked!', evt); // działa
    console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
    this.setState({ bad: this.state.bad + 1 });
    this.setState({ total: this.state.total + 1 });
  }

  addNeutralFeedback(evt) {
    console.log('Decrement button was clicked!', evt); // działa
    console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
    this.setState({ neutral: this.state.neutral + 1 });
    this.setState({ total: this.state.total + 1 });
  }

  render() {
    const { state } = this.props;

    return (
      <div>
        <button type="button" onClick={this.addGoodFeedback.bind(this)}>
          Good
        </button>
        <button type="button" onClick={this.addNeutralFeedback.bind(this)}>
          Neutral
        </button>
        <button type="button" onClick={this.addBadFeedback.bind(this)}>
          Bad
        </button>

        <span>Good: {this.state.good} </span>
        <span>Neutral: {this.state.neutral} </span>
        <span>Bad: {this.state.bad} </span>
        <span>Total: {this.state.total}</span>
        <span>%</span>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));

export const CounterEl = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};
