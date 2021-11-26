import Head from "next/head";
import { Navbar } from "../components/Navbar";

function News() {
  return (
    <>
      <Head>
        <title>News | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl mx-auto pt-8">
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            News
          </h1>
          <hr />
          <p className="my-5">This is where the news should go</p>
        </div>
      </div>
    </>
  );
}

export default News;
