import { ImageURISource } from 'react-native';

import { UserInStore } from './user';
import { SnsType } from './sns';
import { USERS } from '../data/dummy-user';

export enum StoreKind {
  BAR = 'bar',
  WASHOKU = 'washoku',
}

export enum StoreStatus {
  OPEN = 'open',
  CLOSE = 'close',
}

export type StoreReviewType = {
  rate: number;
  count: number;
}

export type StorePreview = {
  id: string;
  title: string;
  kind: StoreKind;
  status: StoreStatus;
  location: {
    lat: number,
    lng: number,
  };
  review: StoreReviewType;
  favorite: {
    count: number,
  };
  isFavorite: boolean;
  thumbnail?: ImageURISource;
  users: UserInStore[];
};

export type StoreType = {
  id: string;
  title: string;
  kind: StoreKind;
  status: StoreStatus;
  location: {
    lat: number,
    lng: number,
  };
  review: StoreReviewType;
  favorite: {
    count: number,
  };
  isFavorite: boolean;
  thumbnail?: ImageURISource;
  users: UserInStore[];
  tell?: string;
  address?: {
    postalCode: string,
    streetAddress: string,
  };
  description?: string;
  media?: SnsType[];
  isDeleted?: boolean;

  set_users: () => void;
  preview: StorePreview;
};

export default class Store implements StoreType {
  id;
  title;
  kind;
  status;
  location;
  review;
  favorite;
  isFavorite;
  thumbnail;

  users: UserInStore[] = [];
  tell;
  address;
  description;
  media;
  isDeleted = undefined;

  constructor(
    id: string,
    title: string,
    kind: StoreKind,
    status: StoreStatus,
    location: {
      lat: number,
      lng: number,
    },
    review: {
      rate: number,
      count: number,
    },
    favorite: {
      count: number,
    },
    isFavorite: boolean,
    thumbnail?: ImageURISource,
    tell?: string,
    address?: {
      postalCode: string,
      streetAddress: string,
    },
    description?: string,
    media?: SnsType[],
) {
    this.id = id;
    this.title = title;
    this.kind = kind;
    this.status = status;
    this.location = location;
    this.review = review;
    this.favorite = favorite;
    this.isFavorite = isFavorite;
    this.thumbnail = thumbnail;

    this.tell = tell;
    this.address = address;
    this.description = description;
    this.media = media;

    this.set_users();
  }

  set_users(): void {
    const _users = USERS.filter((user) => this.id === user.inStore?.storeId);

    if (_users.length) {
      _users.forEach((user) => {
        this.users.push(user.preview_in_store);
      })
    }
  }

  get preview(): StorePreview {
    return {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      kind: this.kind,
      status: this.status,
      location: this.location,
      review: this.review,
      favorite: this.favorite,
      isFavorite: this.isFavorite,
      users: this.users,
    }
  }
}
