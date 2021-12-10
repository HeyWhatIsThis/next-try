import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

{
  /* we could also call it team 
  TODO: make people's pictures and info display in a horizontal grid
  */
}

function People() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>People | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl px-5 sm:mx-auto pt-10 mt-10">
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            People
          </h1>
          <hr />
          <h2 className="text-lg my-7 font-bold">Head of Lab</h2>
          <div className="md:flex content-start my-5 text-base">
            <img src={"/professor.jpeg"} className="border-2" />
            <>&emsp;</>
            {/* TODO: make grid items closer */}
            <div className="grid grid-rows-6">
              <p className="font-semibold text-lg">Mohammed Aledhari</p>
              <p className="">Computer Science Professor</p>
            </div>
          </div>
          <h2 className="text-lg my-7 font-bold">Graduate Students</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default People;
