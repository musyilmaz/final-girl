import { Header } from "./header";

export type LobbyWrapperProps = {
  content: JSX.Element;
};

export const LobbyWrapper = ({ content }: LobbyWrapperProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-background">
      <Header />
      <div className="w-full flex-grow bg-background text-foreground grid items-center justify-center">{content}</div>
    </div>
  );
};
