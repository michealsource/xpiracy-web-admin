import { Modal } from "@mantine/core";

import PropTypes from "prop-types";
import { uploadIconOrange } from "../../assets/svg";
import { useDisclosure } from "@mantine/hooks";
import VideoMetaModal from "./VideoMetaModal";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const UploadNewVideoModal = ({ isOpen, onClose }) => {
  const [opened, { open, close }] = useDisclosure();
  const [mediaFile, setMediaFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    // check type
    if (!file.type.includes("video")) {
      toast.error("Media type not allowed");
      return;
    }

    setMediaFile(file);
    onClose();
    open();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "video/*",
    multiple: false,
  });

  return (
    <>
      <Modal
        withCloseButton
        opened={isOpen}
        onClose={onClose}
        title="Upload New Video"
        size="100%"
        centered
      >
        <div className="h-[70vh] px-8" {...getRootProps()}>
          <div className="py-40 border-dashed border-[#7F7F7F4C] border rounded-md">
            <div className="flex flex-col items-center justify-center">
              <img src={uploadIconOrange} alt="" />
              <h6 className="text-xl font-semibold">
                Drag & drop files or{" "}
                <button
                  className="underline text-[#F52F00] "
                  // onClick={open}
                >
                  Browse
                </button>
              </h6>
              <p></p>
            </div>
          </div>
        </div>
      </Modal>

      <VideoMetaModal mediaFile={mediaFile} isOpen={opened} onClose={close} />
    </>
  );
};

UploadNewVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UploadNewVideoModal;
