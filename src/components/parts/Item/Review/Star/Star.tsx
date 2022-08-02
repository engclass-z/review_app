import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { useThemeColor } from '../../../../Themed';

type Props = {
  rate: number;
} & ViewProps;

const Star: React.FC<Props> = ({ rate, style, ...others }) => {
  const color = useThemeColor({}, 'text');
  const starEls = [];

  let _rate = rate + 0.2;

  for (let i = 0; i < 5; i++) {
    if (_rate >= 1) {
      starEls.push(<Ionicons key={i} name="star" size={12} color={color} />);
    } else if (_rate >= 0.5) {
      starEls.push(<Ionicons key={i} name="star-half-sharp" size={12} color={color} />);
    } else {
      starEls.push(<Ionicons key={i} name="star-outline" size={12} color={color} />);
    }
    _rate--;
  }

  return (
    <View style={[styles.star, style]}>
      {starEls}
    </View>
  );
}

export default Star;

const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
