"use client"
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isUserLogin = isLoggedIn();
  if (!isUserLogin) {
    router.push("/login");
    return null;
  }
  return <>{children}</>;
};

export default PrivateRoute;
