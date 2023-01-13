import Head from "next/head";
import Layout from "../../components/Layout";
import Tasks from "../../components/Tasks";

const AllTasks = () => {
  return (
    <>
      <Head>
        <title>30 Days of Robotics | Tasks</title>
      </Head>
      <Layout className="py-4 lg:py-8">
        <Tasks variant="grid" />
      </Layout>
    </>
  );
};

export default AllTasks;
