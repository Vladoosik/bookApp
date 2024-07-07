// modules
import React, {FC} from 'react';
import Svg, {Rect} from 'react-native-svg';
// types
import {SvgTypes} from '../../types/svgTypes.ts';

const ListIcon: FC<SvgTypes> = props => {
  const {width = 19, height = 14} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 19 14" fill="none">
      <Rect x={0.875} y={0.5} width={18} height={2} rx={1} fill="#0E0E16" />
      <Rect x={0.875} y={6} width={18} height={2} rx={1} fill="#0E0E16" />
      <Rect x={0.875} y={11.5} width={18} height={2} rx={1} fill="#0E0E16" />
    </Svg>
  );
};

export default ListIcon;
