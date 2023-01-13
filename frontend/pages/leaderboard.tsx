import Head from "next/head";
import Layout from "../components/Layout";
import useIsAuth from "../utils/hooks/useIsAuth";
import { default as LeaderboardComponent } from "../components/Leaderboard";

export default function Leaderboard() {
  const {loading, FullLoadingSpinner} = useIsAuth();

  if (loading) return FullLoadingSpinner;

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Leaderboard</title>
      </Head>
      <Layout className="py-4 lg:py-8">
        <LeaderboardComponent variant="list" className="mb-4 lg:mb-6" />
      </Layout>
    </>
  );
}
