"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import LoadingSpinner from "./Icons/LoadingSpinner";
import Input from "./Input";

export default function TaskSubmissionSection({ id }: { id: string | number }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [submissionLink, setSubmissionLink] = useState<string>();

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function submitLink() {
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
      router.refresh();
    });
  }

  return (
    <div className="lg:flex gap-3 mt-8">
      <Input
        type="text"
        value={submissionLink}
        className="flex-grow w-full lg:max-w-sm"
        placeholder="Drop link to submission"
        onChange={(e) => setSubmissionLink(e.target.value)}
      />
      <button
        type="button"
        onClick={submitLink}
        disabled={!submissionLink || isMutating}
        className="text-white bg-[#2CE2C2] rounded uppercase disabled:opacity-50 w-full lg:w-fit px-16 py-4 font-semibold mt-4 lg:mt-0 leading-none "
      >
        {isMutating ? <LoadingSpinner /> : "Submit"}
      </button>
    </div>
  );
}
