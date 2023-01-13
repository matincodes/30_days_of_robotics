import Head from "next/head";
import Layout from "../../components/Layout";
import { useState } from "react";
import { type } from "os";

const DailyTasks = () => {
  type submitted = boolean;
  type submissionLink = string
  const [hasSubmitted, setHasSubmitted] = useState<submitted>(false);
  const [data, setData] = useState<submissionLink>("");

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Tasks</title>
      </Head>
      <Layout>
        <div className="p-[4%]">
          <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
            Tasks{" "}
            <span className="text-[#0A0A0A]">
              {">"} Day {1}
            </span>
          </h2>
          <h1 className="text-[#2CE2C2] font-semibold text-4xl">
            Robotic arm Configuration
          </h1>
          <p
            className={
              hasSubmitted ? "text-[#969696]" : "text-[#969696] mb-[150px]"
            }
          >
            Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam
            sapien velit maecenas nunc facilisi cras. Ultrices integer nulla
            cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis
            tincidunt id neque. Aliquam elementum erat et volutpat vestibulum
            tortor amet viverra morbi.
          </p>
          {hasSubmitted ? (
            <p className="text-[#2CE2C2] font-semibold text-2xl">Your task has been submitted successfully!</p>
          ) : (
            <div className="w-full h-fit flex">
              <input
                type="text"
                value={data}
                className="border-[1.5px] border-black/40 rounded-lg w-[70%] md:w-[500px] h-[50px] indent-2"
                onChange={(e) => setData(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setHasSubmitted(true)}
                className="text-white bg-[#2CE2C2] rounded h-[50px] w-[25%] md:w-[210px] uppercase ml-[20px]"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default DailyTasks;
