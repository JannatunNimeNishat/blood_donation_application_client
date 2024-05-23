"use client";
import DonorCard from "@/components/cards/DonorCard";
import BloodForm from "@/components/form/BloodForm";
import BloodSelect from "@/components/form/BloodSelect";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { useGetAllDonorQuery } from "@/redux/api/donorApi";
import { Form, Pagination, PaginationProps, Select } from "antd";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

export type TBloodSearch = {
  bloodType?: string;
  location?: string;
  availability?: boolean;
};

export const defaultValues = {
  bloodType: "",
  location: "",
  availability: "",
};

const BloodDonorsPage = () => {
  const [params, setParams] = useState([]);
  const [page, setPage] = useState(1);
  const [isSearched, setIsSearched] = useState(false);
  const { data: bloodDonorData, isLoading } = useGetAllDonorQuery([
    { name: "page", value: page },
    { name: "limit", value: 8 },
    ...params,
  ]);
  const metaData = bloodDonorData?.data?.meta;

  const { handleSubmit, control, reset } = useForm<any>({
    defaultValues: defaultValues,
  });

  const handleBloodSearch = (values: FieldValues) => {
    const queryParams: any = [];
    if (values.bloodType) {
      queryParams.push({ name: "bloodType", value: values.bloodType });
    }
    if (values.location) {
      queryParams.push({ name: "location", value: values.location });
    }
    if (values.availability) {
      queryParams.push({ name: "availability", value: values.availability });
    }
    setIsSearched(true);
    setParams(queryParams);
  };
  const bloodOptions = [
    { value: "O-POSITIVE", label: "O+" },
    { value: "O-NEGATIVE", label: "O-" },
    { value: "A-POSITIVE", label: "A+" },
    { value: "A-NEGATIVE", label: "A-" },
    { value: "B-POSITIVE", label: "B+" },
    { value: "B-NEGATIVE", label: "B-" },
    { value: "AB-POSITIVE", label: "AB+" },
    { value: "AB-NEGATIVE", label: "AB-" },
  ];
  const locationOptions = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "khulna" },
    { value: "Sylhet", label: "Sylhet" },
  ];
  const availabilityOptions = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ];

  if (isLoading) {
    return <h1 className="text-3xl font-bold text-center">Loading...</h1>;
  }

  return (
    <div className="py-8 w-11/12 mx-auto ">
      <h1 className="text-3xl font-semibold text-center mt-3">
        Search Blood Donor
      </h1>
      {/* search and filter */}
      <div className="mt-10">
        <Form layout="horizontal" onFinish={handleSubmit(handleBloodSearch)}>
          <div className="lg:w-10/12 mx-auto border border-red-400 rounded-lg p-3 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            {/* filter fields */}
            <div className="flex w-3/4 items-center gap-5 lg:gap-3 ">
              {/* bloodType */}
              <Controller
                name="bloodType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Item label="Blood group" className="w-full mt-4">
                    <Select
                    
                      placeholder="Select one"
                      {...field}
                      style={{ width: "100%" }}
                      options={bloodOptions}
                      size="large"
                    />
                  </Form.Item>
                )}
              />

              {/* Location */}
              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Item label="Location" className="w-full mt-4">
                    <Select
                    className={"hover:border-red-500"}
                      placeholder="Select location"
                      {...field}
                      style={{ width: "100%" }}
                      options={locationOptions}
                      size="large"
                    />
                  </Form.Item>
                )}
              />

              {/* availability */}
              <Controller
                name="availability"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Item label="Availability" className="w-full mt-4">
                    <Select
                    className={"hover:border-red-500"}
                      placeholder="Select one"
                      {...field}
                      style={{ width: "100%" }}
                      options={availabilityOptions}
                      size="large"
                    />
                  </Form.Item>
                )}
              />
            </div>
            {/* search btn */}
            <div className="w-1/4">
              <div className="w-1/3 mx-auto">
                <PrimaryBtn>Search</PrimaryBtn>
              </div>
            </div>
            {/* reset btn */}
            {
              <button
                className="absolute -top-10 py-1 px-2 border bg-red-500 rounded-lg text-white"
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </button>
            }
            {/* <div
              className="absolute -top-12"
              onClick={()=>reset()}
              >

              <PrimaryBtn >Reset</PrimaryBtn>
              </div> */}
          </div>
        </Form>
      </div>
      {/* donner cards */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {bloodDonorData &&
          bloodDonorData?.data?.data?.map((donor: any) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
      </div>
      {/* pagination */}
      <div className="mt-8 flex justify-end">
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          pageSize={metaData?.limit}
          total={metaData?.total}
        />
      </div>
    </div>
  );
};

export default BloodDonorsPage;
