import { ImageURISource } from 'react-native';

export enum UserKind {
  DEFAULT = 'default',
  OWNER = 'owner',
}

export type UserInStore = {
  id: string;
  name: string;
  icon?: ImageURISource;
}

export type UserType = {
  id: string;
  name: string;
  kind: UserKind;
  icon?: ImageURISource;
  inStore?: {
    storeId: string,
  };
  isDeleted?: boolean;

  preview_in_store: UserInStore;
}

export default class User implements UserType {
  id;
  name;
  kind;
  icon;
  inStore;
  isDeleted = undefined;

  constructor(
    id: string,
    name: string,
    kind: UserKind,
    icon?: ImageURISource,
    inStore?: {
      storeId: string,
    },
  ) {
    this.id = id;
    this.name = name;
    this.kind = kind;
    this.inStore = inStore;
    this.icon = icon;
  }

  get preview_in_store(): UserInStore {
    return {
      id: this.id,
      name: this.name,
      icon: this.icon,
    }
  }
}
