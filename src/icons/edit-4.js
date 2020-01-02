import React from 'react';
import PropTypes from 'prop-types';

const Edit4 = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M2.5 14.375V17.5H5.625L14.8331 8.29185L11.7081 5.16692L2.5 14.375ZM17.2501 5.87493C17.5833 5.54169 17.5833 5.04157 17.2501 4.70833L15.2917 2.74993C14.9584 2.41669 14.4583 2.41669 14.1251 2.74993L12.5834 4.29169L15.7083 7.41661L17.2501 5.87493Z"
        fill={color}
      />
    </svg>
  );
};

Edit4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit4.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Edit4;
