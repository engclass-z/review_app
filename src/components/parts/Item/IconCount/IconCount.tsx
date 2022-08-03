import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { Text, useThemeColor } from '../../../Themed';

type Props = {
  icon: 'chatbubble' | 'bookmark';
} & ViewProps;

const IconCount: React.FC<Props> = ({ icon, children, style }) => {
  const color = useThemeColor({}, 'text');

  return (
    <View style={[styles.iconText, style]}>
      <Ionicons name={icon} size={14} color={color} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default IconCount;

const styles = StyleSheet.create({
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 2,
  },
});
