import React, {FC} from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const ProfileIcon: FC<SvgTypes> = props => {
  const {
    width = 25,
    height = 24,
    fill = '#0E0E16',
    isFocused,
    focusedFill,
  } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <G clipPath="url(#clip0_50_1611)">
        <Circle
          cx={12.1249}
          cy={23.06}
          r={8.06}
          stroke={isFocused ? focusedFill : fill}
          strokeWidth={2}
        />
      </G>
      <Circle
        cx={12.125}
        cy={7.25}
        r={4.25}
        stroke={isFocused ? focusedFill : fill}
        strokeWidth={2}
        fill={isFocused ? focusedFill : 'transparent'}
      />
      <Defs>
        <ClipPath id="clip0_50_1611">
          <Path fill="#fff" transform="translate(2.125 14)" d="M0 0H20V8H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ProfileIcon;
