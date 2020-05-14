import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import './index.css';
import Janken from './Janken';
import HandBox from './HandBox';
import StatusBox from './StatusBox';
import ScoreList from './ScoreList';
import { FlatButton } from 'material-ui';

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
    const tabStyle = {
      width: 200,
      height: 50,
      textAline: 'center',
      color: '#fff',
      backgroundColor: '#01bcd4',
    };
    const activeStyle = (path) =>
      Object.assign(
        {
          borderBottom: `solid 2px ${
            this.props.location.pathname.match(path) ? '#f00' : '#01bcd4'
          }`,
        },
        tabStyle
      );

    return (
      <MuiThemeProvider>
        <div style={{ marginLeft: 30 }}>
          <Header>じゃんけん・ぽん！</Header>
          <HandBox actionPon={(hand) => this.pon(hand)} />
          <Paper style={{ width: 400 }} zDepth={2}>
            <Link to="/scores">
              <FlatButton label="Result List" style={activeStyle('scores')} />
            </Link>
            <Link to="/status">
              <FlatButton label="Result Point" style={activeStyle('status')} />
            </Link>
            <Route
              path="/scores"
              component={() => <ScoreList scores={this.state.scores} />}
            />
            <Route
              path="/status"
              component={() => <StatusBox status={this.state.status} />}
            />
            <Route exact path="/" component={() => <Redirect to="/scores" />} />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

JankenGamePage.propTypes = {
  location: PropTypes.object,
};

const Header = ({ children }) => <h1 style={{ marginLeft: 65 }}>{children}</h1>;

Header.propTypes = {
  children: PropTypes.string,
};

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={JankenGamePage} />
  </BrowserRouter>,
  document.getElementById('root')
);
