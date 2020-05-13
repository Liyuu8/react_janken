import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const judgementStyle = (judgement) => ({
  color: ['#000', '#2979FF', '#FF1744'][judgement],
});

const StatusBox = ({ status }) => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      <TableRow displayBorder={false}>
        <TableHeaderColumn>WIN</TableHeaderColumn>
        <TableRowColumn style={judgementStyle(1)}>{status.win}</TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false}>
        <TableHeaderColumn>LOSE</TableHeaderColumn>
        <TableRowColumn style={judgementStyle(2)}>{status.lose}</TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false}>
        <TableHeaderColumn>DRAW</TableHeaderColumn>
        <TableRowColumn style={judgementStyle(0)}>{status.draw}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

StatusBox.propTypes = {
  status: PropTypes.object,
};

export default StatusBox;
