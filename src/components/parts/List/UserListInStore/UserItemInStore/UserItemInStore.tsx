import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import UserIcon from '../../../Image/UserIcon/UserIcon';
import { UserInStore } from '../../../../../modules/user';

type Props = UserInStore & ViewProps;

const UserItemInStore: React.FC<Props> = ({ icon, style }) => {
  const userIcon = icon || require('../../../../../assets/images/placeholder/washoku_2.jpg');

  return (
    <View style={[styles.userItem, style]}>
      <UserIcon source={userIcon} />
    </View>
  );
}

export default UserItemInStore;

const styles = StyleSheet.create({
  userItem: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
  },
});
