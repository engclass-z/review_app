import React from 'react';
import { Pressable, StyleSheet, PressableProps, View, StyleProp, ViewStyle } from 'react-native';

import UserListInStore from '../../UserListInStore/UserListInStore';
import StoreThumbnail from '../../../Image/StoreThumbnail/StoreThumbnail';
import IconCount from '../../../Item/IconCount/IconCount';
import Review from '../../../Item/Review/Review';
import { Text, useThemeColor } from '../../../../Themed';
import { StorePreview, StoreStatus } from '../../../../../modules/store';

type Props = {
  // TODO: この行をなくす方法がないか
  style: StyleProp<ViewStyle>;
  onPressStore: (storeId: string) => void;
} & StorePreview & PressableProps;

const StoreItem: React.FC<Props> = (
  {
    id,
    title,
    kind,
    status,
    review,
    favorite,
    thumbnail,
    users,
    style,
    onPressStore,
  }) => {
  const backgroundColor = useThemeColor({}, 'cardBackground');
  const thumbnailSource = thumbnail || require('../../../../../assets/images/placeholder/washoku_2.jpg');

  const cardStyle = ({ pressed }: { pressed: boolean }) => [
    styles.item,
    { backgroundColor },
    status === StoreStatus.OPEN && pressed && styles.pressed,
    status !== StoreStatus.OPEN && styles.notOpen,
    status !== StoreStatus.OPEN && pressed && styles.notOpenPressed,
    style,
  ];

  const onPressStoreHandler = () => {
    onPressStore(id);
  };

  return (
    <Pressable
      style={cardStyle}
      onPress={onPressStoreHandler}
    >
      <StoreThumbnail style={styles.image} source={thumbnailSource} />
      <View style={styles.textContainer}>
        <Text style={styles.kind}>{kind}</Text>
        <Text
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View style={styles.reviewAndFavorite}>
          <Review {...review} />
          <IconCount icon="bookmark" style={styles.favorite}>
            {favorite.count.toLocaleString()}
          </IconCount>
        </View>
        <UserListInStore style={styles.users} users={users} />
      </View>
    </Pressable>
  );
}

export default StoreItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    minHeight: 112,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
  },
  notOpen: {
    opacity: 0.48,
  },
  notOpenPressed: {
    opacity: 0.4,
  },
  image: {
    width: 112,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  kind: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  title: {
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 18,
  },
  reviewAndFavorite: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  favorite: {
    marginLeft: 8,
  },
  users: {
    marginTop: 6,
  }
});
