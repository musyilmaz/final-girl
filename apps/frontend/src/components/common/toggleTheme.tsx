import { Theme, useThemeStore } from "@/store/theme/theme.store";
import { Button, DynamicIcon } from "@ui/components";

export const ToggleTheme = () => {
  const { setCurrentTheme, isLightTheme } = useThemeStore();

  const toggleTheme = () => setCurrentTheme(isLightTheme() ? Theme.dark : Theme.light);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
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
  );
};
