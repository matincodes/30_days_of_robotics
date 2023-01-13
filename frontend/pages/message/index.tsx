import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import useIsAuth from "../../utils/hooks/useIsAuth";

export default function Message() {
  const { loading, FullLoadingSpinner } = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Message</title>
      </Head>
      <Layout>
        <div className="p-[4%] w-full">
          <h2 className="text-[#AEAEAE] font-semibold text-4xl mb-4">
            Message
          </h2>
          <Link href="/message/task-grading">
            <div className="w-full h-[80px] bg-[#FAFEE7] border-b-2 border-[#DDEB89] rounded-lg p-[2%] mb-4">
              <h3 className="text-[#BFD059] font-semibold text-2xl uppercase">
                Task Grading
              </h3>
              <p className="text-[#BFD059] text-xl font-light">
                You are to grade the task of display name
              </p>
            </div>
          </Link>
          <Link href="/message/graded-task">
            <div className="w-full h-[80px] bg-[#EEFDFA] border-b-2 border-[#2CE2C2] rounded-lg p-[2%] mb-4">
              <h3 className="text-[#55CDB7] font-semibold text-2xl uppercase">
                Graded task
              </h3>
              <p className="text-[#55CDB7] text-xl font-light">
                You are to grade the task of display name
              </p>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
}
