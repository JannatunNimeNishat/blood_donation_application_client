"use client";
import {
  useGetBloodDonationRequestsToMeQuery,
  useUpdateDonationRequestMutation,
} from "@/redux/api/userApi";
import { Modal, Table } from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";

const BloodRequestsForMePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequesterInfo, setSelectedRequesterInfo] = useState();

  const {
    data: bloodRequestsToMe,
    isLoading: isBloodRequestToMeLoading,
    isFetching,
  } = useGetBloodDonationRequestsToMeQuery({});
  const [updateDonationRequest] = useUpdateDonationRequestMutation();

  const handleChangeRequestStatus = async ({
    status,
    id,
  }: {
    status: string;
    id: string;
  }) => {
    try {
      const res = await updateDonationRequest({ status, id });
    } catch (error: any) {
      console.log(error);
    }
  };
  const columns: any = [
    {
      title: "Requester's Name",
      dataIndex: ["requester", "name"],
      key: "requesterName",
    },
    {
      title: "Requester's Blood Type",
      dataIndex: ["requester", "bloodType"],
      key: "requesterBloodType",
    },
    {
      title: "Hospital Name",
      dataIndex: "hospitalName",
      key: "hospitalName",
    },
    {
      title: "Date of Donation",
      dataIndex: "dateOfDonation",
      key: "dateOfDonation",
    },
    {
      title: "Request Status",
      dataIndex: "requestStatus",
      key: "requestStatus",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record: any) => {
        return (
          <div className="flex gap-3">
            <button
              disabled={record?.requestStatus === "APPROVED" ? true : false}
              className={`  border rounded-lg
                ${
                  record?.requestStatus === "APPROVED"
                    ? "cursor-not-allowed bg-green-500 text-white"
                    : " border border-green-500 text-green-500"
                }
                   px-2 py-1 `}
              onClick={() =>
                handleChangeRequestStatus({
                  status: "APPROVED",
                  id: record?.id,
                })
              }
            >
              APPROVED
            </button>

            <button
              disabled={record?.requestStatus === "REJECTED" ? true : false}
              className={`  border rounded-lg
                ${
                  record?.requestStatus === "REJECTED"
                    ? "cursor-not-allowed bg-blue-500 text-white"
                    : " border border-blue-500 text-blue-500"
                }
                   px-2 py-1 `}
              onClick={() =>
                handleChangeRequestStatus({
                  status: "REJECTED",
                  id: record?.id,
                })
              }
            >
              REJECTED
            </button>
          </div>
        );
      },
    },
    {
        title: "",
        dataIndex: "",
        key: "x",
        render: (record: any) => (
          <div>
            <button
              disabled={record.requestStatus === "APPROVED" ? false : true}
              className={`px-2 py-1 bg-blue-500 text-white rounded-lg
                  ${
                    record.requestStatus === "APPROVED"
                      ? "opacity-100"
                      : "opacity-40 cursor-not-allowed"
                  }
                  `}
              onClick={() => {
                setIsModalOpen(true);
                setSelectedRequesterInfo(record);
              }}
            >
              Contact Details
            </button>
          </div>
        ),
      },
  ];

  if (isBloodRequestToMeLoading || isFetching) {
    return <h1 className="text-xl text-center">Loading...</h1>;
  }
  return (
    <div>
      {/* nav */}
      <div>
        <Search placeholder="Search Requests" />
      </div>
      {/* requests table */}
      <div className="mt-16">
        <Table
          columns={columns}
          dataSource={bloodRequestsToMe?.data}
          rowKey="id"
        />
      </div>

      {/* requester modal */}
      {isModalOpen && (
        <RequesterInfoModal
        requesterInfo={selectedRequesterInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default BloodRequestsForMePage;

const RequesterInfoModal = ({ requesterInfo, isModalOpen, setIsModalOpen }: any) => {


    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <Modal
          title="Donor Contact Information"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="mt-5">
            <p className="text-xl font-semibold">
              Email: {requesterInfo?.requester?.email}
            </p>
            <p className="text-xl font-semibold">
              Mobile Number: {requesterInfo?.requester?.mobileNumber}
            </p>
            <p className="text-xl font-semibold">
              Location: {requesterInfo?.requester?.location}
            </p>
          </div>
        </Modal>
      </>
    );
  };