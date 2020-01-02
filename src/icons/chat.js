import React from 'react';
import PropTypes from 'prop-types';

const Chat = (props) => {
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
        d="M16.836 12.5234C16.836 12.3516 16.8828 12.1875 16.9649 12.0469C16.9883 12.0039 17.0195 11.9648 17.0469 11.9258C17.7266 10.9102 18.125 9.69531 18.125 8.39844C18.1367 4.79688 15.0977 1.875 11.3399 1.875C8.06252 1.875 5.32814 4.10547 4.68752 7.06641C4.59377 7.5 4.54298 7.94141 4.54298 8.40234C4.54298 12.0078 7.46486 15.0078 11.2227 15.0078C11.8203 15.0078 12.625 14.8281 13.0664 14.707C13.5078 14.5859 13.9453 14.4258 14.0586 14.3828C14.1719 14.3398 14.2969 14.3164 14.4219 14.3164C14.5625 14.3164 14.6953 14.3438 14.8164 14.3945L17.0313 15.1797C17.0313 15.1797 17.125 15.2188 17.1836 15.2188C17.3555 15.2188 17.4961 15.082 17.4961 14.9062C17.4961 14.8672 17.4766 14.8008 17.4766 14.8008L16.836 12.5234Z"
        fill={color}
      />
      <path
        d="M12.4414 15.332C12.3008 15.3711 12.1211 15.4141 11.9258 15.457C11.5156 15.543 10.9922 15.6328 10.5977 15.6328C6.83984 15.6328 3.91797 12.6328 3.91797 9.02734C3.91797 8.76953 3.94531 8.44141 3.97656 8.19141C4 8.02344 4.02734 7.85547 4.06641 7.69141C4.10547 7.51562 4.15234 7.33984 4.20312 7.16797L3.89062 7.44531C2.60938 8.5625 1.875 10.1562 1.875 11.8164C1.875 12.9609 2.20703 14.0625 2.84375 15.0195C2.93359 15.1562 2.98438 15.2617 2.96875 15.332C2.95312 15.4023 2.50391 17.7539 2.50391 17.7539C2.48047 17.8672 2.52344 17.9805 2.60938 18.0547C2.66797 18.1016 2.73828 18.125 2.80859 18.125C2.84766 18.125 2.88672 18.1172 2.92188 18.1016L5.11328 17.2383C5.18359 17.2109 5.25781 17.1953 5.33594 17.1953C5.33594 17.1953 5.42969 17.1875 5.58203 17.2461C6.32031 17.5352 7.13672 17.7148 7.95312 17.7148C9.77344 17.7148 11.4844 16.9297 12.6445 15.5625C12.6445 15.5625 12.7695 15.3906 12.9141 15.1875C12.7695 15.2383 12.6055 15.2891 12.4414 15.332Z"
        fill={color}
      />
    </svg>
  );
};

Chat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chat.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Chat;