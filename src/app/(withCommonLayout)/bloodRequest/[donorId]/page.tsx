"use client";
import PrivateRoute from "@/components/auth/PrivateRoute";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import BloodTextArea from "@/components/form/BloodTextArea";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { useCreateBloodRequestMutation } from "@/redux/api/bloodRequestApi";
import { useGetSingleDonorQuery } from "@/redux/api/donorApi";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "sonner";

const BloodRequestPage = ({ params }: { params: any }) => {
  const { donorId } = params;
  const { data: singleDonorData, isLoading } = useGetSingleDonorQuery(donorId);
  const [error,setError] = useState("");
  const {
    id,
    mobileNumber,
    
  } = singleDonorData?.data || {};
  const [createBloodRequest] = useCreateBloodRequestMutation();

  const handleBloodRequest = async (values: FieldValues) => {
    values.donorId = id;
      setError("");
      try {
        const res:any = await createBloodRequest(values);
        console.log(res);
        if(res?.data?.data?.id){
          toast.success(res?.data?.message)
        }else{
          toast.error(res?.error?.data?.message)
        }
      } catch (error) {
        console.log(error);
      }
  };

  const defaultValue = {
    phoneNumber:"",
    hospitalName:"",
    hospitalAddress:"",
    reason:""
  }
  if (isLoading) {
    return <h1 className="text-3xl font-bold text-center">Loading...</h1>;
  }
  return (
    <PrivateRoute>
    <div className="py-8 w-11/12 mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-3">
        Contact with blood donor
      </h1>
      <div className="mt-8 w-8/12 mx-auto">
        <BloodForm onSubmit={handleBloodRequest} defaultValues={defaultValue}>
          <BloodInput
            type="text"
            name="phoneNumber"
            label="Phone Number"
            required={true}
          />

          <BloodInput
          type="date"
          name="dateOfDonation"
          label="Date Of Donation"
          required={true}
          />
         
          <BloodInput
            type="text"
            name="hospitalName"
            label="Hospital Name"
            required={true}
          />
          <BloodInput
            type="text"
            name="hospitalAddress"
            label="Hospital Address"
            required={true}
          />
          <BloodTextArea name="reason" label="Reason" required={true} />
          <PrimaryBtn>Submit</PrimaryBtn>
        </BloodForm>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default BloodRequestPage;
