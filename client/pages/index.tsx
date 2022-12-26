import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>30 Days of Robotics</title>
        <meta name="description" content="30 Days of Robotics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className="text-center m-auto flex flex-col items-center my-20">
        <h1 className="text-3xl font-semibold">This is the home page</h1>
        <div className="flex gap-2 ">
          <a href="/signup">Signup -&gt;</a>
          <a href="/signin">Signin -&gt;</a>
        </div>
      </main>
    </>
  );
}
