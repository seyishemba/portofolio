import type { Content } from './contents';

export type APIResponse<T> = T | { message: string };

export type PropsForViews<T = unknown> = T &
  Pick<Content, 'slug'> & {
    increment?: boolean;
  };