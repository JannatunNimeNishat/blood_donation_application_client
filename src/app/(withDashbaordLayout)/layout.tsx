"use client";

import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isUserLogin = isLoggedIn();
  if (!isUserLogin) {
    router.push("/login");
    return null;
  }
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
