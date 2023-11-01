"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const nav_items = [
  { id: "home", href: "/", label: "主页" },
  { id: "case", href: "/", label: "案例" },
  { id: "tutorial", href: "/", label: "教程" },
  { id: "data", href: "/", label: "数据" },
  { id: "model", href: "/", label: "模型" },
  { id: "app", href: "/", label: "应用" },
  { id: "customization", href: "/", label: "定制" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="mx-auto max-w-7xl px-2 py-3">
      <div className="grid grid-cols-6">
        <div className="col-span-2 flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/02/07/17/13/whale-5992048_1280.png"
            className="h-12"
            alt="center logo"
          />
          <div className="ml-2 text-xl font-semibold">未来学习中心</div>
        </div>
        <div className="col-span-4 items-center place-self-end mr-3 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:col-span-3 lg:flex lg:items-center lg:justify-around lg:pt-1">
          {nav_items.map((item) => (
            <Link
              className="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow"
              key={item.id}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        { !session ? (<div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-3 lg:m-2 lg:pt-1">
          <div className="bg-provence-yellow rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-yellow-500 hover:shadow-lg transform transition duration-100 cursor-pointer">
            <Link href="/auth/register">
              <p> 注册</p>
            </Link>
          </div>
          <div className="bg-provence-lavender rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-purple-600 hover:shadow-lg transform transition duration-100 cursor-pointer">
            登录
          </div>
        </div>) : (<div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-3 lg:m-2 lg:pt-1">
          <div className="bg-provence-lavender rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-purple-600 hover:shadow-lg transform transition duration-100 cursor-pointer">
            登出
          </div>
        </div>) }
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 overflow-y-auto mx-auto w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/07/17/13/whale-5992048_1280.png"
              className="h-12"
              alt="center logo"
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {nav_items.map((item) => (
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                    key={item.id}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex gap-4">
                <a
                  href="#"
                  className="bg-provence-yellow block rounded-lg px-3 py-2.5 text-sm leading-7 text-gray-900 hover:bg-yellow-500"
                >
                  注册
                </a>
                <a
                  href="#"
                  className="bg-provence-lavender block rounded-lg px-3 py-2.5 text-sm leading-7 text-gray-900 hover:bg-purple-600"
                >
                  登录
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <hr />
    </header>
  );
}
