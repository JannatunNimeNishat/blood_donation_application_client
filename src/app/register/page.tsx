"use client";
import BloodFileInput from "@/components/form/BloodFileInput";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import BloodRadio from "@/components/form/BloodRadio";
import BloodSelect from "@/components/form/BloodSelect";
import BloodTextArea from "@/components/form/BloodTextArea";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { storeUserInfo } from "@/services/actions/auth.services";
import { registerUser } from "@/services/actions/registerUser";
import { userLogin } from "@/services/actions/userLogin";
import { imageUploader } from "@/utils/imageUploader";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  bloodType: "",
  location: "",
  age: "",
  bio: "",
  lastDonationDate: "",
  role: "",
  isDonor: "",
  userImageURL: "",
  mobileNumber:""
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleRegister = async (values: FieldValues) => {
    setError("");
    try {
      if (values?.userImageURL) {
        const uploadedImage = await imageUploader(
          values?.userImageURL?.fileList[0].originFileObj
        );
        values.userImageURL = uploadedImage.url;
      }
      values.age = Number(values.age);
      const res = await registerUser(values);
      
      // register
      if (res?.data?.id) {
        toast.success(res?.message);
        // login
        const result = await userLogin({
          email: values?.email,
          password: values?.password,
        });
        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          router.push("/");
        } else {
          setError(result?.message);
        }
      } else {
        setError(res?.message);
      }
    } catch (error) {
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
  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div
        className="border border-red-300 lg:w-4/12 xl:w-5/12 
        "
        style={{
          margin: "0 auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "5px 5px  30px red",
        }}
      >
        <h2
          className="font-semibold text-2xl"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Register:
        </h2>
        {error && (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        )}
        <BloodForm
          onSubmit={handleRegister}
          defaultValues={defaultValues}
          className="  mt-8 "
        >
          <div className="grid lg:grid-cols-2 gap-4">
            <BloodInput name="name" type="text" label="Name" required={true} />
            <BloodInput
              name="email"
              type="email"
              label="Email"
              required={true}
            />
            <BloodInput
              name="password"
              type="password"
              label="Password"
              required={true}
            />
            <BloodInput
              name="mobileNumber"
              type="text"
              label="Mobile Number"
              required={true}
            />

            <BloodSelect
              name="bloodType"
              label="Blood Type"
              options={bloodOptions}
              required={true}
            />
            <BloodSelect name="location" label="Location" required={true} options={locationOptions}/>
           
            <BloodInput name="age" type="number" label="Age" required={true} />
            <BloodInput
              name="lastDonationDate"
              type="date"
              label="Last Donation Date"
              required={true}
            />
            <BloodRadio
              label="Become a donor"
              name="isDonor"
              options={isDonorOptions}
              required={true}
              className="border border-gray-300 hover:border-blue-500 w-full h-full py-[10px] px-2 rounded-lg flex gap-3"
            />
          </div>
          <BloodTextArea name="bio" label="Bio" required={true} />
          <BloodFileInput name="userImageURL" label="User Image " />

          <div className="" style={{ margin: "0 auto", width: "150px" }}>
          <PrimaryBtn>
                Register
              </PrimaryBtn>
           {/*  <Button
              className="mt-0 py-5  flex items-center justify-center"
              style={{
                width: "150px",
                backgroundColor: "lightblue",
                fontWeight: "600",
                color: "black",
              }}
              htmlType="submit"
            >
              Register
            </Button> */}
          </div>
          <p style={{ textAlign: "center", width: "full", marginTop: "10px" }}>
            Already have an account ?{" "}
            <Link
              className="text-black"
              href={"/login"}
              style={{ color: "blue", fontWeight: "500" }}
            >
              Login
            </Link>
          </p>
        </BloodForm>
      </div>
    </div>
  );
};

export default RegisterPage;
