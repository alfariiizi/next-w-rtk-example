"use client";

import { increment, decrement, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const counter = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="text-3xl">{counter}</div>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="bg-slate-300 text-black p-1 rounded">
          +
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-slate-300 text-black p-1 rounded">
          Reset
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-slate-300 text-black p-1 rounded">
          -
        </button>
      </div>
    </main>
  );
}
