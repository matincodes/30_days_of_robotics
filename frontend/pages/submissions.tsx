import Head from "next/head";
import Link from "next/link";
import DoubleCheck from "../components/Icons/DoubleCheck";
import Info from "../components/Icons/Info";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";

interface submissionItem {
  id: string | number;
  taskId: string | number;
  day: number;
  title: string;
  submitted: boolean;
}
/* use `interface` if exporting so that consumers can extend */

const getSubmissions = (): submissionItem[] | null => {
  return [
    {
      id: 1,
      taskId: 1,
      day: 1,
      title: "Robotic arm Configuration",
      submitted: true,
    },
    {
      id: 2,
      taskId: 2,
      day: 2,
      title: "Robotic leg Configuration",
      submitted: false,
    },
    {
      id: 3,
      taskId: 3,
      day: 3,
      title: "Robotic leg Configuration",
      submitted: false,
    },
  ];
};
export default function Submissions() {
  const {loading, FullLoadingSpinner} = useIsAuth();
  const submissions = getSubmissions();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Submissions</title>
      </Head>
      <Layout className="py-4 lg:py-8 px-3 lg:px-5">
        <h2 className="font-semibold text-2xl text-[#AEAEAE] mb-2">
          Submissions
        </h2>
        {!submissions || submissions.length === 0 ? (
          <p
            className={`${
              submissions ? "text-teal" : "text-[#DC2B12]"
            } text-2xl font-medium px-3 lg:px-5`}
          >
            {!submissions
              ? "Not available"
              : "All your submissions and pending submission will be listed here"}
          </p>
        ) : (
          <div className="grid gap-3">
            {submissions.map((submission) => (
              <ListItem submission={submission} key={submission.id} />
            ))}
          </div>
        )}
      </Layout>
    </>
  );
}

const ListItem = ({ submission }: { submission: submissionItem }) => {
  return (
    <Link href={`/tasks/${submission.taskId}`}>
      <div
        className={`p-[10px] pl-4 lg:p-4 flex items-center rounded-lg gap-4 border-b-2 ${
          submission.submitted
            ? "border-[#BFD059] bg-[#FAFEE7]"
            : "border-[#AEAEAE] bg-[#F6F6F6]"
        }`}
      >
        <div
          className={`grow ${
            submission.submitted ? "text-[#BFD059]" : "text-[#AEAEAE]"
          }`}
        >
          <p className="font-semibold text-xl leading-5 lg:text-2xl lg:leading-6 mb-4">
            Day {submission.day}
          </p>
          <p className="font-light text-xl leading-5 lg:text-2xl lg:leading-6">
            {submission.title}
          </p>
        </div>
        {submission.submitted ? <DoubleCheck /> : <Info />}
      </div>
    </Link>
  );
};
