import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../component/button";
import FormInput from "../../component/input/FormInput";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosClient from "../../api/axios";
import { myProfileAction } from "../../redux/actions/authenticationAction";

const ChangePassword = () => {

  const authSelector = useSelector(_ => _.authenticationSlice);

  const adminData = (authSelector?.userData?.admin || {})

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert(';')
    if(formData.newPassword != formData.confirmPassword){
      toast.error("Password doesn't match");
      return ;
    }

    (async()=>{
      try {
        await axiosClient().patch("/admin/password", {
          old_password: formData.oldPassword,
          new_password: formData.newPassword,
        });
  
        dispatch(myProfileAction());
        toast.success("Updated Successfully");
      } catch (error) {
        toast.error("Password not correct");
      }
      // alert("submitted");
    })();

  };
  return (
    <div className="comment-table-container  w-[50%] flex flex-col justify-center items-left my-20 mx-auto">
      <div className="px-8 py-5">
        <h4 className="text-[27px] font-medium ">Change Password</h4>
        <p>Change your user details below</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8 py-8">
            <FormInput value={formData.oldPassword} onValue={e => setFormData({...formData, oldPassword: e.target.value})} title="Old password" />
            <FormInput value={formData.newPassword} onValue={e => setFormData({...formData, newPassword: e.target.value})} title="New password" />
            <FormInput value={formData.confirmPassword} onValue={e => setFormData({...formData, confirmPassword: e.target.value})} title="Confirm password" />
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
