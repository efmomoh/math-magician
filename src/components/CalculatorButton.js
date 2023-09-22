/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ className, children }) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

CalculatorButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CalculatorButton;
