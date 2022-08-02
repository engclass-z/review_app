import { SnsKind } from '../modules/sns';
import Store, { StoreKind, StoreStatus } from '../modules/store';

export const STORES = [
  new Store(
    's1',
    'Store Name 1 ABCDEFGHI',
    StoreKind.BAR,
    StoreStatus.OPEN,
    { lat: 35.689616, lng: 139.711048 },
    { rate: 4.9, count: 1010 },
    {
      count: 1000,
    },
    true,
    { uri: 'https://picsum.photos/288' },
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
  new Store(
    's2',
    'Store Name 2',
    StoreKind.WASHOKU,
    StoreStatus.CLOSE,
    { lat: 35.688616, lng: 139.711048 },
    { rate: 4.5, count: 1010 },
    {
      count: 10,
    },
    true,
    undefined,
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
  new Store(
    's3',
    'Store Name 3',
    StoreKind.BAR,
    StoreStatus.OPEN,
    { lat: 35.689616, lng: 139.710048 },
    { rate: 3.3, count: 1010 },
    {
      count: 10,
    },
    false,
    undefined,
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
  new Store(
    's4',
    'Store Name 4',
    StoreKind.BAR,
    StoreStatus.OPEN,
    { lat: 35.690616, lng: 139.711048 },
    { rate: 2.1, count: 1010 },
    {
      count: 10,
    },
    false,
    undefined,
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
  new Store(
    's5',
    'Store Name 5',
    StoreKind.BAR,
    StoreStatus.OPEN,
    { lat: 35.689616, lng: 139.712048 },
    { rate: 0.1, count: 1010 },
    {
      count: 10,
    },
    false,
    undefined,
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
  new Store(
    's6',
    'Store Name 6',
    StoreKind.BAR,
    StoreStatus.OPEN,
    { lat: 35.690616, lng: 139.712048 },
    { rate: 0.7, count: 1010 },
    {
      count: 10,
    },
    false,
    undefined,
    '03-0123-4567',
    {
      postalCode: '100-0000',
      streetAddress: '東京都千代田区',
    },
    '',
    [
      {
        kind: SnsKind.SITE,
        url: 'https://google.co.jp',
      },
      {
        kind: SnsKind.TWITTER,
        url: 'https://twitter.com',
      },
      {
        kind: SnsKind.FACEBOOK,
        url: 'https://facebook.com',
      },
    ]
  ),
];
