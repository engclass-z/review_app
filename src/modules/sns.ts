export enum SnsKind {
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  SITE = 'site',
}

export type SnsType = {
  kind: SnsKind;
  url: string;
}
