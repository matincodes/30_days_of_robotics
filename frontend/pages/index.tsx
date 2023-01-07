import Head from "next/head";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";

export default function Home() {
  const [loading, FullLoadingSpinner] = useIsAuth();
  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Home</title>
        <meta name="description" content="30 Days of Robotics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Dashboard </Layout>
    </>
  );
}
