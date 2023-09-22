/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ className, children, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

CalculatorButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
