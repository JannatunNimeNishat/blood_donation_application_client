import { Button } from "antd";
import Link from "next/link";


const LoginPage = () => {
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
          <h2 className="font-semibold text-2xl" style={{ marginTop: "10px", marginBottom: "10px" }}>Login:</h2>
          <form className="flex flex-col gap-3 mt-8  justify-center">
            <div className="flex flex-col">
            <label htmlFor="email ">Email</label>
            <input className="border py-2 rounded-lg " name="email" type="email" id="email" />
            </div>
            <div className="flex flex-col">
            <label htmlFor="email ">Password</label>
            <input className="border py-2 rounded-lg " name="password" type="password" id="password" />
            </div>
            <div className="" style={{ margin: "0 auto", width: "150px" }}>
              <Button
              className="mt-5 py-2 flex items-center justify-center"
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
            <p
              style={{ textAlign: "center", width: "full", marginTop: "10px" }}
            >
              Do not have an account ?{" "}
              <Link
              className="text-black"
                href={"/register"}
                style={{ color: "blue", fontWeight: "500" }}
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        </div>
    );
};

export default LoginPage;