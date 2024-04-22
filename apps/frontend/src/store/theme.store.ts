import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export enum Theme {
  light = "light",
  dark = "dark",
}

type State = {
  theme: Theme;
};

type Action = {
  setCurrentTheme: (theme: Theme) => void;
  isLightTheme: () => boolean;
  isTheme: (theme: Theme) => void;
  resetTheme: () => void;
};

export type Store = State & Action;

const initialState: State = {
  theme: Theme.dark,
};

export const useThemeStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setCurrentTheme: (theme: Theme) => set({ theme: theme }),
        isLightTheme: () => get().theme === Theme.light,
        isTheme: (theme: Theme) => get().theme === theme,
        resetTheme: () => set(initialState),
      }),
      { name: "theme", storage: createJSONStorage(() => localStorage) },
    ),
  ),
);
