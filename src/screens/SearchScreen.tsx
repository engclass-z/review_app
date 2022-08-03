import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import List from '../components/screens/Search/List/List';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

type Props = RootTabScreenProps<'Search'>;

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  // TODO: TSエラーの対策をする
  const stores = useSelector((state) => state.stores.searchStores);

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
