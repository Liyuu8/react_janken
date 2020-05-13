import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import ScoreListItem from './ScoreListItem';

const ScoreList = ({ scores }) => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Time</TableHeaderColumn>
        <TableHeaderColumn>Human</TableHeaderColumn>
        <TableHeaderColumn>Computer</TableHeaderColumn>
        <TableHeaderColumn>Result</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {scores.map((score, index) => (
        <ScoreListItem key={index} score={score} />
      ))}
    </TableBody>
  </Table>
);

ScoreList.propTypes = {
  scores: PropTypes.array,
};

export default ScoreList;
