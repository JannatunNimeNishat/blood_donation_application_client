import { Layout, Menu } from "antd";
import {
  LockOutlined,
  BlockOutlined,
  TeamOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import React from "react";
import { getUserInfo } from "@/services/actions/auth.services";
import { USER_ROLE } from "@/constants/userRole";
import Link from "next/link";
import { usePathname } from "next/navigation";
const { Sider } = Layout;
const SideBar = () => {
  const userInfo = getUserInfo();
  const pathName = usePathname();
  let sidebarItems: any;
  switch (userInfo?.role) {
    case USER_ROLE.USER:
      sidebarItems = [
        {
          key: "editProfile",
          icon: <TeamOutlined />,
          label: (
            <Link
              className={`${
                pathName === "/dashboard/user/editProfile" &&
                "bg-blue-400 px-3 py-1"
              }`}
              href={"/dashboard/user/editProfile"}
            >
              Edit Profile
            </Link>
          ),
        },
        {
          key: "changePassword",
          icon: <LockOutlined />,
          label: (
            <Link
              className={`${
                pathName === "/dashboard/user/changePassword" &&
                "bg-blue-400 px-3 py-1"
              }`}
              href={"/dashboard/user/changePassword"}
            >
              Change Password
            </Link>
          ),
        },
        {
          key: "myBloodRequests",
          icon: <BlockOutlined />,
          label: (
            <Link
              className={`${
                pathName === "/dashboard/user/myBloodRequests" &&
                "bg-blue-400 px-3 py-1"
              }`}
              href={"/dashboard/user/myBloodRequests"}
            >
              My Blood Requests
            </Link>
          ),
        },
        {
          key: "bloodRequestsForMe",
          icon: <GroupOutlined />,
          label: (
            <Link
              className={`${
                pathName === "/dashboard/user/bloodRequestsForMe" &&
                "bg-blue-400 px-3 py-1"
              }`}
              href={"/dashboard/user/bloodRequestsForMe"}
            >
              Blood Requests To Me
            </Link>
          ),
        },
      ];
      break;
    case USER_ROLE.ADMIN:
      sidebarItems = [
        {
          key: "userManagement",
          icon: <TeamOutlined />,
          label: (
            <Link
              className={`${
                pathName === "/dashboard/admin/userManagement" &&
                "bg-blue-400 px-3 py-1"
              }`}
              href={"/dashboard/admin/userManagement"}
            >
              User Management
            </Link>
          ),
        },
        {
            key: "changePassword",
            icon: <LockOutlined />,
            label: (
              <Link
                className={`${
                  pathName === "/dashboard/admin/changePassword" &&
                  "bg-blue-400 px-3 py-1"
                }`}
                href={"/dashboard/admin/changePassword"}
              >
                Change Password
              </Link>
            ),
          },
      ];
      break;
    default:
      break;
  }

  return (
    <Sider
   
      width={230}
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div
        className="text-xl font-bold"
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={"/"}>BloodBond</Link>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
