import PropTypes from "prop-types";
import PwordVisibility from "../../auth/PwordVisibility";
import { useState } from "react";

const FormInput = ({ title, value = "", onValue = (e)=>{} }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="space-y-8 ">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-[#ffff] text-base">{title}</label>
          <PwordVisibility
            className=""
            toggleVisibility={toggleVisibility}
            isVisible={isVisible}
          />
        </div>

        <input
          className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input"
          type={isVisible ? "text" : "password"}
          placeholder=""
          value={value}
          onChange={e=> onValue(e)}
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  title: PropTypes.string,
};

export default FormInput;
