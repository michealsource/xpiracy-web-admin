import {  Modal } from "@mantine/core";

import PropTypes from "prop-types";

import CustomButton from "../button";

export const inputStyles = {
  borderRadius: " 4.684px",
  height: "42px",
  border: "1.004px solid rgba(180, 187, 198, 0.50)",
  background: "rgba(255, 255, 255, 0.11)",
  "&:focus": {
    outline: "none",
    border: "1.004px solid rgba(180, 187, 198, 0.50)",
    color: "#fff",
  },
};

const EditModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      withCloseButton={false}
      opened={isOpen}
      onClose={onClose}
      size="70%" 
      centered
    >
      <div className="  flex flex-col justify-center items-left ">
        <div className="px-8 ">
          <h4 className="text-[27px] font-medium ">Account Details</h4>
          <p>Change your user details below</p>
          <form>
            <div className="space-y-8 py-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[#ffff] text-base">
                    Change First Name
                  </label>
                </div>

                <input
                  className="focus:outline-none w-[50%] focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[#fff] text-base">
                    Change Last Name
                  </label>
                </div>
                <input
                  className="focus:outline-none w-[50%] focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="">
                <CustomButton
                  title="Save"
                  color="#F52F00"
                  width="10%"
                  padding="16.293px 0px 16.844px 0px"
                  borderRadius="45.221px"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;
