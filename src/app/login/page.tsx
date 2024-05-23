"use client"
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";

import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";

const defaultValues = {
  email: "",
  password: "",
};

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const loginHandler = async (values: FieldValues) => {
    setError("");
    try {
      const res = await userLogin(values);

      if (res?.data?.token) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.token });
        router.push('/')
      } else {
        setError(res?.message);
      }
    } catch (error) {
      
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="border border-red-300 w-[450px]  "
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
        {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
        <BloodForm
          onSubmit={loginHandler}
          defaultValues={defaultValues}
          resolver={validationSchema}
          className="flex flex-col  mt-8  justify-center"
        >
          <div className="flex flex-col">
            <BloodInput name="email" type="email" label="Email" required={true}/>
          </div>
          <div className="flex flex-col">
            <BloodInput name="password" type="password" label="Password" required={true}/>
          </div>
          <div className="" style={{ margin: "0 auto", width: "150px" }}>
            {/* <Button
              className="  flex items-center justify-center"
             
              htmlType="submit"
            > */}
              <PrimaryBtn>
                Login
              </PrimaryBtn>
            {/* </Button> */}
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
              Login
            </Button> */}
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
      </div>
    </div>
  );
};

export default LoginPage;
