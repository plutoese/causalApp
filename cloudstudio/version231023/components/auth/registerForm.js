"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";

const validationSchema = z
  .object({
    username: z.string().min(1, { message: "用户名不能为空" }),
    email: z
      .string()
      .min(1, { message: "Email不能为空" })
      .email({ message: "不是有效的Email" }),
    password: z.string().min(6, { message: "密码必须包含6个及以上的字符" }),
    confirmPassword: z.string().min(1, { message: "再次输入密码不能为空" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "请接受网站的服务条款" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "两次输入密码不一致",
  });

const RegisterForm = () => {
  const [isUserExists, setIsUserExists] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    const usernameData = {
      username: data.username,
    };
    const formData = {
      username: data.username,
      email: data.email,
      password: data.password,
      group: data.group,
    };

    try {
      const userExists = await fetch("/api/user/getuser", {
        method: "POST",
        body: JSON.stringify(usernameData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if (!!userExists?.username) {
        setIsUserExists(true);
        return;
      }

      const res = await fetch("/api/user/createuser", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) return;

      signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        创建新用户
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="username"
          >
            用户名
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="username"
            type="text"
            placeholder="username"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.username?.message}
            </p>
          )}
          {isUserExists && (
            <p className="text-xs italic text-red-500 mt-2">用户已存在</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            type="email"
            placeholder="email@163.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <div className="mb-4 md:mr-2 md:mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              密码
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="mb-4 md:mr-2 md:mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="c_password"
            >
              再次输入密码
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="c_password"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="terms" {...register("terms")} />
          <label
            htmlFor="terms"
            className="ml-2 mb-2 text-sm font-bold text-gray-700"
          >
            我接受网站服务条款
          </label>
          {errors.terms && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.terms?.message}
            </p>
          )}
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            确定
          </button>
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          已有账户?{" "}
          <a
            href="/auth/loginin"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            登录
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
