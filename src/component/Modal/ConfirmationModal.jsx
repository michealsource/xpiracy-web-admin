import { Modal } from "@mantine/core";

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
export const inputContainerStyle = {
  borderRadius: " 6.754px",
  border: "1.447px solid rgba(180, 187, 198, 0.50)",
  background: "rgba(255, 255, 255, 0.18)",
};

const ConfirmationModal = ({ isOpen, onClose, onAccept, title, selectedMainVideo }) => {
  return (
    <Modal
      withCloseButton={false}
      opened={isOpen}
      onClose={onClose}
      title="Confirmation Modal"
      size="md"
      centered
    >
      <div className="py-4 space-y-6">
        <p className="text-lg text-center">{title}</p>
        <div className="ml-auto space-x-4 w-fit">
          <CustomButton
            title="Cancel"
            color="red"
            borderRadius="5px"
            padding="8px 20px"
            onClick={onClose}
          />
          <CustomButton
            title="Delete"
            color="green"
            borderRadius="5px"
            padding="8px 20px"
            onClick={() => {
              onClose();
              onAccept();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
};

export default ConfirmationModal;
