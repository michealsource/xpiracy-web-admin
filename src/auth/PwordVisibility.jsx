import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const PwordVisibility = ({ isVisible, toggleVisibility }) => {
  return (
    <button onClick={toggleVisibility}>
      {isVisible ? (
        <div className="flex items-center gap-x-2 text-[#666666FF] text-sm">
          <AiOutlineEye /> <p className="">Hide</p>
        </div>
      ) : (
        <div className="flex items-center gap-x-2 text-[#666666FF] text-sm">
          <AiOutlineEyeInvisible /> <p className="">Show</p>
        </div>
      )}
    </button>
  );
};

export default PwordVisibility;
