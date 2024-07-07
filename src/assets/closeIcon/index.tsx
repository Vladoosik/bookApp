// modules
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const CloseIcon: FC<SvgTypes> = props => {
  const {width = 18, height = 18} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M1.5 1.5L9 9m7.5 7.5L9 9m0 0l-7.5 7.5 15-15"
        stroke="#0E0E16"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
