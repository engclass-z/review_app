import User, { UserKind } from '../modules/user';

export const USERS = [
  new User(
    'u1',
    'User Name 1 ABCDEFGHI',
    UserKind.DEFAULT,
    { uri: 'https://picsum.photos/288' },
    {
      storeId: 's1',
    },
  ),
  new User(
    'u2',
    'User Name 2',
    UserKind.OWNER,
    undefined,
    {
      storeId: 's2',
    },
  ),
  new User(
    'u3',
    'User Name 3',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u4',
    'User Name 4',
    UserKind.DEFAULT,
    undefined,
  ),
  new User(
    'u5',
    'User Name 5',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u6',
    'User Name 6',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u7',
    'User Name 7',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u8',
    'User Name 8',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u9',
    'User Name 9',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u10',
    'User Name 10',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
  new User(
    'u11',
    'User Name 11',
    UserKind.DEFAULT,
    undefined,
    {
      storeId: 's1',
    },
  ),
];
