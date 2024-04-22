import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type SessionId = string & { __brand: "SessionId" };

export enum Status {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum HorrorType {
  BASIC = "BASIC",
  EXTREME = "EXTREME",
}

export enum FinalGirl {
  TEST = "test",
}

export enum FeatureFilm {
  CAMP_HAPPY_TRAILS = "Camp Happy Trails",
}

export enum Villain {
  HANS = "Hans",
}

export enum ResolutionMethod {
  METHOD_1,
  METHOD_2,
  METHOD_3,
}

export type Session = {
  id: SessionId;
  status: Status;
  completedAt: Date | null;
  horrorType: HorrorType;
  finalGirl: FinalGirl;
  featureFilm: FeatureFilm;
  villain: Villain;
  resolutionMethod: ResolutionMethod;
};

type State = {
  sessions: Session[];
};

type Action = {
  addSession: (session: Session) => void;
  getSessions: () => Session[];
};

export type Store = State & Action;

const initialState: State = { sessions: [] };

export const useSessionStore = create<Store>()(
  persist(
    (set, get) => ({
      ...initialState,
      addSession: (session: Session) =>
        set((state) => ({ ...state, sessions: [...state.sessions, session] })),
      getSessions: () => get().sessions,
    }),
    {
      name: "sessions",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
