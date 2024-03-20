"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import userTeamData from "@/context/userTeamData";
import { getTeamData } from "@/axios/api/getTeamData";
import { getFromLocalStorage } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import UploadFile from "@/components/modals/uploadmodal";
import { Button } from "@/components/ui/button";
import { DataCard } from "@/components/dashboard/dataCard";
import useTeamInvite from "@/context/useInviteModal";
import InviteModal from "@/components/modals/inviteModal";
import useTeamModal from "@/context/useTeamModal";
import TeamModal from "@/components/modals/teamModal";
import LoadingData from "@/components/dashboard/loadingData";
import useDeleteModal from "@/context/useDeleteModal";
import DeleteModal from "@/components/modals/deleteAlertModal";
import useTeamParam from "@/context/useTeamParams";

function Data({ params }) {
  const router = useRouter();

  const { teamData, setTeamData } = userTeamData();
  const { showInviteModal } = useTeamInvite();
  const { showTeamModal } = useTeamModal();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = getFromLocalStorage("token") || "";
  const { deleteModal } = useDeleteModal();
  const {setTeamParam}=useTeamParam();
  setTeamParam(params)

  useEffect(() => {
    async function getData() {
      try {
        const response = await getTeamData(
          params.slug,
          setTeamData,
          setLoading
        );
        if (response) {
          toast({
            title: "success",
            message: "teams data ",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (token) {
      console.log("getting");
      getData();
    }
  }, []);
  const handleModal = () => {
    setShowUploadModal(true);
  };
  return (
    <main>
      <div className="flex mt-[60px]">
        <div className="px-10 py-10 w-full ml-[16vw] min-h-[92vh] ">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-[35px] font-semibold">Your files</h1>
            <Button onClick={handleModal}>Upload files</Button>
          </div>
          {showUploadModal && (
            <UploadFile
              showModal={showUploadModal}
              setShowModal={setShowUploadModal}
              purpose={"teamUpload"}
              params={params.slug}
            />
          )}
          {loading && <LoadingData />}
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {!loading &&
              teamData?.length > 0 &&
              teamData.map((data) => {
                return <DataCard file={data} type={"teams"} />;
              })}
          </div>
          {!loading && !teamData.length && (
            <div className="flex justify-center items-center mt-5">
              <img
                src="/Images/empty.png"
                alt=""
                className="max-w-[300px] mx-auto "
              />
            </div>
          )}
        </div>
        {showTeamModal && <TeamModal />}
        {showInviteModal && <InviteModal />}
        {deleteModal && <DeleteModal />}
      </div>
    </main>
  );
}
export default Data;
