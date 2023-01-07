import Head from "next/head";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";

export default function Leaderboard() {
  const [loading, FullLoadingSpinner] = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Leaderboard</title>
      </Head>
      <Layout>Leaderboard </Layout>
    </>
  );
}
