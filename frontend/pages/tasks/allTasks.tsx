import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const AllTasks = () => {
  return (
    <>
      <Head>
        <title>30 Days of Robotics | Tasks</title>
      </Head>
      <Layout>
        <div className="p-[4%]">
          <h2 className="font-semibold text-4xl mb-[16px]">Tasks</h2>
          <div className="w-full h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Link href="/tasks/1">
              <div className="p-[4%] md:w-[165px] lg:w-[185px] xl:w-[195px] h-[180px] bg-gradient-to-r from-[#2CE2C2] to-[#1F7B6B] rounded-lg flex flex-col items-center justify-center">
                <p className="text-[#DDEB89] text-center font-semibold text-4xl uppercase">
                  Day
                </p>
                <p className="text-[#DDEB89] text-center font-semibold text-4xl mb-4">
                  1
                </p>
                <p className="text-white text-center">Build a robotic arm</p>
              </div>
            </Link>
            <Link href="/tasks/2">
              <div className="p-[4%] md:w-[165px] lg:w-[185px] xl:w-[195px] h-[180px] border-[#7E7E7E] border-[2px] rounded-lg flex flex-col items-center justify-center">
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl uppercase">
                  Day
                </p>
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl mb-4">
                  2
                </p>
                <p className="text-[#7E7E7E] text-center">
                  Build a robotic arm
                </p>
              </div>
            </Link>
            <Link href="/tasks/3">
              <div className="p-[4%] md:w-[165px] lg:w-[185px] xl:w-[195px] h-[180px] border-[#7E7E7E] border-[2px] rounded-lg flex flex-col items-center justify-center">
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl uppercase">
                  Day
                </p>
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl mb-4">
                  3
                </p>
                <p className="text-[#7E7E7E] text-center">
                  Build a robotic arm
                </p>
              </div>
            </Link>
            <Link href="/tasks/4">
              <div className="p-[4%] md:w-[165px] lg:w-[185px] xl:w-[195px] h-[180px] border-[#7E7E7E] border-[2px] rounded-lg flex flex-col items-center justify-center">
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl uppercase">
                  Day
                </p>
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl mb-4">
                  4
                </p>
                <p className="text-[#7E7E7E] text-center">
                  Build a robotic arm
                </p>
              </div>
            </Link>
            <Link href="/tasks/5">
              <div className="p-[4%] md:w-[165px] lg:w-[185px] xl:w-[195px] h-[180px] border-[#7E7E7E] border-[2px] rounded-lg flex flex-col items-center justify-center">
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl uppercase">
                  Day
                </p>
                <p className="text-[#7E7E7E] text-center font-semibold text-4xl mb-4">
                  5
                </p>
                <p className="text-[#7E7E7E] text-center">
                  Build a robotic arm
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllTasks;
