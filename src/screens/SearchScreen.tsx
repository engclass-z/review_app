import React from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../components/screens/Search/List/List';
import { STORES } from '../data/dummy-store';
import { RootTabScreenProps } from '../types';

type Props = RootTabScreenProps<'Search'>;

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const stores = STORES;

  const onPressStoreHandler = (storeId: string) => {
    navigation.navigate('StoreDetail', { storeId });
  };

  return (
    <View style={styles.container}>
      <List stores={stores} onPressStore={onPressStoreHandler} />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
