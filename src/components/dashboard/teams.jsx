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
import { ChevronDown } from "lucide-react";
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

function TeamPopUp() {
  const router = useRouter();
  const { userTeam } = useTeam();
  const { setShowTeamModal, setPurposeModal } = useTeamModal();
  const handleSelect = (id) => {
    router.replace(`/dashboard/teams/${id}`);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border p-2 w-[150px] rounded-md">
          <div className="flex gap-4">
            <h1>Your teams</h1>
            <ChevronDown strokeWidth={1.25} size={"20px"} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My teams</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {userTeam?.map((team) => {
            return (
              <DropdownMenuItem
                key={team._id}
                onClick={() => handleSelect(team._id)}
              >
                {team.name}
              </DropdownMenuItem>
            );
          })}

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
          <DropdownMenuItem
            onClick={() => {
              setPurposeModal("create");
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
