"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import useDeleteModal from "@/context/useDeleteModal";
import { useRouter } from 'next/router'
import useTeamData from "@/context/useTeamData";
import useData from "@/context/useData";
import { deleteUserFile } from "@/axios/api/deleteUserFile";
import { deleteTeamsFile } from "@/axios/api/deleteTeamFile";
import { toast } from "../ui/use-toast";
import useTeamParam from "@/context/useTeamParams";
function DeleteModal() {
  const [loading,setLoading]=useState(false)
  const {setTeamData}=useTeamData()
  const {userData,setUserData}=useData();
  const { deleteModal, setDeletemodal, deleteOf, setDeleteOf, deleteId,setDeleteId } = useDeleteModal();
  const {teamParam, setTeamParam}=useTeamParam()


  async function handleDelete(){
    setLoading(true);
    try{
      if(deleteOf=="personal"){
        console.log(deleteId);
        const response=await deleteUserFile(deleteId,setUserData,userData);
        if(response){
          setLoading(false);
          setDeleteId(null)
          setDeletemodal(false);
          toast({
            title:"success",
            description:"file successfully deleted"
          })
        }else{
          setLoading(false);
          setDeleteId(null)
          setDeletemodal(false);
          toast({
            title:"error",
            description:"file can't deleted"
          })
        }
      }else{
        console.log("yes");
        if(teamParam){
          console.log("yes");
          console.log("teamId",teamParam.slug,"fileid",deleteId);
          const response=await deleteTeamsFile(deleteId,teamParam.slug,setTeamData);
          if(response){
            setLoading(false);
            setDeleteId(null)
            setDeletemodal(false);
            toast({
              title:"success",
              description:"file successfully deleted"
            })
          }else{
            setLoading(false);
            setDeleteId(null)
            setDeletemodal(false);
            // console.log("slug doesn't exist");
            toast({
              title:"error",
              description:"file can't deleted"
            })
          }
        }else console.log("error");
      }
    }catch(e){
      console.log("error");
      setLoading(false);
      setDeleteId(null)
      setDeletemodal(false);
      toast({
        title:"error",
        description:"file can't deleted"
      })
    }
  }
  return (
    <AnimatePresence>
      {deleteModal && (
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
          onClick={() => setDeletemodal(false)} // Close modal when clicking outside
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            style={{
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            }}
            className="w-[500px] bg-white px-5 py-5 rounded-md border flex flex-col gap-y-5"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-between">
              <h1 className="text-[30px] font-semibold">
                Are you absolutely sure?
              </h1>
              <X onClick={() => setDeletemodal(false)} />
            </div>
            <h1>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </h1>
            <div className="flex gap-x-3 justify-end">
              <Button
                className="w-[150px]"
                onClick={() => {
                  setDeletemodal(false);
                  setDeleteOf(null);
                }}
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                disabled={ loading}
              >
                {!loading ? "continue" : "deleting.."}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default DeleteModal;
