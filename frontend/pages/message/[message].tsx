import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

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
          <div>
            <h2>Task Grading</h2>
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
