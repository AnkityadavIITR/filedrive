"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { uploadFile } from "@/services/uploadFile";
import { uploadUserData } from "@/axios/api/upload";
import useData from "@/context/useData";
import { toast } from "../ui/use-toast";
import { uploadDataOnTeams } from "@/axios/api/uploadOnTeam";
import useTeamData from "@/context/useTeamData";

function UploadFile({ showModal, setShowModal, purpose, params }) {
  const [fileTitle, setFileTitle] = useState("");
  const {setUserData}=useData();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileType,setFileType]=useState()
  const {setTeamData}=useTeamData();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("Title:", fileTitle);
    console.log("Selected file:", selectedFile);
    setFileTitle(selectedFile.type);
    if (purpose == "personalUpload") {
      const res = await uploadFile(selectedFile);
      console.log("res",res)
      if(res!=""){
        const response=await uploadUserData(fileTitle,res,setUserData,setLoading,setShowModal,fileType);
        if(response){
          console.log("uploaded",response);
        }
      }else{
        toast({
          title:"error",
          description:"file couldn't upload"
        })
      }
    } else {
      const res = await uploadFile(selectedFile);
      console.log("res",res)
      if(res!=""){
        const response=await uploadDataOnTeams(fileTitle,res,setTeamData,setLoading,setShowModal,fileType,params);
        if(response){
          console.log("uploaded",response);
        }
      }else{
        toast({
          title:"error",
          description:"file couldn't upload"
        })
      }
    }
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={() => setShowModal(false)} // Close modal when clicking outside
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            style={{
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            }}
            className="min-w-[30%] bg-white px-5 py-5"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-between">
              <h1 className="text-[30px] font-semibold">Upload your file</h1>
              <X onClick={() => setShowModal(false)} />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="title">File title</Label>
                <Input
                  id="title"
                  type="name"
                  name="fileTitle"
                  value={fileTitle}
                  onChange={(e) => setFileTitle(e.target.value)}
                />
                {fileTitle == "" && (
                  <p className="text-red-500 text-xs italic">required!</p>
                )}
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="picture">upload File</Label>
                <Input
                  id="picture"
                  type="file"
                  name="selectedFile"
                  onChange={handleFileChange}
                />
                {fileTitle == "" && (
                  <p className="text-red-500 text-xs italic">required!</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={!fileTitle || !selectedFile || loading}
              >
                {loading ? "Uploading..." : "Submit"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default UploadFile;
