import CustomButton from "../../component/button";
import FormInput from "../../component/input/FormInput";

const AddNewAdmin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comment-table-container  w-[50%] flex flex-col justify-center items-left my-20 mx-auto">
      <div className="px-8 py-5">
        <h4 className="text-[27px] font-medium ">Add New Admin</h4>
        <p className="border border-[#FFFFFF1E]"></p>
        <form onSubmit={handleSubmit}>
          <div className="py-8 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[#fff] text-base">
                  First Name (required)
                </label>
              </div>
              <input
                className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                type="text"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[#fff] text-base">
                  Last Name (required)
                </label>
              </div>
              <input
                className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                type="text"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[#fff] text-base">
                  Email (required)
                </label>
              </div>
              <input
                className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                type="email"
                placeholder=""
              />
            </div>
            <FormInput title="Confirm password" />
            <div className="">
              <CustomButton
                title="Create Admin"
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

export default AddNewAdmin;
