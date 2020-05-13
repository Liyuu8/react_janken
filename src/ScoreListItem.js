import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const judgementStyle = (judgement) => ({
  color: ['#000', '#2979FF', '#FF1744'][judgement],
});

const ScoreListItem = ({ score }) => {
  const hand = ['グー', 'チョキ', 'パー'];
  const judgement = ['DRAW', 'WIN', 'LOSE'];
  const formattedDate = (date) => date.toTimeString().substr(0, 8);

  return (
    <TableRow style={judgementStyle(score.judgement)}>
      <TableRowColumn>{formattedDate(score.created_at)}</TableRowColumn>
      <TableRowColumn>{hand[score.human_hand]}</TableRowColumn>
      <TableRowColumn>{hand[score.computer_hand]}</TableRowColumn>
      <TableRowColumn>{judgement[score.judgement]}</TableRowColumn>
    </TableRow>
  );
};

ScoreListItem.propTypes = {
  score: PropTypes.object,
};

export default ScoreListItem;
