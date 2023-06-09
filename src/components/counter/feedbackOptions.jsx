import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Statistics from 'react-dom';

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positive: 0,
//   };

//   addGoodFeedback(evt) {
//     console.log('Increment button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.good); // Error: cannot read props of undefined
//     this.setState({ good: this.state.good + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//     // this.setState({
//     //   percentage: this.state.good + this.state.neutral + this.state.bad,
//     // });
//   }

//   addBadFeedback(evt) {
//     console.log('Decrement button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
//     this.setState({ bad: this.state.bad + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//   }

//   addNeutralFeedback(evt) {
//     console.log('Decrement button was clicked!', evt); // działa
//     console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
//     this.setState({ neutral: this.state.neutral + 1 });
//     this.setState({ total: this.state.total + 1 });
//     this.setState(prevState => {
//       return {
//         positive: (prevState.good / prevState.total) * 100,
//       };
//     });
//   }

//   render() {
//     const { state } = this.props;

export const FeedbackOptions = ({
  addGoodFeedback,
  addBadFeedback,
  addNeutralFeedback,
}) => {
  return (
    <div>
      <span>Please leave feedback</span>
      <button type="button" onClick={addGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={addNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={addBadFeedback}>
        Bad
      </button>

      {/* <span>Statistics</span>
      <span>Good: {this.state.good} </span>
      <span>Neutral: {this.state.neutral} </span>
      <span>Bad: {this.state.bad} </span>
      <span>Total: {this.state.total}</span>
      <span>Positive feedback: {this.state.positive}%</span> */}
    </div>
  );
};
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));

// export const FeedbackOptions = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };
