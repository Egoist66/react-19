import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";


type CounterStore = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

const AppMiddleWare = (f: StateCreator<CounterStore>) =>
  devtools(persist(f, { name: "counter" }));

export const useCounterStore = create<CounterStore>()(
  AppMiddleWare((set) => ({
    bears: 0,

    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
  }))
);
