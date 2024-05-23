"use client"

import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const userInfo = getUserInfo();
    const router = useRouter();
    if (userInfo.role !== "admin") {
      removeUser();
      router.push("/login");
      router.refresh();
    }
    return <>{children}</>;
};

export default AdminLayout;