export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <span>Statistics</span>
      <span>Good: {this.state.good} </span>
      <span>Neutral: {this.state.neutral} </span>
      <span>Bad: {this.state.bad} </span>
      <span>Total: {this.state.total}</span>
      <span>Positive feedback: {this.state.positive}%</span>
    </>
  );
};
