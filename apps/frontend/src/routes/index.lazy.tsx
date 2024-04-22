import { createLazyFileRoute } from "@tanstack/react-router";
import { LobbyWrapper } from "@/components/lobby/lobbyWrapper";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <LobbyWrapper content={<div>This is index page content</div>} />;
}
