import { createLazyFileRoute } from "@tanstack/react-router";
import { LobbyWrapper } from "@/components/lobby/lobbyWrapper";
import { CreateNewSession } from "@/components/lobby/createNewSession";

export const Route = createLazyFileRoute("/(lobby)/")({
  component: () => <LobbyWrapper content={<CreateNewSession />} />,
});
