import Image from "next/image";
import Link from "next/link";
import TaskGradingSection from "../../../../components/TaskGradingSection";

type Props = {
  params: {
    id: string;
  };
};

type message =
  | {
      id: string | number;
      type: "task";
      task: {
        id: string | number;
        day: number;
        title: string;
      };
      owner: {
        id: string | number;
        displayName: string;
      };
      submission: {
        link: string;
      };
    }
  | {
      id: string | number;
      type: "grade";
      task: {
        id: string | number;
        day: number;
        title: string;
      };
      submission: {
        link: string;
        grade: string;
        comment?: string;
      };
    };

const getMessage = async (id: string | number): Promise<message> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        id == "1"
          ? {
              id,
              type: "task",
              task: {
                id: 1,
                day: 1,
                title: "Robotic arm Configuration",
              },
              owner: {
                id: 12,
                displayName: "BlessTheBoy",
              },
              submission: {
                link: "thesubmission/googledrive.com",
              },
            }
          : {
              id,
              type: "grade",
              task: {
                id: 1,
                day: 1,
                title: "Robotic arm Configuration",
              },
              submission: {
                link: "thesubmission/googledrive.com",
                grade: "excellent",
                comment:
                  "Lorem ipsum dolor sit amet consectetur. Ultrices nunc urna adipiscing sit laoreet. Cursus bibendum sagittis bibendum tortor cursus aenean condimentum nulla. Viverra imperdiet est et consequat augue commodo tempor. At nibh sit magna diam. Ipsum pellentesque euismod diam rhoncus sagittis facilisis eget. Pulvinar id amet quam est faucibus enim quis aaliquet. Pharetra quis proin vel convallis amet blandit maecenas morbi. Consequat rhoncus ipsum cursus urna proin arcu. Placerat neque egestas tempus pulvinar tristique.",
              },
            }
      );
    }, 2000);
  });
};

export default async function Message({ params: { id } }: Props) {
  const message = await getMessage(id);
  return message.type === "task" ? (
    <div className="p-[4%]">
      <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
        <Link href="/message">Message</Link>{" "}
        <span className="text-[#0A0A0A]">{">"} Task Grading</span>
      </h2>
      <h1 className="text-[#2CE2C2] text-4xl font-semibold">
        Grade the submission below
      </h1>
      <div className="my-3">
        <span>Day {message.task.day}:</span>{" "}
        <Link
          href={`/tasks/${message.task.id}`}
          className="underline decoration-teal "
        >
          {message.task.title}
        </Link>
      </div>
      <p className="text-[#969696] font-light text-xl mb-2">
        Get the link to the submission below. Then proceed to the rubric
        grading.
      </p>
      <div className="flex cursor-pointer mb-10">
        <Image
          src="/assets/Vector.svg"
          width={30}
          height={15}
          className="object-contain"
          alt="Submit link"
        />
        <Link
          href={message.submission.link}
          className="text-[#2CE2C2] font-medium text-base md:text-xl ml-3"
        >
          {message.submission.link}
        </Link>
      </div>
      <p className="text-[#0A0A0A] font-medium text-xl mb-3">Grade here</p>
      <TaskGradingSection id={id} />
    </div>
  ) : (
    <div className="p-[4%]">
      <h2 className="font-semibold text-4xl text-[#AEAEAE] mb-[16px]">
        <Link href="/message">Message</Link>{" "}
        <span className="text-[#0A0A0A]">{">"} Graded Task</span>
      </h2>
      <h1 className="text-[#2CE2C2] text-4xl font-semibold">
        Day {message.task.day}:{" "}
        <Link href={`/tasks/${message.task.id}`} className="underline">
          {message.task.title}
        </Link>
      </h1>
      <p className="text-[#969696] font-light mb-3 mt-2">
        Task Grade:{" "}
        <span className="text-xl font-medium uppercase">
          {message.submission.grade.toUpperCase()}
        </span>
      </p>
      {message.submission.comment && (
        <p className="p-4 w-full h-fit bg-[#EEFDFA] text-[#2CE2C2] rounded-lg border border-[#2CE2C2] mb-2">
          {message.submission.comment}
        </p>
      )}
      {(message.submission.grade === "excellent" && (
        <Image
          src="/assets/excellent.svg"
          width={250}
          height={250}
          className="object-contain"
          alt="Grade"
        />
      )) ||
        (message.submission.grade === "good" && (
          <Image
            src="/assets/good.svg"
            width={250}
            height={250}
            className="object-contain"
            alt="Grade"
          />
        )) ||
        (message.submission.grade === "fair" && (
          <Image
            src="/assets/fair.svg"
            width={250}
            height={250}
            className="object-contain"
            alt="Grade"
          />
        )) ||
        (message.submission.grade === "poor" && (
          <Image
            src="/assets/poor.svg"
            width={250}
            height={250}
            className="object-contain"
            alt="Grade"
          />
        ))}
    </div>
  );
}
