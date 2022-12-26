import Head from "next/head";
import Signin from "../components/forms/Signin";
import Signup from "../components/forms/Signup";

export default function Home() {
  return (
    <>
      <Head>
        <title>30 Days of Robotics</title>
        <meta name="description" content="30 Days of Robotics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        {" "}
        <Signup />
      </main>
    </>
  );
}
