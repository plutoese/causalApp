export default function Footer() {
  return (
    <>
      <hr />
      <footer className="p-4 sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="/" className="hover:underline">
              未来学习中心
            </a>{" "}
            版权所有
          </span>
          <div className="flex text-sm mt-4 text-gray-500 space-x-6 sm:justify-center sm:mt-0">
            备案号：
            <a
              href="https://beian.miit.gov.cn/"
              className="text-gray-500 hover:text-gray-90"
              target="_blank"
            >
              沪ICP备19016211号-2
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
