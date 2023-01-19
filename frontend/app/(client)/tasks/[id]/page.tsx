import Link from "next/link";
import { default as LinkIcon } from "../../../../components/Icons/Link";
import TaskSubmissionSection from "../../../../components/TaskSubmissionSection";

interface taskItem {
  id: string | number;
  day: number;
  title: string;
  content: string;
  unlocked: boolean;
}

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

const getTask = async (id: string | number): Promise<taskItem> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        id == 1
          ? {
              id: 1,
              day: 1,
              title: "Robotic arm Configuration",
              content:
                "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis tincidunt id neque. Aliquam elementum erat et  volutpat vestibulum tortor amet viverra morbi.",
              unlocked: true,
            }
          : {
              id: 2,
              day: 2,
              title: "Robotic arm Configuration",
              content:
                "Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien velit maecenas nunc facilisi cras.Ultrices integer nulla cursus dolor mi morbi aliquet elementum. Leo sit neque sit sagittis tincidunt id neque. Aliquam elementum erat et  volutpat vestibulum tortor amet viverra morbi.",
              unlocked: true,
            }
      );
    }, 2000);
  });
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

      <p className="text-[#969696]">
        Lorem ipsum dolor sit amet consectetur. Lectus felis arcu quam sapien
        velit maecenas nunc facilisi cras. Ultrices integer nulla cursus dolor
        mi morbi aliquet elementum. Leo sit neque sit sagittis tincidunt id
        neque. Aliquam elementum erat et volutpat vestibulum tortor amet viverra
        morbi.
      </p>
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
