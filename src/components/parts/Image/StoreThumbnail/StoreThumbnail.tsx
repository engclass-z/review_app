import React from 'react';
import { StyleSheet, Image, ImageProps } from 'react-native';

type Props = ImageProps;

const StoreThumbnail: React.FC<Props> = ({ source, style, ...others }) => {
  return (
    <Image
      { ...others }
      style={[styles.storeThumbnail, style]}
      source={source}
    />
  );
}

export default StoreThumbnail;

const styles = StyleSheet.create({
  storeThumbnail: {
    width: '100%',
    height: '100%',
  },
});
