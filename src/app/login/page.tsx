"use client";
import BloodForm from "@/components/form/BloodForm";
import BloodInput from "@/components/form/BloodInput";
import { Button } from "antd";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const loginHandler: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="border border-blue-300 w-[450px]  "
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
          Login:
        </h2>
        <BloodForm
          onSubmit={loginHandler}
          defaultValues={defaultValues}
          className="flex flex-col  mt-8  justify-center"
        >
          <div className="flex flex-col">
            <BloodInput
             name="email"
             type="email"
             label="Email"
            />
          </div>
          <div className="flex flex-col">
          <BloodInput
             name="password"
             type="password"
             label="Password"
            />
          </div>
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
              Login
            </Button>
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
