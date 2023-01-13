import Head from "next/head";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsAuth from "../../utils/hooks/useIsAuth";
import Link from "next/link";
import { default as LinkIcon } from "../../components/Icons/Link";

interface taskItem {
  id: string | number;
  day: number;
  title: string;
  content: string;
  unlocked: boolean;
  submitted?: boolean;
  submissionLink?: string;
  grade?: string;
  comment?: string;
}

const getTask = (id: string | number): taskItem => {
  return id == 1
    ? {
        id: 1,
        day: 1,
        title: "Robotic arm Configuration",
        content:
          "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis tincidunt id neque. Aliquam elementum erat et  volutpat vestibulum tortor amet viverra morbi.",
        unlocked: true,
        submitted: true,
        submissionLink: "thesubmission/googledrive.com",
        grade: "good",
        comment:
          "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum.",
      }
    : {
        id: 2,
        day: 2,
        title: "Robotic arm Configuration",
        content:
          "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis tincidunt id neque. Aliquam elementum erat et  volutpat vestibulum tortor amet viverra morbi.",
        unlocked: true,
        submitted: false,
      };
};

const DailyTasks = () => {
  const {loading, FullLoadingSpinner} = useIsAuth();

  const router = useRouter();
  const { id } = router.query;
  const task = getTask(id as string);
  const [submitted, setSubmitted] = useState(task.submitted);

  // type submitted = boolean;
  type submissionLink = string;
  const [data, setData] = useState<submissionLink>("");
  // const [hasSubmitted, setHasSubmitted] = useState<submitted>(false);

  const submitLink = () => {
    setSubmitted(true);
    task.submissionLink = data;
    task.submitted = true;
  };

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Day {task.day}</title>
      </Head>
      <Layout>
        <div className="p-[4%]">
          <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
            <Link href="/allTasks">Tasks</Link>{" "}
            <span className="text-[#0A0A0A]">
              {">"} Day {task.day}
            </span>
          </h2>
          <h1 className="text-[#2CE2C2] font-semibold text-4xl">
            {task.title}
          </h1>
          {submitted && (
            <div className="mt-2 mb-6 p-3 border-2 border-teal rounded">
              <div className="flex items-center gap-2 text-sm leading-4 text-teal font-normal">
                <LinkIcon />{" "}
                <a href={task.submissionLink || data}>
                  {task.submissionLink || data}
                </a>{" "}
              </div>
              {task.grade && (
                <div>
                  Grade: <span>{task.grade}</span>
                </div>
              )}
              {task.comment && (
                <div>
                  Comment: <span>{task.comment}</span>
                </div>
              )}
            </div>
          )}

          <p className="text-[#969696]">
            Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam
            sapien velit maecenas nunc facilisi cras. Ultrices integer nulla
            cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis
            tincidunt id neque. Aliquam elementum erat et volutpat vestibulum
            tortor amet viverra morbi.
          </p>
          {submitted ? (
            <p className="text-[#2CE2C2] font-semibold text-2xl mt-[50px]">
              Your task has been submitted successfully!
            </p>
          ) : (
            <div className="w-full h-fit flex mt-[150px]">
              <input
                type="text"
                value={data}
                className="border-[1.5px] border-black/40 rounded-lg w-[70%] md:w-[500px] h-[50px] indent-2"
                onChange={(e) => setData(e.target.value)}
              />
              <button
                type="button"
                onClick={submitLink}
                disabled={!data}
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
