import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { StorePreview } from '../../../../modules/store';
import StoreItem from './StoreItem/StoreItem';

type Props = {
  stores: StorePreview[];
  onPressStore: (storeId: string) => void;
} & View['props'];

const StoreList: React.FC<Props> = ({ stores, style, onPressStore }) => {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        style={styles.list}
        data={stores}
        keyExtractor={(store) => store.id}
        renderItem={({item}) => (
          <StoreItem
            style={styles.item}
            onPressStore={onPressStore}
            {...item}
          />
        )}
      />
    </View>
  );
}

export default StoreList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  item: {
    marginVertical: 6,
  },
});
