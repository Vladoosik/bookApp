// modules
import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const DiscoverIcon: FC<SvgTypes> = props => {
  const {
    width = 23,
    height = 22,
    fill = '#0E0E16',
    isFocused,
    focusedFill,
  } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 23 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.625 22c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11zm-1.082-7.913l2.376-.744c.292-.091.439-.137.56-.218.107-.072.199-.165.27-.271.082-.121.128-.268.22-.56l.743-2.376c.296-.945.443-1.417.327-1.736a1 1 0 00-.596-.596c-.319-.116-.791.031-1.736.327l-2.376.744c-.292.091-.439.137-.56.218a1 1 0 00-.27.271c-.082.121-.128.267-.22.56l-.743 2.376c-.296.945-.443 1.417-.327 1.736a1 1 0 00.596.596c.319.116.791-.031 1.736-.327z"
        fill={isFocused ? focusedFill : 'transparent'}
        strokeWidth={1.5}
        stroke={isFocused ? focusedFill : fill}
      />
    </Svg>
  );
};

export default DiscoverIcon;
