import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

const GradeMessage = () => {
  const route = useRouter();
  console.log(route.query.message);

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Message</title>
      </Head>
      <Layout>
        {route.query.message === "task-grading" && (
          <div className="p-[4%]">
            <h2 className="text-4xl font-semibold text-[#AEAEAE] mb-4">
              Message <span className="text-[#0A0A0A]">{">"} Task Grading</span>
            </h2>
            <h1 className="text-[#2CE2C2] text-4xl font-semibold">
              Grade the submission below
            </h1>
            <p className="text-[#969696] font-light text-xl">
              Get the link to the submission below. Then proceed to the rubric
              grading.
            </p>
            <div className="flex  cursor-pointer mb-10">
              <Image
                src="/assets/Vector.svg"
                width={30}
                height={15}
                className="object-contain"
                alt="Submit link"
              />
              <p className="text-[#2CE2C2] font-medium text-xl ml-3">
                thesubmission/googledrive.com
              </p>
            </div>
            <p className="text-[#0A0A0A] font-medium text-xl">Grade here</p>
          </div>
        )}
        {route.query.message === "graded-task" && (
          <div>
            <h2>Graded task</h2>
          </div>
        )}
      </Layout>
    </>
  );
};

export default GradeMessage;
