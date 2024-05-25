"use client";

import {
  useChangeUserAccountTypeMutation,
  useChangeUserRoleMutation,
  useGetAllUsersQuery,
} from "@/redux/api/adminApi";
import {  Table, TableProps, Tag } from "antd";
import Search from "antd/es/transfer/search";
import Image from "next/image";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const UserManagementPage = () => {
  const { data: allUsersData, isLoading } = useGetAllUsersQuery({});
  const [changeUserRole] = useChangeUserRoleMutation();
  const [changeUserAccountType] = useChangeUserAccountTypeMutation();

  const handleChangeRole = async ({
    role,
    id,
  }: {
    role: string;
    id: string;
  }) => {
    try {
      await changeUserRole({ role, id });
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleChangeAccountType = async ({
    type,
    id,
  }: {
    type: string;
    id: string;
  }) => {
    try {
      const res = await changeUserAccountType({ type, id });
    } catch (error: any) {
      console.log(error);
    }
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Image",
      dataIndex: "userImageURL",
      key: "userImageURL",
      render: (userImageURL) => (
        <Image
          className=""
          width={25}
          height={25}
          src={userImageURL}
          alt="user image"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: string, record: any) => (
        <div className="flex gap-3">
          <button
            disabled={role === "user" ? true : false}
            className={`  border rounded-lg
                ${
                  role === "user"
                    ? "cursor-not-allowed bg-green-500 text-white"
                    : " border border-green-500 text-green-500"
                }
                   px-2 py-1 `}
            onClick={() => handleChangeRole({ role: "user", id: record?.id })}
          >
            User
          </button>

          <button
            disabled={role === "admin" ? true : false}
            className={`  border rounded-lg
                ${
                  role === "admin"
                    ? "cursor-not-allowed bg-blue-500 text-white"
                    : " border border-blue-500 text-blue-500"
                }
                   px-2 py-1 `}
            onClick={() => handleChangeRole({ role: "admin", id: record?.id })}
          >
            admin
          </button>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "accountType",
      key: "accountType",
      render: (type: string, record: any) => (
        <div className="flex gap-3">
          <button
            disabled={type === "active" ? true : false}
            className={`  border rounded-lg
                ${
                  type === "active"
                    ? "cursor-not-allowed bg-green-500 text-white"
                    : " border border-green-500 text-green-500"
                }
                   px-2 py-1 `}
            onClick={() =>
              handleChangeAccountType({ type: "active", id: record?.id })
            }
          >
            active
          </button>

          <button
            disabled={type === "deactivate" ? true : false}
            className={`  border rounded-lg
                ${
                  type === "deactivate"
                    ? "cursor-not-allowed bg-blue-500 text-white"
                    : " border border-blue-500 text-blue-500"
                }
                   px-2 py-1 `}
            onClick={() =>
              handleChangeAccountType({ type: "deactivate", id: record?.id })
            }
          >
            deactivate
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* nav */}
      <div>
        <Search
          placeholder="Search User"
          //   allowClear
          //enterButton="Search"
        //  size="large"
          //onSearch={onSearch}
        />
      </div>
      {/* user table */}
      <div className="mt-16">
        <Table columns={columns} dataSource={allUsersData?.data} scroll={{ x: "max-content" }} />
      </div>
    </div>
  );
};

export default UserManagementPage;
