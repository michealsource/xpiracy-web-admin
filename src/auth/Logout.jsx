import CustomButton from "../component/button";

const Logout = () => {
  return (
    <div className="h-screen  ">
      <div className="comment-table-container w-[50%]  flex flex-col justify-center items-left my-20 mx-auto">
        <div className="px-8 py-5">
          <h4 className="text-[27px] font-medium ">Logout</h4>
          <p className="border border-[#FFFFFF1E]"></p>
          <p className="py-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              sint harum placeat ipsa, vero velit. Dolorum perspiciatis
              provident excepturi incidunt?
            </p>
          <div className="space-y-6">
           
            <div>
              <CustomButton
                title="Take me back"
                color="transparent"
                width="100%"
                padding="24.293px 0px 24.707px 0px"
                borderRadius="45.221px"
                border="1px solid #fff"
              />
            </div>
            <div className="pb-4">
              <CustomButton
                title="Logout"
                color="#F52F00"
                width="100%"
                padding="24.293px 0px 24.707px 0px"
                borderRadius="45.221px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
