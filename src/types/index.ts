import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
}
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface FetchPostsResponse {
  data: Post[];
  totalCount: number;
}
export interface LoginFormInputs {
  username: string;
  password: string;
}
