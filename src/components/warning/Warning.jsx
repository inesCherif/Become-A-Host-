import React from 'react';
import PropTypes from 'prop-types';
import './Warning.css';
import WarningIcon from '../../assets/images/warning.png';

const Warning = ({ text }) => {
  return (
    <div className='warning-container'>
      <div>
        <img src={WarningIcon} alt='warning' className='warning-image' />
      </div>
      <div className='warning-text'>{text}</div>
    </div>
  );
};

Warning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Warning;

