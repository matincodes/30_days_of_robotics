import Link from "next/link";
import { default as LinkIcon } from "../../../../components/Icons/Link";
import TaskSubmissionSection from "../../../../components/TaskSubmissionSection";
import { groq } from "next-sanity";
import { client } from "../../../../utils/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

// interface taskItem {
//   id: string | number;
//   day: number;
//   title: string;
//   content: string;
//   unlocked: boolean;
// }

type userTaskDetail = {
  submitted: boolean;
  submissionLink?: string;
  grade?: string;
  comment?: string;
};

type Props = {
  params: {
    id: string;
  };
};

const getTask = async (id: string | number): Promise<Task> => {
  const query = groq`*[_type=='task' && day == $id][0]{
    ...,
  }`;
  return client.fetch(query, { id: Number(id) });
};

const getUserTaskStatus = async (
  id: string | number
): Promise<userTaskDetail> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        id == "1"
          ? {
              submitted: true,
              submissionLink: "thesubmission/googledrive.com",
              grade: "good",
              comment:
                "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum.",
            }
          : {
              submitted: false,
            }
      );
    }, 2000);
  });
};

export default async function Task({ params: { id } }: Props) {
  const task = await getTask(id);
  const taskStatus = await getUserTaskStatus(id);

  // console.log("task", task);

  if (!task.unlocked)
    return (
      <div className="p-[4%]">
        <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
          <Link href="/allTasks">Tasks</Link>{" "}
          <span className="text-[#0A0A0A]">
            {">"} Day {task.day}
          </span>
        </h2>
        <h1 className="text-[#2CE2C2] font-semibold text-4xl">{task.title}</h1>

        <div className="mt-2">
          This task will be unlocked on{" "}
          {new Date(task.startDate).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
    );

  return (
    <div className="p-[4%]">
      <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
        <Link href="/allTasks">Tasks</Link>{" "}
        <span className="text-[#0A0A0A]">
          {">"} Day {task.day}
        </span>
      </h2>
      <h1 className="text-[#2CE2C2] font-semibold text-4xl">{task.title}</h1>
      {taskStatus.submitted && (
        <div className="mt-2 mb-6 p-3 border-2 border-teal rounded">
          <div className="flex items-center gap-2 text-sm leading-4 text-teal font-normal">
            <LinkIcon />{" "}
            <a href={taskStatus.submissionLink}>{taskStatus.submissionLink}</a>{" "}
          </div>
          <div>
            Grade: <span>{taskStatus.grade}</span>
          </div>
          {taskStatus.comment && (
            <div>
              Comment: <span>{taskStatus.comment}</span>
            </div>
          )}
        </div>
      )}

      <PortableText value={task.content} components={RichTextComponents} />

      {taskStatus.submitted ? (
        <p className="text-[#2CE2C2] font-semibold text-2xl mt-[50px]">
          Your task has been submitted successfully!
        </p>
      ) : (
        <TaskSubmissionSection id={id} />
      )}
    </div>
  );
}
