import { Modal} from "@mantine/core";

import PropTypes from "prop-types";
import { closeIcon, uploadIcon } from "../../assets/svg";
import { Cross } from "../../assets/png";
import { BsPlusLg } from "react-icons/bs";
import CustomButton from "../button";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from 'react-dropzone';
import { toast } from "react-toastify";
import Loader from "../loader/loader";
import * as yup from "yup";
import axiosClient from "../../api/axios";
import { getAllCollectionDataAction } from "../../redux/actions/genericAction";

const VideoMetaModal = ({ isOpen, onClose, mediaFile, editingItem = {} }) => {
  // console.log(editingItem, "editingItem")
  const genericSelector = useSelector((state) => state.genericSlice);
  const dispatch = useDispatch();

  const [miniUrl, setMiniUrl] = useState()
  const [loading, setLoading] = useState(false)
  const [coverImage, setCoverImage] = useState(null)
  const [subtitle, setSubtitle] = useState(null)
  const [coverImageUrl, setCoverImageUrl] = useState(null)
  const [input, setInput] = useState({
    video_name: editingItem?.video_name || "",
    desc: "",
    placement: 1,
    keyword: editingItem?.keyword || "",
    collection: 1,
    type: editingItem?.type || "",
  });

  useEffect(()=>{
    if(editingItem?.video_name){

      let collection = 1;
      switch (editingItem?.type) {
        case "video":
          collection = 1;
          break;
        case "interview":
          collection = 4;
          break;
        case "trailer":
          collection = 6;
          break;
          
        case "bts":
          collection = 3;
          break;
      
        default:
          collection = 2;
          break;
      }
      setInput({
        video_name: editingItem?.video_name || "",
        desc: "",
        placement: 1,
        keyword: editingItem?.keyword || "",
        collection: 1 || "",
        placement: collection || "",
        type: editingItem?.type || "",
      });

      setCoverImageUrl(editingItem?.coverImage);
    }
  }, [editingItem])

  useEffect(()=>{
    return ()=>{
      setInput({
        video_name: "",
        desc: "",
        placement: 1,
        keyword: "",
        collection: 1,
        type: ""
      });
      setCoverImage(null);
      setCoverImageUrl(null);
      setSubtitle(null);
    }
  }, [])

  useEffect(()=>{
    if(coverImage != null){
      const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          console.log(binaryStr, "mediaFile")
          setCoverImageUrl(binaryStr)
      }
      reader.readAsDataURL(coverImage)
    }
  }, [coverImage])

  // for cover image
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    // check type
    if(!(file.type.includes("image"))){
      toast.error("Media type not allowed")
      return ;
    }

    setCoverImage(file);

  }, []);

  const {
    getRootProps: getCoverImageRootProps,
  } = useDropzone({
    onDrop,
    multiple: false,
  });

  // for subtitle
  const onDropSubtitle = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    console.log(file)
    // check type
    if(!( file.path.includes("vtt") || file.path.includes("srt"))){
      toast.error("Media type not allowed")
      return ;
    }

    console.log(file)

    setSubtitle(file);

  }, []);

  const {
    getRootProps: getSubtitleRootProps,
  } = useDropzone({
    onDrop: onDropSubtitle,
    multiple: false,
  });

  const submitForEdit = async ()=>{

    setLoading(true);
    try {
      const validationSchema = yup.object({
        video_name: yup.string().trim().required("video name is required"),
        keyword: yup.string().trim().required("keyword is required"),
        placement: yup.string().trim().required("placement is required"),
        collection: yup.string().trim().required("collection is required"),
      });
      await validationSchema.validate(input);

      // if(inputImage == null){
      //     (new Swal('Oops...', "Thumbnail required", 'error'));
      //     return ;
      // }

      
      // process
      const fd = new FormData();
      if (coverImage != null) {
        fd.append("coverImage", coverImage);
      }
      fd.append("id", editingItem?.id);
      fd.append("video_name", input.video_name);
      fd.append("keyword", input.keyword);
      // fd.append("placementId", input.placement);
      // fd.append("collectionId", input.collection);
      // fd.append("video", mediaFile);
      fd.append("type", editingItem?.type);

      if (subtitle != null) {
        fd.append("subtitle", subtitle);
      }

      await axiosClient().post("admin/content/modify", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        "Updated Successfully, reflecting soon"
      );

      // dispatch for get new collection
      dispatch(getAllCollectionDataAction());

      setTimeout(() => {
        dispatch(getAllCollectionDataAction());
      }, 2000);

      onClose();
    } catch (error) {
      // new Swal("Oops...", error.message, "error");
      toast.error(error.message)
    }
    setLoading(false);

  }

  const submitNow = async ()=>{

    if(editingItem?.video_name){
      submitForEdit();
      return ;
    }
    setLoading(true);
    try {
      const validationSchema = yup.object({
        video_name: yup.string().trim().required("video name is required"),
        keyword: yup.string().trim().required("keyword is required"),
        placement: yup.string().trim().required("placement is required"),
        collection: yup.string().trim().required("collection is required"),
      });
      await validationSchema.validate(input);

      // if(inputImage == null){
      //     (new Swal('Oops...', "Thumbnail required", 'error'));
      //     return ;
      // }

      if (coverImage == null) {
        toast.error("Thumbnail is required");
        setLoading(false);
        return;
      }

      // process
      const fd = new FormData();
      fd.append("video_name", input.video_name);
      fd.append("keyword", input.keyword);
      fd.append("placementId", input.placement);
      fd.append("collectionId", input.collection);
      fd.append("video", mediaFile);
      fd.append("coverImage", coverImage);

      if (subtitle != null) {
        fd.append("subtitle", subtitle);
      }

      // if(inputVideoFourK != null){
      //   fd.append("videoFourK", inputVideoFourK);
      // }

      await axiosClient().post("admin/content/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        "Created Successfully, currently processing so it might take some minute depending on size, would be playable soon"
      );

      // dispatch for get new collection
      dispatch(getAllCollectionDataAction());

      setTimeout(() => {
        dispatch(getAllCollectionDataAction());
      }, 2000);

      onClose();
    } catch (error) {
      // new Swal("Oops...", error.message, "error");
      toast.error(error.message)
    }
    setLoading(false);
  }

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
          {loading && <Loader />}
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
                  value={input.video_name}
                  onChange={e=> setInput({...input, video_name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#989898] text-base">
                  Keyword (required)
                </label>
                <div>
                  <textarea
                    placeholder=" "
                    className="resize-none textarea-class"
                    style={{ height: 100 }}
                    value={input.keyword}
                    onChange={e=> setInput({...input, keyword: e.target.value})}
                  />
                </div>
              </div>
              <div className="pb-4 space-y-2">
                <label className="text-[#989898] text-base">
                  Category (required)
                </label>
                {/* <input
                  className="focus:outline-none w-full focus:border-slate-500 focus:ring-slate-500 text-[#8E8C8C] px-4 auth-input h-[73px]"
                  type="text"
                  placeholder=""
                /> */}
                <br />
                
                <select
                  value={input.placement}
                  disabled={(editingItem?.id != undefined)}
                  onChange={(v) =>
                    setValue({ ...input, placement: v.target.value })
                  }
                  // className=" rounded-2xl bg-[#E93C24] text-white p-3 my-4 w-1/2"
                  className="textarea-class"
                  style={{ height: 40 }}
                >
                  <option disabled>Placement</option>
                  {genericSelector.placements.map((item) => (
                    <option value={item.id}>{item.placement}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-5/12 space-y-4">
              <div className="p-4 welcome-admin-dsh">
                <div className="space-y-4 ">
                  <h5 className="">Upload Thumbnail</h5>
                  <div {...getCoverImageRootProps()} className="border border-dashed border-[#FFFFFF4D] bg-[#FF8F7414] rounded-sm ">
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
                        Supported formats:JPEG,PNG,GIF
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="w-full ">
                      <div className="flex items-start justify-between ">
                        <div className="flex items-center gap-x-4">
                          {( (coverImageUrl) && (<img style={{ height: 70, width: 70 }} src={coverImageUrl} alt="" />))}
                          <div>
                            <h5 className="">{input.video_name}</h5>
                            {( !(editingItem?.video_name) && (<p className="">{((mediaFile?.size || 0) / 1024 / 1024).toFixed(3)} mb</p>))}
                          </div>
                        </div>

                        <img src={closeIcon} alt="" onClick={()=> {
                          setCoverImage(null);
                          setCoverImageUrl(null);
                        }} />
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
                  <div {...getSubtitleRootProps()} className="border border-dashed border-[#FFFFFF4D] bg-[#FF8F7414] rounded-sm pb-4">
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
                        Supported formats:VTT,SRT
                      </p>
                    </div>
                  </div>

                  {
                    ((subtitle) && 
                      <div className="container ">
                        <div className="flex items-center justify-between p-2 border rounded-sm ">
                          <p>{subtitle.path}</p>
                          <img onClick={()=> setSubtitle(null)} src={closeIcon} alt="" />
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[#FFFFFF38] border-t p-4">
            <div className="flex items-end justify-end">
              <div className="flex items-center gap-x-2 bg-[#F52F00] py-4 px-6 rounded-full text-sm">
                <BsPlusLg />
                <CustomButton onClick={()=> submitNow()} title={(editingItem?.video_name) ? "Edit Video" : "Upload video"} />
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
