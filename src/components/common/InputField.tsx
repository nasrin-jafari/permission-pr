'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputFieldProps } from '@/types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`mb-4 flex flex-col`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...register(name)}
          type={inputType}
          placeholder={placeholder}
          autoComplete={`new-${name}`}
          className="w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-dark-bg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-dark-bg dark:text-dark-foreground"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500 focus:outline-none dark:text-gray-400"
            aria-label={showPassword ? 'مخفی کردن رمز عبور' : 'نمایش رمز عبور'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {errors?.[name] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputField;
