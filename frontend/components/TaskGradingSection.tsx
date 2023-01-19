"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState, useTransition } from "react";
import LoadingSpinner from "./Icons/LoadingSpinner";
import Input from "./Input";

type score = {
  grade?: string;
  comment?: string;
};

export default function TaskGradingSection({ id }: { id: string | number }) {
  const [score, setScore] = useState<score>();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  const updateGrade: ChangeEventHandler<HTMLInputElement> = (e) => {
    setScore((d) => ({ ...d, grade: e.target.value }));
  };

  const updateComment: ChangeEventHandler<HTMLInputElement> = (e) => {
    setScore((d) => ({ ...d, comment: e.target.value }));
  };

  const submitGrade = async () => {
    setIsFetching(true);
    // Mutate external data source
    // await fetch(`https://api.example.com/todo/${todo.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({ completed: !todo.completed }),
    // });
    await new Promise((resolve) => {
      setTimeout(() => {
        let final = id;
        resolve({ successfull: true });
      }, 2000);
    });
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.replace("/message");
    });
  };

  return (
    <div>
      <div>
        <div className="flex items-center mb-2 relative">
          <input
            type="radio"
            id="excellent"
            name="grade"
            value="excellent"
            checked={score?.grade === "excellent"}
            onChange={updateGrade}
            className="peer w-5 h-5"
          />
          <label className="ml-2" htmlFor="excellent">
            Excellent
          </label>
          <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
            <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
          </div>
        </div>
        <div className="flex items-center mb-2 relative">
          <input
            type="radio"
            id="good"
            name="grade"
            value="good"
            checked={score?.grade === "good"}
            onChange={updateGrade}
            className="peer w-5 h-5"
          />
          <label className="ml-2" htmlFor="good">
            Good
          </label>
          <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
            <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
          </div>
        </div>
        <div className="flex items-center mb-2 relative">
          <input
            type="radio"
            id="fair"
            name="grade"
            value="fair"
            checked={score?.grade === "fair"}
            onChange={updateGrade}
            className="peer w-5 h-5"
          />
          <label className="ml-2" htmlFor="fair">
            Fair
          </label>
          <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
            <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
          </div>
        </div>
        <div className="flex items-center mb-2 relative">
          <input
            type="radio"
            id="poor"
            name="grade"
            value="poor"
            checked={score?.grade === "poor"}
            onChange={updateGrade}
            className="peer w-5 h-5"
          />
          <label className="ml-2" htmlFor="poor">
            Poor
          </label>
          <div className="absolute hidden w-5 h-5 border-[2px] border-black bg-white peer-checked:block top-[2px] left-[0.2px] rounded-[50%]">
            <div className="w-[12px] h-[12px] rounded-[50%] relative top-[2px] left-[1.7px]  bg-black"></div>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-3 mt-8">
        <Input
          type="text"
          value={score?.comment}
          className="flex-grow w-full lg:max-w-sm"
          placeholder="Drop a comment"
          onChange={updateComment}
        />
        <button
          type="button"
          onClick={submitGrade}
          disabled={!score?.grade || isMutating}
          className="text-white bg-[#2CE2C2] rounded uppercase disabled:opacity-50 w-full lg:w-fit px-16 py-4 font-semibold mt-4 lg:mt-0 leading-none "
        >
          {isMutating ? <LoadingSpinner /> : "Grade"}
        </button>
      </div>
    </div>
  );
}
