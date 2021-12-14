import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

/* 
TODO: add contact link
 */

function Positions() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>Positions | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl px-5 sm:mx-auto pt-10 mt-10">
        <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Positions
        </h1>
        <hr />
        <div className="my-5 text-base">Graduate research assistant</div>
        <div className="my-5 text-base">Undergraduate research assistant</div>
        <div className="my-5 text-base">Volunteer</div>
        <div className="my-5 text-base">
          Special Topics in Computer Science: Resarch Courses
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Positions;
