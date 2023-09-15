import { Checkbox } from "@mantine/core";
import { CrownJesus } from "../assets/png";
import CustomButton from "../component/button";

import FormInput from "../component/input/FormInput";

const SignIn = () => {
  return (
    <div className="w-full h-screen px-20 bg-center bg-no-repeat bg-cover border cp-admin-container bg-auth-bg">
      <div className="relative flex items-center justify-between w-9/12 py-10 mx-auto md:flex-row gap-x-20">
        <div className="text-center md:text-left md:w-1/2 pt-[10rem] space-y-3">
          <div className="">
            <h6 className="text-[#878787] text-3xl">Welcome To</h6>
            <h2 className="text-6xl">Christpiracy</h2>
            <h2 className="text-6xl">Admin</h2>
          </div>

          <div className="relative h-[340px] w-[400px]">
            <img src={CrownJesus} alt="" className="absolute object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full px-12 signin-container">
          <h4 className="text-4xl">Sign in</h4>
          <form className="w-full">
            <div className="py-8 space-y-8">
              <div className="space-y-2">
                <label className="text-[#989898] text-base">Email</label>
                <input
                  className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-2">
                <FormInput title="Password" />
              </div>
              <div>
                <CustomButton
                  title="Sign in"
                  color="#F52F00"
                  width="100%"
                  padding="16.293px 0px 16.844px 0px"
                  borderRadius="45.221px"
                />
              </div>
              <div className="flex items-center justify-between text-[#989898] text-base">
                <div className="flex items-center gap-x-2">
                  <Checkbox color="dark" />
                  <p>Remember me</p>
                </div>
                <p>Forgot Password?</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
