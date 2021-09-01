import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({ status, onHandleToggleBookMark, id }) => {
  return (
    <button onClick={() => onHandleToggleBookMark(id)}>
      <i className={status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'}></i>
    </button>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
  onHandleToggleBookMark: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookMark;
