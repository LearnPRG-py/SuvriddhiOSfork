import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SubjectType } from "../types/subject";
import type { ActiveItem, Topic } from "../types/learningitems";
import { getTopicProgress } from "../utils/getTopicProgress";

interface Store {
    subject: SubjectType;
    setSubject: (subject: SubjectType) => void;

    lastActivity: ActiveItem | null;
    setLastActivity: (item: ActiveItem) => void;
    completed: Record<string, boolean>;

    markItemCompleted: (itemId: string) => void;
    getTopicProgress: (topics: Topic[], topicId: string) => number;
    isItemCompleted: (itemId: string) => boolean;

    drafts: Record<string, string>;
    saveDraftForExercise: (itemId: string, code: string) => void;
    getDraftForExercise: (itemId: string) => string | undefined;
    _lastActivityMap: Partial<Record<SubjectType, ActiveItem | null>>;
}

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
            subject: "Physics",
            _lastActivityMap: {},
            lastActivity: null,
            setSubject: (subject: SubjectType) =>
                set((state) => ({
                    subject,
                    lastActivity: state._lastActivityMap[subject] ?? null,
                })),
            setLastActivity: (item: ActiveItem) =>
                set((state) => ({
                    lastActivity: item,
                    _lastActivityMap: {
                        ...state._lastActivityMap,
                        [state.subject]: item,
                    },
                })),
            completed: {},
            markItemCompleted: (itemId) =>
                set((state) => ({
                    completed: { ...state.completed, [itemId]: true },
                })),
            getTopicProgress: (topics: Topic[], topicId: string) => {
                const { completed } = get();
                return getTopicProgress(topicId, topics, completed);
            },
            isItemCompleted: (itemId) => !!get().completed[itemId],
            drafts: {},
            saveDraftForExercise: (itemId, code) =>
                set((state) => ({
                    drafts: { ...state.drafts, [itemId]: code },
                })),
            getDraftForExercise: (itemId) => get().drafts[itemId],
        }),
        {
            name: "subject",
            partialize: (state) => ({
                subject: state.subject,
                _lastActivityMap: state._lastActivityMap,
                completed: state.completed,
                drafts: state.drafts,
            }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.lastActivity =
                        state._lastActivityMap[state.subject] ?? null;
                    console.log(state.lastActivity);
                }
            },
        },
    ),
);
