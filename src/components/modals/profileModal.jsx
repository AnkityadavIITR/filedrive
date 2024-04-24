import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getFromLocalStorage } from "@/lib/utils";

const ProfileModal = () => {
    const saved=getFromLocalStorage("isUserSaved")||false;
  return (
    <div>
      <AnimatePresence>
        {!saved && (
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
            // onClick={() => setDeletemodal(false)} // Close modal when clicking outside
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              style={{
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
              }}
              className="w-[300px] bg-white px-5 py-5 rounded-md border flex flex-col gap-y-5"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="flex justify-between">
              </div>
              <h1 className="mx-auto">
                Your account is being created
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileModal;
