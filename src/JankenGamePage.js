import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import './index.css';
import Janken from './Janken';
import HandBox from './HandBox';
import StatusBox from './StatusBox';
import ScoreList from './ScoreList';

class JankenGamePage extends Component {
  constructor(props) {
    super(props);
    this.janken = new Janken();
    this.state = { scores: [], status: {}, tabIndex: 0 };
  }

  componentDidMount() {
    this.getResult();
  }

  tabChange(index) {
    this.setState({ tabIndex: index });
    this.getResult();
  }

  getResult() {
    this.setState({ scores: this.janken.getScores() });
    this.setState({ status: this.janken.getStatuses() });
  }

  pon(hand) {
    this.janken.pon(hand);
    this.getResult();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ marginLeft: 30 }}>
          <Header>じゃんけん・ぽん！</Header>
          <HandBox actionPon={(hand) => this.pon(hand)} />
          <Paper style={{ width: 400 }} zDepth={2}>
            <Tabs
              value={this.state.tabIndex}
              onChange={(index) => this.tabChange(index)}
            >
              <Tab label="Result List" value={0}>
                <ScoreList scores={this.state.scores} />
              </Tab>
              <Tab label="Result Point" value={1}>
                <StatusBox status={this.state.status} />
              </Tab>
            </Tabs>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

const Header = ({ children }) => <h1 style={{ marginLeft: 65 }}>{children}</h1>;

Header.propTypes = {
  children: PropTypes.string,
};

ReactDOM.render(<JankenGamePage />, document.getElementById('root'));
