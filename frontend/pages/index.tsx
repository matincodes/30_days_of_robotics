import Head from "next/head";
import Layout from "../components/Layout";
import Leaderboard from "../components/Leaderboard";
import Tasks from "../components/Tasks";
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
      <Layout className="py-4 lg:py-8">
        <h2 className="hidden lg:block px-5 mb-1 text-[#AEAEAE] text-4xl font-semibold">
          Home
        </h2>
        <Leaderboard variant="scroll" className="mb-4 lg:mb-6" />
        <Tasks variant="list" />
      </Layout>
    </>
  );
}
