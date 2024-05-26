"use client";
import BloodFileInput from "@/components/form/BloodFileInput";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import BloodRadio from "@/components/form/BloodRadio";
import BloodSelect from "@/components/form/BloodSelect";
import BloodTextArea from "@/components/form/BloodTextArea";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { useGetMyProfileInfoQuery, useUpdateUserInfoMutation } from "@/redux/api/userApi";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


const EditProfilePage = () => {
  const [error, setError] = useState("");
  const [updateUserInfo, ] = useUpdateUserInfoMutation();
  const {data:userProfileInfo, isLoading,isFetching} = useGetMyProfileInfoQuery({});


  const {name,mobileNumber,location, bloodType,userProfile,userImageURL,isDonor} = userProfileInfo?.data || {};
 
  const defaultValues:any = {
    ["user.name"]: name,
    ["user.mobileNumber"]: mobileNumber,
    ["user.bloodType"]: bloodType,
    ["user.location"]: location,
    ["user.isDonor"]: isDonor ,
    ["userProfile.age"]: userProfile?.age,
    ["userProfile.lastDonationDate"]: userProfile?.lastDonationDate,
    ["userProfile.bio"]:userProfile?.bio,
  };
  const handleProfileInfoChange = async (values: FieldValues) => {
    setError("");
    try {
     const res =  await updateUserInfo(values);
     if(res?.data?.success){
      toast.success(res?.data?.message)
     }
    } catch (error: any) {
      console.log(error);
    }
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
  const isDonorOptions: any = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const locationOptions = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "khulna" },
    { value: "Sylhet", label: "Sylhet" },
  ];
  if(isLoading || isFetching){
    return <h1>Loading...</h1>
  }
  return (
    <div className="mt-5">
      <div className=" lg:w-4/12 xl:w-5/12 mx-auto bg-white p-10 rounded-lg">
        <BloodForm onSubmit={handleProfileInfoChange} defaultValues={defaultValues}>
          <div className="grid lg:grid-cols-2 gap-4">
            <BloodInput name="user.name" type="text" label="Name" />
            <BloodInput
              name="user.mobileNumber"
              type="text"
              label="Mobile Number"
            />

            <BloodSelect
              name="user.bloodType"
              label="Blood Type"
              options={bloodOptions}
            />
            <BloodSelect
              name="user.location"
              label="Location"
              options={locationOptions}
            />

            <BloodInput name="userProfile.age" type="number" label="Age" />
            <BloodInput
              name="userProfile.lastDonationDate"
              type="date"
              label="Last Donation Date"
            />
            <BloodRadio
              label="Become a donor"
              name="user.isDonor"
              options={isDonorOptions}
              className="border border-gray-300 hover:border-red-500 w-full h-full py-[10px] px-2 rounded-lg flex gap-3"
            />
          </div>
          <BloodTextArea name="userProfile.bio" label="Bio" />
          {/* <BloodFileInput name="user.userImageURL" label="User Image " /> */}
          <div>
            <PrimaryBtn>Update</PrimaryBtn>
          </div>
        </BloodForm>
      </div>
    </div>
  );
};

export default EditProfilePage;
