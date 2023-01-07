import Head from "next/head";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";

export default function Tasks() {
  const [loading, FullLoadingSpinner] = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Tasks</title>
      </Head>
      <Layout>Tasks </Layout>
    </>
  );
}
