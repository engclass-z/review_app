import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { StorePreview } from '../../../../modules/store';
import StoreList from '../../../parts/List/StoreList/StoreList';

type Props = {
  stores: StorePreview[];
  onPressStore: (storeId: string) => void;
} & ViewProps;

const List: React.FC<Props> = ({ stores, onPressStore }) => {
  return (
    <View style={styles.container}>
      <StoreList stores={stores} onPressStore={onPressStore} />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
