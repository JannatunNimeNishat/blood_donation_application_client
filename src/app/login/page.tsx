"use client";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "sonner";

const defaultValues = {
  adminDefaultValues: { email: "admin@gmail.com", password: "123456" },
  user1: { email: "david.wilson@gmail.com", password: "123456" },
  user2: { email: "sophia.martinez@gmail.com", password: "123456" },
};

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loginOptions, setLoginOptions] = useState(defaultValues.adminDefaultValues);

  let resetForm:any;

  const handleLoginOption = (value: string) => {
    let selectedOptions;
    switch (value) {
      case "admin":
        selectedOptions = defaultValues.adminDefaultValues;
        break;
      case "user1":
        selectedOptions = defaultValues.user1;
        break;
      case "user2":
        selectedOptions = defaultValues.user2;
        break;
      default:
        selectedOptions = defaultValues.adminDefaultValues;
        break;
    }
    setLoginOptions(selectedOptions);
    if (resetForm) {
      resetForm(selectedOptions); // Call reset inside BloodForm with new values
    }
  };
  console.log(loginOptions);
  const loginHandler = async (values: FieldValues) => {
    setError("");
    try {
      const res = await userLogin(values);

      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.token });
        router.push("/");
      } else {
        setError(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div
        className="border border-red-300 px-2 lg:px-0 lg:w-[450px] relative "
        style={{
          margin: "0 auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "5px 5px 30px red",
        }}
      >
        <h2
          className="font-semibold text-2xl"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Login:
        </h2>

        {error && (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        )}
        <BloodForm
          onSubmit={loginHandler}
          defaultValues={loginOptions}
          setReset={(reset) => (resetForm = reset)}
          className="flex flex-col  mt-8  justify-center"
        >
          <div className="flex flex-col">
            <BloodInput
              name="email"
              type="email"
              label="Email"
              required={true}
            />
          </div>
          <div className="flex flex-col">
            <BloodInput
              name="password"
              type="password"
              label="Password"
              required={true}
            />
          </div>
          <div className="" style={{ margin: "0 auto", width: "150px" }}>
            {/* <button type="submit"> */}
            <PrimaryBtn>Login</PrimaryBtn>
            {/* </button> */}
          </div>
          <p style={{ textAlign: "center", width: "full", marginTop: "10px" }}>
            Do not have an account ?{" "}
            <Link
              className="text-black"
              href={"/register"}
              style={{ color: "blue", fontWeight: "500" }}
            >
              Register
            </Link>
          </p>
        </BloodForm>
        <div className="absolute top-3 right-2 flex items-center gap-3">
          <button className="px-3 py-1 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white duration-300" onClick={()=>handleLoginOption("admin")}>
            Admin
          </button>
          <button className="px-3 py-1 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white duration-300" onClick={()=>handleLoginOption("user1")}>
            User 1
          </button>
          <button className="px-3 py-1 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white duration-300" onClick={()=>handleLoginOption("user2")}>
            User 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
