// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { FeedbackOptions } from './counter/feedbackOptions.jsx';
import { Statistics } from './statistics/statistics.jsx';
import { SectionTitle } from './sectionTitle/SectionTitle.jsx';
import React, { useState } from 'react';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positive: 0,
//   };

export const App = () => {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positive: 0,
  // });

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  // addGoodFeedback = evt => {
  //   this.setState({ good: this.state.good + 1 });
  //   this.setState({ total: this.state.total + 1 });
  //   this.setState(prevState => {
  //     return {
  //       positive: (prevState.good / prevState.total) * 100,
  //     };
  //   });
  // };

  // addBadFeedback = evt => {
  //   this.setState({ bad: this.state.bad + 1 });
  //   this.setState({ total: this.state.total + 1 });
  //   this.setState(prevState => {
  //     return {
  //       positive: (prevState.good / prevState.total) * 100,
  //     };
  //   });
  // };

  // addNeutralFeedback = evt => {
  //   this.setState({ neutral: this.state.neutral + 1 });
  //   this.setState({ total: this.state.total + 1 });
  //   this.setState(prevState => {
  //     return {
  //       positive: (prevState.good / prevState.total) * 100,
  //     };
  //   });
  // };

  const addGoodFeedback = () => {
    setGood(prevGood => prevGood + 1);
    setTotal(prevTotal => prevTotal + 1);
    calculatePositivePercentage(good + 1, total + 1);
  };

  const addBadFeedback = () => {
    setBad(prevBad => prevBad + 1);
    setTotal(prevTotal => prevTotal + 1);
    calculatePositivePercentage(good, total + 1);
  };

  const addNeutralFeedback = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
    setTotal(prevTotal => prevTotal + 1);
    calculatePositivePercentage(good, total + 1);
  };

  const calculatePositivePercentage = (newGood, newTotal) => {
    console.log(newGood, newTotal);
    setPositive((newGood / newTotal) * 100);
  };

  return (
    <div>
      <SectionTitle>Please leave feedback</SectionTitle>
      <FeedbackOptions
        addGoodFeedback={addGoodFeedback}
        addBadFeedback={addBadFeedback}
        addNeutralFeedback={addNeutralFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positive={positive}
      />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));
