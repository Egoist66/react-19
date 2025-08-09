import type { FC } from "react";
import { useCounterStore } from "../../../store/counter.store";
import { mapRender } from "../../../utils/map-render";

export const Counter: FC = () => {
  const { bears, increasePopulation, removeAllBears } = useCounterStore();

  console.log("render", Counter.name);

  const elems = mapRender([1, 2], {
    component: "p",
    keyGenerator(_, index) {
      return `p-${index}`;
    },
    transform(item, index) {
      return `p-${index}: ${item}`;
    },
  });

  return (
    <>
      <button
        disabled={bears === 0}
        className={`bg-red-500 ${
          bears === 0 && "opacity-50 cursor-not-allowed"
        } self-baseline p-2 rounded-md`}
        onClick={removeAllBears}
      >
        Remove all bears
      </button>
      <button
        className="bg-green-500 self-baseline p-2  rounded-md"
        onClick={increasePopulation}
      >
        Add a bear
      </button>

      {bears}

    </>
  );
};
