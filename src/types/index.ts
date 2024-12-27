import React, { ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
export interface InputFieldProps {
  label?: string;
  name: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}
