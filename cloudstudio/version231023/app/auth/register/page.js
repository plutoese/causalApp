import RegisterForm from "@/components/auth/registerForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const Register = async() => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!!session) {
    redirect("/")
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
