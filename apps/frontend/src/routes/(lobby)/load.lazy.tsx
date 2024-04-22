import { LobbyWrapper } from "@/components/lobby/lobbyWrapper";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(lobby)/load")({
  component: () => <LobbyWrapper content={<div>Load Session</div>} />,
});
