import ClientNavigation from "./clientnavbar";
import LoginNavBar from "./loginnavbar";


export default function Navigation({children}) {

  return (
    <ClientNavigation>
      <LoginNavBar />
    </ClientNavigation>
  );
}
