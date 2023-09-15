import { Modal} from "@mantine/core";

import PropTypes from "prop-types";
import { closeIcon, uploadIcon } from "../../assets/svg";
import { Cross } from "../../assets/png";
import { BsPlusLg } from "react-icons/bs";
import CustomButton from "../button";

const VideoMetaModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        withCloseButton={false}
        opened={isOpen}
        onClose={onClose}
        size="100%"
        centered
      >
        <div className="">
          <div className="border-b border-b-[#FFFFFF38] text-2xl font-normal">
            Video Meta Data
          </div>
          <div className="flex items-start w-full py-4 gap-x-4">
            <div className="w-7/12 h-screen p-4 welcome-admin-dsh space-y-14 ">
              <div className="space-y-2 ">
                <label className="text-[#989898] text-base">
                  Title (required)
                </label>
                <input
                  className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input h-[73px]"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#989898] text-base">
                  Description (required)
                </label>
                <div>
                  <textarea
                    placeholder=" "
                    className="resize-none textarea-class"
                  />
                </div>
              </div>
              <div className="pb-4 space-y-2">
                <label className="text-[#989898] text-base">
                  Category (required)
                </label>
                <input
                  className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input h-[73px]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-5/12 space-y-4">
              <div className="p-4 welcome-admin-dsh">
                <div className="space-y-4 ">
                  <h5 className="">Upload Thumbnail</h5>
                  <div className="border border-dashed border-[#FFFFFF4D] bg-[#FF8F7414] rounded-sm ">
                    <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto">
                      <div>
                        <img src={uploadIcon} alt="" />
                      </div>
                      <h4 className="text-base font-bold">
                        Upload Thumbnail{" "}
                        <span className="underline text-[#F52F00] ">
                          Browse
                        </span>
                      </h4>
                      <p className="text-[#FFFFFF4D]">
                        Supported formats:JPEG,PNG,GIF,PDF
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="w-full ">
                      <div className="flex items-start justify-between ">
                        <div className="flex items-center gap-x-4">
                          <img src={Cross} alt="" />
                          <div>
                            <h5 className="">Passion of the Christ</h5>
                            <p className="">200kb</p>
                          </div>
                        </div>

                        <img src={closeIcon} alt="" />
                      </div>

                      {/* <div className="pt-5 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-[10px]">Uploading...</p>
                            <p className="text-[10px]">20%</p>
                          </div>
                          <Slider label={null} color="red" />
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 welcome-admin-dsh">
                <div className="space-y-4 ">
                  <h5 className="">Upload Subtitle</h5>
                  <div className="border border-dashed border-[#FFFFFF4D] bg-[#FF8F7414] rounded-sm pb-4">
                    <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto">
                      <div>
                        <img src={uploadIcon} alt="" />
                      </div>
                      <h4 className="text-base font-bold">
                        Upload Subtitle{" "}
                        <span className="underline text-[#F52F00] ">
                          {" "}
                          Browse
                        </span>
                      </h4>
                      <p className="text-[#FFFFFF4D]">
                        Supported formats:JPEG,PNG,GIF,PDF
                      </p>
                    </div>
                  </div>
                  <div className="container ">
                    <div className="flex items-center justify-between p-2 border rounded-sm ">
                      <p>Subtitle.srt</p>
                      <img src={closeIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[#FFFFFF38] border-t p-4">
            <div className="flex items-end justify-end">
              <div className="flex items-center gap-x-2 bg-[#F52F00] py-4 px-6 rounded-full text-sm">
                <BsPlusLg />
                <CustomButton title="Upload video" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

VideoMetaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoMetaModal;
