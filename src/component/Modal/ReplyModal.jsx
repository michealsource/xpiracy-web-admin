
import PropTypes from "prop-types";

const ReplyModal = ({ handleCloseModal }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div  className="w-full">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity ">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal Content */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-gray-800 py-4 px-4">
            <div className="flex justify-end cursor-pointer" onClick={handleCloseModal}>
              <svg
                className="h-6 w-6 text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Reply</h2>
            <div className="bg-gray-700 w-4/5 mx-auto flex items-center justify-center py-2 rounded-md mb-6">
              <div className="mr-4"></div>
              <p className="text-gray-400">Current card limit is 10,000</p>
            </div>

            <div>
              <form className="mt-4">
                <div className="mb-4">
                  <label htmlFor="amount" className="text-gray-400 block mb-2">
                    Change rule
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="w-full bg-gray-700 p-3 rounded-md focus:outline-none placeholder-gray-500 text-gray-200 border border-gray-600"
                    placeholder="Enter amount"
                    name="amount"
                  />
                </div>
                {/* Add more form fields as needed */}
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};
ReplyModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired, // Assuming it's a function
};

export default ReplyModal;
