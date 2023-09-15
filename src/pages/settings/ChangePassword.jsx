import CustomButton from "../../component/button";
import FormInput from "../../component/input/FormInput";

const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comment-table-container  w-[50%] flex flex-col justify-center items-left my-20 mx-auto">
      <div className="px-8 py-5">
        <h4 className="text-[27px] font-medium ">Change Password</h4>
        <p>Change your user details below</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8 py-8">
            <FormInput title="Old password" />
            <FormInput title="New password" />
            <FormInput title="Confirm password" />
            <div className="">
              <CustomButton
                title="Click Here"
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
  );
};

export default ChangePassword;
