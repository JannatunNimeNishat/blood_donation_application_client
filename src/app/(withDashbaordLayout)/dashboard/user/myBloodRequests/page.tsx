"use client";
import { useGetMyBloodRequestsQuery } from "@/redux/api/userApi";
import { Modal, Table} from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";

const MyBloodRequestsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonorInfo, setSelectedDonorInfo] = useState();
  const { data: myBloodRequests, isLoading: isBloodRequestLoading } =
    useGetMyBloodRequestsQuery({});

  const columns: any = [
    {
      title: "Donor's name",
      dataIndex: ["donor", "name"],
      key: "donorName",
    },
    {
      title: "Blood Type",
      dataIndex: ["donor", "bloodType"],
      key: "bloodType",
    },
    {
      title: "Date Of Donation",
      dataIndex: "dateOfDonation",
      key: "dateOfDonation",
    },
    {
      title: "Status",
      dataIndex: "requestStatus",
      key: "requestStatus",
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
              setSelectedDonorInfo(record);
            }}
          >
            Contact Details
          </button>
        </div>
      ),
    },
  ];

  if (isBloodRequestLoading) {
    return <h1 className="text-xl text-center">Loading...</h1>;
  }
  return (
    <div>
      {/* nav */}
      <div>
        <Search placeholder="Search User" />
      </div>
      {/* user table */}
      <div className="mt-16 ">
        <Table columns={columns} dataSource={myBloodRequests?.data}  scroll={{ x: "max-content" }}/>
      </div>
      {isModalOpen && (
        <DonorInfoModal
          donorInfo={selectedDonorInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default MyBloodRequestsPage;

const DonorInfoModal = ({ donorInfo, isModalOpen, setIsModalOpen }: any) => {
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
            Email: {donorInfo?.donor?.email}
          </p>
          <p className="text-xl font-semibold">
            Mobile Number: {donorInfo?.donor?.mobileNumber}
          </p>
          <p className="text-xl font-semibold">
            Location: {donorInfo?.donor?.location}
          </p>
        </div>
      </Modal>
    </>
  );
};
