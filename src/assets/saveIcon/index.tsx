// modules
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
//types
import {SvgTypes} from '../../types/svgTypes.ts';

const SaveIcon: FC<SvgTypes> = props => {
  const {
    width = 17,
    height = 20,
    fill = '#0E0E16',
    isFocused,
    focusedFill,
  } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 17 20" fill="none">
      <Path
        d="M15.875 4v14l-6.34-4.755-.6.8.6-.8a1.1 1.1 0 00-1.32 0L1.875 18V4a3 3 0 013-3h8a3 3 0 013 3z"
        stroke={isFocused ? focusedFill : fill}
        strokeWidth={2}
        fill={isFocused ? focusedFill : 'transparent'}
      />
    </Svg>
  );
};

export default SaveIcon;
