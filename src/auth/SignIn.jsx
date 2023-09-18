import { Checkbox } from "@mantine/core";

import CustomButton from "../component/button";
import CrownJesus from "../assets/png/crown-jesus.png";

import FormInput from "../component/input/FormInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { clearLoginStatus } from "../redux/reducers/authentication";
import Loader from "../component/loader/loader";
import { signInAction } from "../redux/actions/authenticationAction";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticationSlice = useSelector((_) => _.authenticationSlice);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email().trim().required("email is required"),
    password: yup.string().trim().required("password is required"),
  });

  const login = async () => {
    try {
      await loginSchema.validate(input);
      dispatch(signInAction(input));
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  useEffect(() => {
    if (authenticationSlice.signingInStatus === "loading") {
      setLoading(true);
    } else if (authenticationSlice.signingInStatus === "completed") {
      dispatch(clearLoginStatus());
      window.location.replace("/");
      setLoading(false);
    } else if (authenticationSlice.signingInStatus === "failed") {
      setLoading(false);
      toast.error(`${authenticationSlice.signingInError}`);

      dispatch(clearLoginStatus());
    }
  }, [authenticationSlice]);

  return (
    <div className=" w-full mx-auto text-[#fff]  ">
      <div className="h-screen bg-center bg-no-repeat bg-cover bg-local-image">
        {loading && <Loader />}
        <div className="relative flex flex-col items-center justify-between w-9/12 py-10 mx-auto md:flex-row gap-x-20">
          <div className="text-center md:text-left w-full md:w-1/2 pt-[10rem] space-y-3">
            <div className="">
              <h6 className="text-[#878787] text-3xl">Welcome To</h6>
              <h2 className="text-6xl">Christpiracy</h2>
              <h2 className="text-6xl">Admin</h2>
            </div>

            <div className="relative max-w-[400px] mx-auto md:mx-0 md:max-w-[none] h-[340px]">
              <img
                src={CrownJesus}
                alt=""
                className="absolute object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full px-12 signin-container">
            <h4 className="text-4xl">Sign In</h4>
            <form
              onSubmit={() => {
                return false;
              }}
              className="w-full"
            >
              <div className="py-8 space-y-8">
                <div className="space-y-2">
                  <label className="text-[#989898] text-base">Email</label>
                  <input
                    className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                    type="text"
                    placeholder="Enter your email address"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <FormInput
                    title="Password"
                    value={input.password}
                    onValue={(e) =>
                      setInput({ ...input, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <CustomButton
                    title="Sign in"
                    color="#F52F00"
                    width="100%"
                    padding="16.293px 0px 16.844px 0px"
                    borderRadius="45.221px"
                    type="button"
                    onClick={() => {
                      login();
                    }}
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
    </div>
  );
};

export default SignIn;
