import LogoutForm from "@/components/auth/logoutForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const SignOut = async() => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/auth/loginin")
  }

  return (
    <>
      <div>SignOUt</div>
      <LogoutForm />
    </>
  );
};

export default SignOut;
