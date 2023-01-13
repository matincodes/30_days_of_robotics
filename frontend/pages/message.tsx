import Head from "next/head";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";

export default function Message() {
  const {loading, FullLoadingSpinner} = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Message</title>
      </Head>
      <Layout>Message </Layout>
    </>
  );
}
