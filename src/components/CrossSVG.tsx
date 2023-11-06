import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CrossSVG = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.293 6.98l-.99-.99-5.162 5.162L6.98 5.99l-.99.99 5.162 5.162-5.162 5.162.99.99 5.161-5.162 5.162 5.162.99-.99-5.162-5.162 5.162-5.162z"
        fill="#050F13"
      />
    </Svg>
  );
};

export default CrossSVG;
