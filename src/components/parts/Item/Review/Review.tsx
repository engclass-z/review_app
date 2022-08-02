import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import Star from './Star/Star';
import { Text } from '../../../Themed';
import IconCount from '../IconCount/IconCount';
import { StoreReviewType } from '../../../../modules/store';

type Props = StoreReviewType & ViewProps;

const Review: React.FC<Props> = ({ rate, count, style }) => {
  return (
    <View style={[styles.review, style]}>
      <Star rate={rate} />
      <Text style={styles.rate}>{rate}</Text>
      <IconCount icon="chatbubble" style={styles.count}>{count.toLocaleString()}</IconCount>
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({
  review: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    marginLeft: 2,
  },
  count: {
    marginLeft: 8,
  },
});
