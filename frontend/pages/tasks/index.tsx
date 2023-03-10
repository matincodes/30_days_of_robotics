import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import useIsAuth from "../../utils/hooks/useIsAuth";

export default function Tasks() {
  const {loading, FullLoadingSpinner} = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Tasks</title>
      </Head>
      <Layout>
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
          <Link href="/tasks/allTasks" className="w-full text-center">
            <button className="uppercase text-white bg-[#2CE2C2] rounded h-[50px] w-full md:w-[500px]">
              Tasks
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
