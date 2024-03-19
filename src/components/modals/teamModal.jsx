"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import useTeamModal from "@/context/useTeamModal";
import { JoinTeam } from "@/axios/api/joinTeam";
import useTeam from "@/context/useTeam";
import { toast } from "../ui/use-toast";
import { CreateTeam } from "@/axios/api/createTeam";
function TeamModal() {
  const { showTeamModal, setShowTeamModal, purposeModal } = useTeamModal();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const {setUserTeam}=useTeam()
  async function handleSubmit(e) {
    e.preventDefault();
    console.log();
    setLoading(true);
    try{
      if(purposeModal=="join"){
        const response=await JoinTeam(title,setUserTeam);
        if(response){
          setLoading(false);
          setShowTeamModal(false);
          toast({
            title:"success",
            description:"team is joined"
          })
        }else{
          setLoading(false);
          setShowTeamModal(false);
          toast({
            title:"error"
          })
        }
      }else {
        const response=await CreateTeam(title,setUserTeam);
        if(response){
          setLoading(false);
          setShowTeamModal(false);
          toast({
            title:"success",
            description:"team is created"
          })
        }else{
          setLoading(false);
          setShowTeamModal(false);
          toast({
            title:"error"
          })
        }
      }

    }catch(e){
      console.log(e);
      setLoading(false);
      setShowTeamModal(false);
      toast({
        title:"error"
      })
    }

  }

  return (
    <AnimatePresence>
      {showTeamModal && (
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
          onClick={() => setShowTeamModal(false)} // Close modal when clicking outside
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
              <h1 className="text-[30px] font-semibold">{purposeModal=="join" ?("Join Team With code"):("Create Team with name")}</h1>
              <X onClick={() => setShowTeamModal(false)} />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 ">
              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="title">{purposeModal=="join" ?("Team code"):("Team name")}</Label>
                <Input
                  id="title"
                  type="name"
                  name=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {
                  title=="" && <p className="text-red-500 text-xs italic">required!</p>
                }
              </div>
              <Button
                type="submit"
                disabled={!title || loading}
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
export default TeamModal;
