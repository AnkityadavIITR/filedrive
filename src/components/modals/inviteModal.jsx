"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import useTeam from "@/context/useTeam";
import useTeamInvite from "@/context/useInviteModal";
function InviteModal() {
  const { showInviteModal, setShowInviteModal, inviteId} =useTeamInvite();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserTeam } = useTeam();
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteId)
      .then(() => setCopied(true))
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <AnimatePresence>
      {showInviteModal && (
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
          onClick={() => setShowInviteModal(false)} // Close modal when clicking outside
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            style={{
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            }}
            className="min-w-[30%] bg-white px-5 py-5 "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-between">
              <h1 className="text-[30px] font-semibold">
                Share code to invite
              </h1>
              <X onClick={() => setShowInviteModal(false)} />
            </div>
            <div className="flex flex-col gap-y-5 ">
              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="code">Invitation code</Label>
                <Input id="code" type="text" value={inviteId} readOnly />
              </div>
              <Button onClick={copyToClipboard} className="w-[150px]">
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default InviteModal;
