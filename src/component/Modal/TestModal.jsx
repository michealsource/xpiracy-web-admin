import { Input, Modal } from "@mantine/core";

import PropTypes from "prop-types";
import { useState } from "react";
import { deleteIcon, replyIcon, womanAvatar } from "../../assets/svg";
import CustomButton from "../button";
import { AiOutlineSmile } from "react-icons/ai";

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

const commentData = [
  {
    id: 0,
    icon: womanAvatar,
    name: "Maude hall",
    time: "14 min ago",
    content:
      "Thats a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
    text: "Reply",
    bin: deleteIcon,
    replyicon: replyIcon,
  },
  {
    id: 1,
    icon: womanAvatar,
    name: "Maude hall",
    time: "14 min ago",
    content:
      "Thats a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
    text: "Reply",
    bin: deleteIcon,
    replyicon: replyIcon,
  },
];

const TestModal = ({ isOpen, onClose }) => {
  const [commentInputVisibility, setCommentInputVisibility] = useState(
    new Array(commentData.length).fill(false)
  );

  const toggleCommentInputVisibility = (index) => {
    const updatedVisibility = [...commentInputVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCommentInputVisibility(updatedVisibility);
  };
  return (
    <Modal
      withCloseButton={false}
      opened={isOpen}
      onClose={onClose}
      title="Comment Thread"
      size="md"
      centered
    >
      <div className="">
        <div className="space-y-4">
          {commentData.map(
            ({ id, time, name, replyicon, bin, icon, content, text }) => (
              <div key={id} className="space-y-2">
                <div className="flex items-center gap-x-2">
                  <div>
                    <img src={icon} alt="" />
                  </div>
                  <h5 className="text-sm">{name}</h5>
                  <p className="text-[#F52F00] text-[8px]">{time}</p>
                </div>
                <p className="text-[#939393] text-xs">{content}</p>
                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center gap-x-2"
                    onClick={() => toggleCommentInputVisibility(id)}
                  >
                    <img src={replyicon} alt="" />
                    <p className="text-[#8991A0] text-xs">{text}</p>
                  </button>
                  <img src={bin} alt="" />
                </div>
                {commentInputVisibility[id] && (
                  <div className="border px-2 py-1 bg-[#FFFFFF2E] border-[#B4BBC680] rounded-sm">
                    <p className="my-1">Type your comment here</p>
                    <Input
                      placeholder=""
                      rightSection={
                        <div className="flex items-center gap-x-2 mr-20">
                          <AiOutlineSmile
                            size="1.2rem"
                            style={{ opacity: 0.5, color: "#eee" }}
                          />
                          <CustomButton
                            title="Send"
                            color="#F52F00"
                            borderRadius="20px"
                            padding="6px 12px"
                          />
                        </div>
                      }
                      styles={{ input: inputStyles }}
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
        
      </div>
    </Modal>
  );
};

TestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TestModal;
