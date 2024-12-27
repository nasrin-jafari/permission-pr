'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import InputField from '@/components/common/InputField';
import { toast } from 'react-toastify';
import { users } from '@/constants';
import LoginDetails from '@/components/common/LoginDetails';
import { LoginFormInputs } from '@/types';

const loginSchema = Yup.object({
  username: Yup.string()
    .required('وارد کردن نام کاربری الزامی است.')
    .min(4, 'نام کاربری نباید کمتر از ۴ کاراکتر باشد.'),
  password: Yup.string()
    .required('وارد کردن رمز عبور الزامی است.')
    .min(6, 'رمز عبور نباید کمتر از ۶ کاراکتر باشد.'),
}).required();

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    const { username, password } = data;

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('ورود موفقیت‌آمیز بود!');
      reset();
      window.location.reload();
    } else {
      toast.error('کاربری با این مشخصات پیدا نشد.');
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px]">
        <h2 className="mb-4 text-center text-xl font-semibold dark:text-dark-primary">
          ورود به پنل
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="space-y-2">
            <InputField
              label="نام کاربری"
              name="username"
              placeholder="نام کاربری را وارد کنید"
              register={register}
              errors={errors}
            />

            <InputField
              label="رمز عبور"
              name="password"
              type="password"
              placeholder="رمز عبور را وارد کنید"
              register={register}
              errors={errors}
            />
          </div>

          <div className="mb-3 mt-8">
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
      <LoginDetails />
    </div>
  );
};

export default LoginForm;
