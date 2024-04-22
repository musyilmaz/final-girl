import { useThemeStore } from "@/store/theme/theme.store";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  const { isLightTheme } = useThemeStore();

  return (
    <div className={`w-screen h-screen ${isLightTheme() ? "light" : "dark"}`}>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
