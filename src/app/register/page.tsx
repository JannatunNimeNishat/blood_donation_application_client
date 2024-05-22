"use client"
import BloodFileInput from "@/components/form/BloodFileInput";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import BloodRadio from "@/components/form/BloodRadio";
import BloodSelect from "@/components/form/BloodSelect";
import BloodTextArea from "@/components/form/BloodTextArea";
import { Button } from "antd";
import Link from "next/link";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

const defaultValues = {
  name:"",
  email:"",
  password:"",
  bloodType:"",
  location:"",
  age:"",
  bio:"",
  lastDonationDate:"",
  role:"",
  isDonor: "",
  userImageURL:"",
};

const RegisterPage = () => {
  const handleRegister: SubmitErrorHandler<FieldValues> = (values) => {
    console.log(values);
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
  const isDonorOptions:any = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
    
  ];
  return (
    <div className="min-h-screen  flex items-center justify-center py-10">
      <div
        className="border border-blue-300 lg:w-4/12 xl:w-5/12 
        "
        style={{
          margin: "0 auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "10px 10px 30px lightblue",
        }}
      >
        <h2
          className="font-semibold text-2xl"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Register:
        </h2>
        <BloodForm
          onSubmit={handleRegister}
          defaultValues={defaultValues}
          className="  mt-8 "
        >
          <div className="grid lg:grid-cols-2 gap-4">
            <BloodInput name="name" type="text" label="Name" required={true} />
            <BloodInput name="email" type="email" label="Email" required={true} />
            <BloodInput name="password" type="password" label="Password" required={true} />
            
            <BloodSelect name="bloodType" label="Blood Type" options={bloodOptions} required={true} />
            <BloodInput name="location" type="text" label="Location" required={true}/>
            <BloodInput name="age" type="number" label="Age" required={true}/>
            <BloodInput name="lastDonationDate" type="date" label="Last Donation Date" required={true}/>
            <BloodRadio label="Become a donor" name="isDonor" options={isDonorOptions} required={true}
            className="border border-gray-300 hover:border-blue-500 w-full h-full py-[10px] px-2 rounded-lg flex gap-3"
            />
          </div>
            <BloodFileInput name="userImageURL"  label="User Image URL"/>
          
            <BloodTextArea name="bio"  label="Bio"/>
          <div className="" style={{ margin: "0 auto", width: "150px" }}>
            <Button
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
            </Button>
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
