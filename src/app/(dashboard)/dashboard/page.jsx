"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import useAuth from "@/context/useAuth";
import { getUserData } from "@/axios/api/getUserData";
import { useToast } from "@/components/ui/use-toast";
import { getFromLocalStorage, removeFromLocalStorage } from "@/lib/utils";
import LoadingData from "@/components/dashboard/loadingData";
import useData from "@/context/useData";
import { Button } from "@/components/ui/button";
import UploadFile from "@/components/modals/uploadmodal";
import { DataCard } from "@/components/dashboard/dataCard";
import useTeamModal from "@/context/useTeamModal";
import TeamModal from "@/components/modals/teamModal";
import useTeamInvite from "@/context/useInviteModal";
import InviteModal from "@/components/modals/inviteModal";
import useDeleteModal from "@/context/useDeleteModal";
import DeleteModal from "@/components/modals/deleteAlertModal";
import { SaveUser } from "@/axios/api/saveUser";
import { setLocalStorage } from "@/lib/utils";
import ProfileModal from "@/components/modals/profileModal";


import useRegister from "@/context/useRegister";

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { userData, setUserData } = useData();
  const { showTeamModal } = useTeamModal();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { showInviteModal } = useTeamInvite();
  const { deleteModal } = useDeleteModal();
  const { userName, setUserName } = useRegister();

  const [saved, setSaved] = useState(
    () => getFromLocalStorage("isUserSaved") || false
  );
  const { toast } = useToast();

  useEffect(() => {
    console.log("check");
    if (
      currentUser &&
      currentUser?.metadata?.creationTime ===
        currentUser?.metadata?.lastSignInTime &&
      !saved
    ) {
      console.log("newUser", currentUser);
      const userRegister = JSON.parse(localStorage.getItem("userRegistration"));
      console.log(userRegister);
      const userObj = {
        name:
          currentUser?.displayName !== null
            ? currentUser?.displayName
            : userRegister.name,
        email: currentUser?.email,
        photo: currentUser?.photoURL,
        emailVerified: currentUser?.emailVerified,
      };
      async function SaveUserDb() {
        try {
          const { data } = await SaveUser(userObj);
          console.log(data);
          if (data?.success) {
            setLocalStorage("isUserSaved", true);
            setSaved(true);
            removeFromLocalStorage("userRegistration");
          }
        } catch (e) {
          console.log(e);
        }
      }
      SaveUserDb();
    }
  }, [currentUser, saved]);

  useEffect(() => {
    async function getUserDetail() {
      try {
        const response = await getUserData(setUserData, setLoading);
        console.log(userData);
        if (!response) {
          toast({
            title: "error",
            message: "can't get detail",
          });
        }
      } catch (e) {
        toast({
          title: "error",
          message: "internal error",
        });
      }
    }
    console.log("check", saved);

    if (currentUser && userData == null && saved) {
      getUserDetail();
    }
  }, [setUserData, userData, saved, currentUser, toast]);

  const dummyArray = [
    { title: "Example 1", url: "https://www.example1.com" },
    { title: "Example 2", url: "https://www.example2.com" },
    { title: "Example 3", url: "https://www.example3.com" },
    { title: "Example 4", url: "https://www.example4.com" },
    { title: "Example 5", url: "https://www.example5.com" },
  ];

  const handleModal = () => {
    setShowUploadModal(true);
  };
  return (
    <main>
      <div className="flex mt-[60px]">
        <div className="px-10 py-10 w-full md:ml-[16vw] min-h-[92vh] ">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-[35px] font-semibold">Your files</h1>
            <Button onClick={handleModal}>Upload files</Button>
          </div>
          {showUploadModal && (
            <UploadFile
              showModal={showUploadModal}
              setShowModal={setShowUploadModal}
              purpose={"personalUpload"}
            />
          )}
          {loading && <LoadingData />}
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {!loading &&
              userData?.length > 0 &&
              userData.map((data) => {
                return (
                  <DataCard file={data} type={"personal"} key={userData._id} />
                );
              })}
          </div>
          {!loading && !userData?.length && (
            <div className="flex justify-center items-center mt-5">
              <Image
                src="/Images/empty.png"
                alt=""
                className="max-w-[300px] mx-auto"
                width={300}
                height={300}
              ></Image>
            </div>
          )}
        </div>
        {showTeamModal && <TeamModal />}
        {showInviteModal && <InviteModal />}
        {deleteModal && <DeleteModal />}
        {/* {!saved &&
          setTimeout(() => {
            return <ProfileModal />;
          }, 2000)} */}
      </div>
    </main>
  );
};

export default DashboardPage;
