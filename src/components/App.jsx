import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FeedbackOptions } from './counter/feedbackOptions.jsx';
import { Statistics } from './statistics/statistics.jsx';
import { SectionTitle } from './sectionTitle/SectionTitle.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  addGoodFeedback = evt => {
    console.log('Increment button was clicked!', evt); // działa
    console.log('this.props: ', this.state.good); // Error: cannot read props of undefined
    this.setState({ good: this.state.good + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
    // this.setState({
    //   percentage: this.state.good + this.state.neutral + this.state.bad,
    // });
  };

  addBadFeedback = evt => {
    console.log('Decrement button was clicked!', evt); // działa
    console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
    this.setState({ bad: this.state.bad + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
  };

  addNeutralFeedback = evt => {
    console.log('Decrement button was clicked!', evt); // działa
    console.log('this.props: ', this.state.bad); // Error: cannot read props of undefined
    this.setState({ neutral: this.state.neutral + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
  };
  render() {
    // export const App = () => {
    // const { state } = this.props;
    return (
      <div>
        <SectionTitle>Please leave feedback</SectionTitle>
        <FeedbackOptions
          addGoodFeedback={this.addGoodFeedback}
          addBadFeedback={this.addBadFeedback}
          addNeutralFeedback={this.addNeutralFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positive}
        />
      </div>
    );
  }
}
// }

ReactDOM.render(<App />, document.getElementById('root'));
