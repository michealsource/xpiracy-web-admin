import { Modal } from "@mantine/core";

import PropTypes from "prop-types";
import { congratulationsImg } from "../../assets/svg";
import CustomButton from "../button";

const CongratulationsModal = ({ OpenTwo, onClose }) => {
  return (
    <Modal
      withCloseButton
      opened={OpenTwo}
      onClose={onClose}
      size="100%"
      centered
    >
      <div className="h-[70vh] px-8">
        <div className="py-10 ">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className=" bg-[#00000014] rounded-full p-12">
              <img
                src={congratulationsImg}
                alt=""
                className="w-[182px] h-[192px]"
              />
            </div>

            <h6 className="text-3xl">
              Congratulations your video has been published
            </h6>
            <h6 className="pb-4 text-3xl">been published</h6>
            <div>
              <CustomButton
                onClick={onClose}
                title="Finish"
                color="#F52F00"
                padding="12px 20px"
                borderRadius="50px"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

CongratulationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CongratulationsModal;
