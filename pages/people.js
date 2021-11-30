import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function People() {
  return (
    <div className="bg-gray-50 text-gray-900 h-screen w-screen">
      <Head>
        <title>People | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl mx-auto pt-10 mt-10">
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            People
          </h1>
          <hr />
          <div className="flex content-start my-5">
            {/* <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div> */}
            <img src={"/professor.jpeg"} className="border-2" />
            <>&emsp;</>
            <p className="relative z-0">Mohammed Aledhari</p>
            {/* <p className="relative flex items-center z-10">
              Computer Science Professor
            </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default People;
