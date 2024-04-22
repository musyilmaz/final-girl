import { createLazyFileRoute } from "@tanstack/react-router";
import { Theme, useThemeStore } from "@/store/theme.store";
import { Button, DynamicIcon } from "@ui/components";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { setCurrentTheme, isLightTheme } = useThemeStore();

  return (
    <div className="flex flex-col w-full h-full">
      <header className="w-full h-16 bg-background text-foreground border-b px-4 flex flex-row justify-between items-center">
        <img src="./assets/logo.png" className="h-10" />
        <div className="flex flex-row">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentTheme(isLightTheme() ? Theme.dark : Theme.light)}
          >
            <DynamicIcon
              iconName="SunIcon"
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <DynamicIcon
              iconName="MoonIcon"
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>
      <div className="flex-grow bg-background text-foreground grid items-center justify-center">
        <Button>test</Button>
      </div>
    </div>
  );
}
