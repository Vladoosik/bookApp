// modules
import React, {FC} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const SearchIcon: FC<SvgTypes> = props => {
  const {width = 27, height = 28} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 27 28" fill="none">
      <Circle
        cx={11.0251}
        cy={11.5251}
        r={7.5}
        transform="rotate(-45 11.025 11.525)"
        stroke="#0E0E16"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.328 16.828l4.95 4.95"
        stroke="#0E0E16"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
