import { ThirdJesus } from "../assets/png";
import CustomButton from "../component/button";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-center bg-no-repeat bg-cover cp-admin-container bg-auth-bg ">
      <div className="relative items-center py-10 auth-container md:flex md:mx-auto md:w-8/12 md:justify-between md:flex-row">
        {/* Text Section */}
        <div className="text-center md:text-left  pt-[8rem] space-y-8">
          <div>
            <h2 className="text-6xl">Forgot</h2>
            <h2 className="text-6xl ">Password?</h2>
          </div>

          <div className="relative h-[420px] w-[420px] ">
            <img src={ThirdJesus} alt="" className="" />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center justify-center w-full signin-container md:w-1/2">
          <div className="">
            <h4 className="text-4xl">Please Enter Registered Email</h4>
            <form>
              <div className="py-8 space-y-8">
                <div className="space-y-2">
                  <label className="text-[#989898] text-base">Email</label>
                  <input
                    className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <CustomButton
                    title="Recover Password"
                    color="#F52F00"
                    width="100%"
                    padding="16.293px 0px 16.844px 0px"
                    borderRadius="45.221px"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
