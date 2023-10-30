import RegisterForm from "@/components/auth/registerForm";

const Register = () => {
  return (
    <>
      <div className="max-w-xl mx-auto w-full">
      <div className="flex justify-center my-12">
        <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
          <h3 className="pt-4 text-2xl text-center font-bold">
            创建新用户
          </h3>
          <RegisterForm />
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
