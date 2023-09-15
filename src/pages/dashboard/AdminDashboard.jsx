import { useState } from "react";
import { handsJesus, xpImgOne, xpImgTwo } from "../../assets/png";
import {
  Sunshine,
  deleteIcon,
  eyeIcon,
  pifIcon,
  ratingsIcon,
  replyIcon,
  womanAvatar,
} from "../../assets/svg";
import CustomButton from "../../component/button";
import { Input } from "@mantine/core";
import { AiOutlineSmile } from "react-icons/ai";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "react-router-dom";
import UploadNewVideoModal from "../../component/Modal/UploadNewVideoModal";

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
  {
    id: 2,
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
    id: 3,
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
const topVideosData = [
  {
    id: 0,
    icon: ratingsIcon,
    number: 1,
    img: xpImgTwo,
    title: "Passion of Christ",
    views: "34k views",
  },
  {
    id: 1,
    icon: ratingsIcon,
    number: 2,
    img: xpImgOne,
    title: "Passion of Christ",
    views: "34k views",
  },
  {
    id: 2,
    icon: ratingsIcon,
    number: 3,
    img: xpImgOne,
    title: "Passion of Christ",
    views: "34k views",
  },
  {
    id: 3,
    icon: ratingsIcon,
    number: 4,
    img: xpImgTwo,
    title: "Passion of Christ",
    views: "34k views",
  },
];

const AdminDashboard = () => {
  const [commentInputVisibility, setCommentInputVisibility] = useState(
    new Array(commentData.length).fill(false)
  );

  const toggleCommentInputVisibility = (index) => {
    const updatedVisibility = [...commentInputVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCommentInputVisibility(updatedVisibility);
  };
  const [isOpen, { toggle }] = useDisclosure();
  return (
    <div className="w-full py-16 px-7 ">
      <div className="flex items-start justify-between gap-x-8 ">
        <div className="w-8/12 ">
          <div className="welcome-admin-dsh h-[355px]">
            <div className="relative flex items-center justify-between px-5 ">
              <div className="py-10 space-y-20">
                <div className="">
                  <h4 className="flex items-center text-3xl font-normal gap-x-2">
                    Good morning,
                    <span>
                      <img src={Sunshine} alt="" />
                    </span>{" "}
                  </h4>
                  <h4 className="text-3xl font-normal">Seun!</h4>

                  <p className="text-base">
                    Welcome to Christpiracys admin dashboard!
                  </p>
                  <p className="text-base">What are we uploading today?</p>
                </div>

                <CustomButton
                  title="Upload new video"
                  color="#F52F00"
                  padding="16px 20px"
                  borderRadius="50px"
                  onClick={toggle}
                />
              </div>
              <div className="w-[400px] h-[400px] absolute -bottom-[46%] -right-8">
                <img src={handsJesus} alt="" />
              </div>
            </div>
          </div>

          <section className="flex justify-between py-5 gap-x-4">
            <div className="w-6/12 py-8 welcome-admin-dsh">
              <div className="p-4">
                <h4 className="mb-4">Analytics</h4>
                <div className="border-b border-[#FFFFFF20] text-2xl font-normal mb-4"></div>
                <div>
                  <img src={eyeIcon} alt="" />
                  <h5 className="mb-2 text-xl">
                    Total Video <br /> Views
                  </h5>
                  <h4 className="border-b border-[#FFFFFF20] text-4xl font-normal mb-4">
                    2000
                  </h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl">Summary</h5>
                    <p className="text-[#FFFFFF59] text-xs">Last 30 days</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-base ">Total thank yous</h5>
                    <p className="text-[#FFFFFF59] text-sm">45</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-base ">Total users</h5>
                    <p className="text-[#FFFFFF59] text-sm">45</p>
                  </div>
                  <h4 className="border-t border-[#FFFFFF20] text-base font-normal mt-4 text-[#F52F00]">
                    Goto Analytics
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-6/12 welcome-admin-dsh">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4>Top Videos</h4>
                  <select
                    id="mySelect"
                    name="Extended interviews"
                    className="select-input"
                  >
                    <option
                      value="Extended interviews"
                      className="bg-black text-[#fff] text-sm"
                    >
                      Extended interviews
                    </option>
                    <option
                      value="Trailer"
                      className="bg-black text-[#fff] text-sm"
                    >
                      Trailer
                    </option>
                    <option
                      value="bts"
                      className="bg-black text-[#fff] text-sm"
                    >
                      Bts
                    </option>
                  </select>
                </div>
                <div className="border-b border-[#FFFFFF20] text-2xl font-normal mb-4"></div>
                <div className="px-2 space-y-4">
                  {topVideosData.map(
                    ({ id, number, img, icon, views, title }) => (
                      <div key={id} className="flex flex-col">
                        <div className="relative flex items-center justify-between pt-6">
                          <h2 className="text-5xl text-[#8C8C8C] font-bold absolute -left-4 -top-2 ">
                            {number}
                          </h2>
                          <div className="flex items-center gap-x-2">
                            <img src={img} alt="" className="z-50" />
                            <div>
                              <p>{title}</p>
                              <img src={icon} alt="" />
                            </div>
                          </div>
                          <p>{views}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-5/12 ">
          <div className="h-auto welcome-admin-dsh">
            <div className="p-4 ">
              <h4 className="border-b border-[#FFFFFF20] text-2xl font-normal mb-4">
                Recent Comments
              </h4>
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
                        <div>
                          <Input
                            placeholder="Type your comment here"
                            rightSection={
                              <div className="flex items-center mr-20 gap-x-2">
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
              <Link
                to="/comments"
                className="border-t border-[#FFFFFF20] text-base font-normal mt-4 text-[#F52F00]"
              >
                View All
              </Link>
            </div>
          </div>

          <div className="h-auto my-5 welcome-admin-dsh">
            <div className="p-4">
              <div className="flex items-center justify-between border-b border-[#FFFFFF20] mb-4">
                <h4 className="text-2xl font-normal">
                  Total Pay It <br /> Forwards
                </h4>
                <select
                  id="mySelect"
                  name="Last 30 days"
                  className="select-input"
                >
                  <option
                    value="Last 30days"
                    className="bg-black text-[#fff] text-sm "
                  >
                    Last 30 days
                  </option>
                  <option
                    value="Last 20days"
                    className="bg-black text-[#fff] text-sm"
                  >
                    Last 20days
                  </option>
                  <option
                    value="Yesterday"
                    className="bg-black text-[#fff] text-sm"
                  >
                    Yesterday
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <img src={pifIcon} alt="" />
                <div>
                  <h4 className="text-4xl font-normal">2000</h4>
                  <p className="text-base font-normal">
                    People have been paid <br />
                    forward for
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadNewVideoModal isOpen={isOpen} onClose={toggle} />
    </div>
  );
};

export default AdminDashboard;
