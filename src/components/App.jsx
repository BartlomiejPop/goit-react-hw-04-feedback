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
    this.setState({ good: this.state.good + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
  };

  addBadFeedback = evt => {
    this.setState({ bad: this.state.bad + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
  };

  addNeutralFeedback = evt => {
    this.setState({ neutral: this.state.neutral + 1 });
    this.setState({ total: this.state.total + 1 });
    this.setState(prevState => {
      return {
        positive: (prevState.good / prevState.total) * 100,
      };
    });
  };
  render() {
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

ReactDOM.render(<App />, document.getElementById('root'));
