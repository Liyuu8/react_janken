import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

const HandBox = ({ actionPon }) => {
  const style = { marginLeft: 20 };
  return (
    <div style={{ marginTop: 40, marginBottom: 30, marginLeft: 30 }}>
      <RaisedButton
        id="btn-guu"
        label="グー"
        onClick={() => actionPon(0)}
        style={style}
      />
      <RaisedButton
        id="btn-choki"
        label="チョキ"
        onClick={() => actionPon(1)}
        style={style}
      />
      <RaisedButton
        id="btn-paa"
        label="パー"
        onClick={() => actionPon(2)}
        style={style}
      />
    </div>
  );
};

HandBox.propTypes = {
  actionPon: PropTypes.func,
};

export default HandBox;
