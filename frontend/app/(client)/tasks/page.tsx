import Image from "next/image";
import ClientSideRoute from "../../../components/ClientSideRoute";

export const dynamic = "force-static",
  revalidate = false;

export default function Tasks() {
  return (
    <>
      <div className="p-[4%] flex flex-col items-center justify-center w-full">
        <h2 className=" font-semibold text-4xl">Tasks</h2>
        <Image
          src="/assets/tasklist.svg"
          width={280}
          height={280}
          alt="Task into image"
        />
        <p className="text-center">
          Finish the previous days before unlocking the next one.
        </p>
        <ClientSideRoute route="/tasks/allTasks">
          <button className="uppercase text-white bg-[#2CE2C2] rounded h-[50px] w-full md:w-[500px]">
            Tasks
          </button>
        </ClientSideRoute>
      </div>
    </>
  );
}
