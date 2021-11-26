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
      <div>News</div>
    </>
  );
}

export default News;
