import CustomButton from "../../component/button";
import { Link } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import EditModal from "../../component/Modal/EditModal";
import { useState } from "react";

const AccountDetails = () => {
  const [isOpen, { toggle }] = useDisclosure();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("submitted");
  };

  return (
    <div className="flex flex-col justify-center h-auto mx-10 my-20 comment-table-container items-left">
      <div className="px-8 py-20">
        <h4 className="text-[27px] font-medium ">Account Details</h4>
        <p>Change your user details below</p>
        <form onSubmit={handleSubmit}>
          <div className="py-8 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[#ffff] text-base">
                  First Name (current)
                </label>
                {/* <div className="flex items-center p-2 border rounded-md gap-x-2 ">
                  <AiOutlineEdit />
                  <CustomButton
                    title={shouldEdit ? "Save Changes" : "Edit Details"}
                    color="transparent"
                    width="100%"
                    borderRadius="5px"
                    fontSize="12px"
                  />
                </div> */}
              </div>

              <input
                className="focus:outline-none w-[50%] focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input disabled:cursor-not-allowed"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                name="firstName"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[#fff] text-base">
                  Last Name (current)
                </label>
              </div>
              <input
                className="focus:outline-none w-[50%] focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input disabled:cursor-not-allowed"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
                autoFocus
              />
            </div>
            <div className="flex items-center gap-x-6">
              <CustomButton
                title="Click Here"
                color="#F52F00"
                width="10%"
                padding="16.293px 0px 16.844px 0px"
                borderRadius="45.221px"
              />
              <Link to="/change-password" className="underline">
                Change password
              </Link>
            </div>
          </div>
        </form>

        <div>
          <p className="text-[#9E9E9E] font-normal text-xl">
            Done with your account settings? Go back to{" "}
            <Link to="/" className="text-[#F52F00] underline font-bold text-xl">
              Dashboard
            </Link>{" "}
          </p>
        </div>

        <EditModal isOpen={isOpen} onClose={toggle} />
      </div>
    </div>
  );
};

export default AccountDetails;
