"use client";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { useChangeUserPasswordMutation } from "@/redux/api/adminApi";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
    const [changeUserPassword] = useChangeUserPasswordMutation();
  const handelPasswordChange = async(values: FieldValues) => {
    try {
        const res = await changeUserPassword(values);
        if(res?.data?.success === true){
            toast.success(res?.data?.message);
            alert(res?.data?.message)
        }
    } catch (error:any) {
        console.log(error);
    }
  };
  return (
    <div className="  w-full flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg lg:w-4/12">
        <BloodForm onSubmit={handelPasswordChange}>
          <BloodInput
            name="currentPassword"
            type="password"
            label="Current Password"
            required={true}
          />
          <BloodInput
            name="newPassword"
            type="password"
            label="New Password"
            required={true}
          />
          <PrimaryBtn>Submit</PrimaryBtn>
        </BloodForm>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
