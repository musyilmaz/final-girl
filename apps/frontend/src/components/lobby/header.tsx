import { ToggleTheme } from "../common/toggleTheme";

export const Header = () => {
  return (
    <header className="w-full h-16 border-b bg-background text-foreground">
      <div className="container h-full flex flex-row justify-between items-center">
        <img src="./assets/logo.png" className="h-10" />
        <ToggleTheme />
      </div>
    </header>
  );
};
