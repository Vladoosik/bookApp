// modules
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const ArrowRight: FC<SvgTypes> = props => {
  const {width = 20, height = 21, fill = '#848694', style} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      style={style}>
      <Path
        d="M7.5 4.5l6 6-6 6"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowRight;
