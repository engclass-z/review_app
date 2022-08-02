import React from 'react';
import { StyleSheet, Image, ImageProps } from 'react-native';

type Props = ImageProps;

const UserIcon: React.FC<Props> = ({ source, style, ...others }) => {
  return (
    <Image
      { ...others }
      style={[styles.userIcon, style]}
      source={source}
    />
  );
}

export default UserIcon;

const styles = StyleSheet.create({
  userIcon: {
    width: '100%',
    height: '100%',
  },
});
