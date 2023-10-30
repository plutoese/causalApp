"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const callbackUrl = "/";

  const onSubmit = async (data) => {
    try {
      await signIn("credentials", {
        redirect: true,
        name: data.name,
        password: data.password,
        callbackUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="bg-slate-300 rounded-md" {...register("name")} />
      <input className="bg-slate-300 rounded-md" {...register("password")} />
      <input
        type="submit"
        className="text-white rounded-lg bg-blue-600 px-3 py-2"
      />
    </form>
  );
}
