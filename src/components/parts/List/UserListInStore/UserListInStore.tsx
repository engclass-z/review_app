import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import UserItemInStore from './UserItemInStore/UserItemInStore';
import { Text } from '../../../Themed';
import { UserInStore } from '../../../../modules/user';

type Props = {
  users: UserInStore[];
} & ViewProps;

const UserListInStore: React.FC<Props> = ({ users, style }) => {
  const userEls = [];

  if (users.length <= 7) {
    for (const user of users) {
      userEls.push(
        <UserItemInStore
          key={user.id}
          {...user}
          style={styles.userItem}
        />
      );
    }
  } else {
    for (let i = 0; i < 6; i++) {
      userEls.push(
        <UserItemInStore
          key={users[i].id}
          {...users[i]}
          style={styles.userItem}
        />
      );
    }
    userEls.push(<Text key="others" style={styles.moreText}>+{users.length - 6}</Text>);
  }

  return (
    <View style={[styles.userList, style]}>
      {userEls}
    </View>
  );
}

export default UserListInStore;

const styles = StyleSheet.create({
  userList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userItem: {
    marginHorizontal: 1,
  },
  moreText: {
    marginLeft: 4,
  },
});
