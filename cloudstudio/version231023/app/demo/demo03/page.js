import React from "react";

const page = () => {
  return (
    <>
      <body class="bg-provence-linen">
        <header class="mx-auto max-w-7xl px-2 py-3">
          <div class="grid grid-cols-6">
            <div class="col-span-2 flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2021/02/07/17/13/whale-5992048_1280.png"
                class="h-12"
                alt="center logo"
              />
              <div class="ml-2 text-2xl font-semibold">未来学习中心</div>
            </div>
            <div class="col-span-3 flex items-center justify-around pt-1">
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                主页
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                案例
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                教程
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                数据
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                模型
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                工具
              </div>
              <div class="transition ease-in-out text-sm font-medium cursor-pointer hover:font-bold hover:text-provence-yellow">
                定制
              </div>
            </div>
            <div class="flex items-center justify-end gap-3 m-2 pt-1">
              <div class="bg-provence-yellow rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-yellow-600 hover:shadow-lg transform transition duration-100 cursor-pointer">
                注册
              </div>
              <div class="bg-provence-lavender rounded text-sm font-medium align-middle text-white px-3 py-2 hover:scale-120 hover:bg-purple-600 hover:shadow-lg transform transition duration-100 cursor-pointer">
                登录
              </div>
            </div>
          </div>
          <hr />
        </header>
        <section>
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-4 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-6">
              <h1 class="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">
                当数字技术遇到经管科学
              </h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                用数据、技术和算法全方位赋能经管学科，助力新时代新文科的教学与科研
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-provence-lavender hover:bg-purple-600 focus:ring-4 focus:ring-purple-600"
              >
                快速开始
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                联系我们
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
              <img
                src="http://www.plutoese.com:8888/images/2023/11/08/20230911151836.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
        <section class="bg-provence-limonade">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mb-8 max-w-screen-md lg:mb-16">
              <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                适用于多样化场景
              </h2>
              <p class="text-gray-500 sm:text-xl dark:text-gray-400">
                我们的社会科学库为不同需求的个人和团体提供支持
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">课堂教学</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  通过可交互的动态模拟和数据案例为课程教学增添有创造力的新元素
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">实验实践</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  通过场景式和编码式的实验专业知识认知和实践能力
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">经验研究</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  专业的经验研究模型库提供经典和前沿的经典方法和工具
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">项目报告</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  定制化的模板和数据模型结合提升项目报告的效率和专业性
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">数据故事</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  基于数据可视化的流畅故事体验
                </p>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">动态看板</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  集成式动态化的信息可视化驾驶舱
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                技术革新教育
              </h2>
              <p class="mb-4">
                我们致力于用新技术为教育服务，通过融合信息技术与专业知识，创造教育的新体验，推动新时代教育范式的改革。
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img
                class="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                class="mt-4 w-full rounded-lg lg:mt-10"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <hr />
        <footer class="p-4 sm:p-6 dark:bg-gray-800">
          <div class="mx-auto max-w-screen-xl">
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023
                <a href="/" class="hover:underline">
                  未来学习中心
                </a>{" "}
                版权所有
              </span>
              <div class="flex text-sm mt-4 text-gray-500 space-x-6 sm:justify-center sm:mt-0">
                备案号：
                <a
                  href="https://beian.miit.gov.cn/"
                  class="text-gray-500 hover:text-gray-900 text-sm"
                  target="_blank"
                >
                  沪ICP备19016211号-2
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default page;
