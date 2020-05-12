import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class JankenGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = { human: null, computer: null };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.pon(1);
  //   }, 3000);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    const identical =
      nextState.human == this.state.human &&
      nextState.computer == this.state.computer;

    identical ? console.log('*Identical*') : console.log('*Not Identical*');
    return !identical;
  }

  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3);
    this.setState({ human: human_hand, computer: computer_hand });
  }

  judge() {
    if (this.state.human == null) {
      return null;
    } else {
      return (this.state.computer - this.state.human + 3) % 3;
    }
  }

  render() {
    return (
      <div>
        <h1>じゃんけんぽん！</h1>
        <JankenBox actionPon={(hand) => this.pon(hand)} />
        <ScoreBox
          human={this.state.human}
          computer={this.state.computer}
          judgement={this.judge()}
        />
      </div>
    );
  }
}

const JankenBox = (props) => (
  <div>
    <button onClick={() => props.actionPon(0)}>グー</button>
    <button onClick={() => props.actionPon(1)}>チョキ</button>
    <button onClick={() => props.actionPon(2)}>パー</button>
  </div>
);

JankenBox.propTypes = {
  actionPon: PropTypes.func,
};

const ScoreBox = (props) => {
  const hand = ['グー', 'チョキ', 'パー'];
  const judgement = ['Draw', 'WIN', 'LOSE'];
  return (
    <table>
      <tbody>
        <tr>
          <th>You</th>
          <td>{hand[props.human]}</td>
        </tr>
        <tr>
          <th>Computer</th>
          <td>{hand[props.computer]}</td>
        </tr>
        <tr>
          <th>Judgement</th>
          <td>{judgement[props.judgement]}</td>
        </tr>
      </tbody>
    </table>
  );
};

ScoreBox.propTypes = {
  human: PropTypes.number,
  computer: PropTypes.number,
  judgement: PropTypes.number,
};

ReactDOM.render(<JankenGamePage />, document.getElementById('root'));
