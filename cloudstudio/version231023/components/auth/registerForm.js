"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          用户名
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.username?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            密码
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="c_password"
          >
            再次输入密码
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="c_password"
            type="password"
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
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          点击确认
        </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          忘记密码?
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="/auth/loginin"
        >
          已有账户？请登录
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
