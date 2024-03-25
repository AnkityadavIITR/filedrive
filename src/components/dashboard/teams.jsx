"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { ChevronsUpDown, UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import useTeam from "@/context/useTeam";
import useTeamModal from "@/context/useTeamModal";
import useTeamInvite from "@/context/useInviteModal";

function TeamPopUp() {
  const router = useRouter();
  const { userTeam } = useTeam();
  const { setShowTeamModal, setPurposeModal} = useTeamModal();
  const {setInviteId,setShowInviteModal}=useTeamInvite();
  const [currentTeam,setCurrentTeam]=useState(null)
  const handleSelect = (id) => {
    router.replace(`/dashboard/teams/${id}`);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClick=(team)=>{
    console.log(team);
    setShowInviteModal(true);
    setInviteId(team.shortId);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border p-2 w-[150px] rounded-md">
          <div className="flex gap-4">
            <h1>{!currentTeam? "Your teams" : currentTeam }</h1>
            <ChevronsUpDown strokeWidth={1.25} size={20} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My teams</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {userTeam?.map((team) => {
            return (
              <div className="flex justify-between mb-1 gap-2" key={team._id}>
                <DropdownMenuItem
                  key={team._id}
                  onClick={() => {
                    handleSelect(team._id)
                    setCurrentTeam(team.name)
                  }}
                >
                  {team.name}
                </DropdownMenuItem>
                <DropdownMenuItem className="border rounded-md" onClick={()=>handleClick(team)}>
                  <UserPlus size={20} strokeWidth={1.25} />
                </DropdownMenuItem>
              </div>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setPurposeModal("join");
              setShowTeamModal(true);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>{" "}
            Join team
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setPurposeModal("create");
              setShowTeamModal(true);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pen"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>{" "}
            Create team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default TeamPopUp;
